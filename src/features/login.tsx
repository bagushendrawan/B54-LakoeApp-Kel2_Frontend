"use client";

import { Label } from "@/components/label";
import { ToastAction } from "@/components/toast";
import { useToast } from "@/components/use-toast";
import { LoadingSpinner } from "@/routes/__root";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "@tanstack/react-router";
import Axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../components/form";
import { Input } from "../components/input";
import { Button } from "../components/ui/button";
import useStore from "../z-context";

const loginSchema = z.object({
  email: z.string({ message: "email harus diisi" }).min(2).max(50),
  password: z.string({ message: "password harus diisi" }).max(32),
});

export function LoginForm() {
  const { toast } = useToast();
  const setUser = useStore((state) => state.SET_USER);
  const token = localStorage.getItem("token")
  const navigate = useNavigate({ from: "/auth/login" });
  // 1. Define your form.
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const data = {
        email: values.email,
        password: values.password,
      };

      const response = await Axios({
        method: "post",
        url: `http://localhost:3000/login`,
        data: data,
        headers: { 
          "Content-Type": "application/json"
         },
      });
      
      const user = response.data.user;
      const token = response.data.token;

      if(!token){
        throw new Error("Token Not Found");
      }

      if(!user){
        throw new Error("User Not Found");
      }

      localStorage.setItem("token", token);
      setUser(response.data)
      toast({
        variant: "success",
        title: `Welcome ${user.name}!`,
      });

      switch(response.data.user.role_id){
        case 1:
          navigate({ to: "/buyer/dashboard" });
          break;
        case 2:
          navigate({ to: "/seller/dashboard" });
          break;
        case 3:
          navigate({ to: "/admin/dashboard" });
          break;
        default :
          break;
      }
      
      
    } catch (error: any) {
      console.log("error",error);
      toast({
        variant: "destructive",
        title: `Error! ${error.response.status}`,
        description: `${error.message}`,
      })
    }
  }

  useEffect(()=>{
    if(!token){
      toast({
        variant: "destructive",
        title: `Error!`,
        description: `Please login to continue`,
        action: <ToastAction altText="Try again">Try again</ToastAction>
      })
    }
  },[])

  return (
    <div className="w-8/12 h-10/12 rounded-sm mt-32 m-auto flex">
      <div className="flex bg-white h-full w-1/2 flex-col justify-start items-center pb-16 pt-8 px-4 rounded-s-sm">
      <h1 className="font-bold text-2xl text-red-600 mt-2 mb-4">Welcome Back!</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-4/6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel className="font-normal mt-2">
                  Email <Label className="text-red-600">*</Label>
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Masukan email" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel className="font-normal mt-2">
                  Password <Label className="text-red-600">*</Label>
                </FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Masukan password" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-4 items-center text-sm">
            {!form.formState.isSubmitting ? <Button type="submit" className="bg-red-600">Login</Button> : <Button type="submit" disabled className="bg-red-600">Login <LoadingSpinner></LoadingSpinner></Button>}
            <div className="flex flex-col">
              <div className="flex">
                <h1 className="me-1">Are You A Buyer?</h1>
                <Link to="/buyer/dashboard" className="text-blue-500">
                  Click Here
                </Link>
              </div>

              <div className="flex">
                <h1 className="me-1">Are You An Admin?</h1>
                <Link to="/admin/dashboard" className="text-blue-500">
                  Admin
                </Link>
              </div>

              <div className="flex">
                <h1 className="me-1">Do you have an account?</h1>
                <Link to="/auth/register" className="text-blue-500">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </form>
      </Form>
      </div>
      <div className="flex flex-col w-1/2 bg-red-50 justify-center items-center rounded-e-sm">
      <img src="/auth/login.png" className="w-3/4 object-cover"/>
      <img src="/Lakoe.png" className="w-2/6"/>
      </div>
    </div>
  );
}
