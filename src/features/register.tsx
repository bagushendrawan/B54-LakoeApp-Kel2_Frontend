"use client"

import { Label } from "@/components/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/select";
import { useToast } from "@/components/use-toast";
import { LoadingSpinner } from "@/routes/__root";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "@tanstack/react-router";
import Axios from "axios";
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

const registerSchema = z.object({
    name: z.string({message:"username tidak boleh kosong"}).max(50),
    email: z.string({message:"email harus diisi"}).min(2).max(50),
    phone: z.string({message:"no telp harus diisi"}).max(16),
    password: z.string({message:"password harus diisi"}).min(8).max(32),
    role_id: z.any(),
  })

export function RegisterForm() {
  const {toast} = useToast()
  const navigate = useNavigate({from:"/auth/register"});
    // 1. Define your form.
    const form = useForm<z.infer<typeof registerSchema>>({
      mode: "onChange",
      resolver: zodResolver(registerSchema),
      defaultValues: {
        name: "",
        email: "",
        phone: "",
        password: "",
        role_id: 1,
      },
    })
   
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof registerSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
    try {
      const data = {
          name: values.name,
          email: values.email,
          password: values.password,
          phone: values.phone,
          role_id: values.role_id
      }
      const response = await Axios({
          method: "post",
          url: `http://localhost:3000/users`,
          data: data,
          headers: { "Content-Type": "application/json" },
          })
          if(response.status === 201)
          navigate({to: "/auth/login"});
          toast({
            variant: "success",
            title: `User Created! ${response.data.name}`,
            description: `Please Login to use our services`,
          })
        } catch (error : any) {
          toast({
            variant: "destructive",
            title: `Error!`,
            description: `${error.message}`,
          })
        console.log(error);
        }
    }

    return (
      <div className="w-8/12 h-10/12 rounded-sm mt-16 bg-white flex m-auto">
        <div className="flex w-1/2 justify-center items-center flex-col p-8 rounded-sm">
        <h1 className="font-bold text-2xl text-red-600">Register Here</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-4/6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel className="font-normal mt-2">Username <Label className="text-red-600">*</Label></FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan username" {...field} required/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel className="font-normal mt-2">Email <Label className="text-red-600">*</Label></FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Masukan email" {...field} required/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel className="font-normal mt-2">Phone <Label className="text-red-600">*</Label></FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Masukan phone" {...field} required/>
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
                  <FormLabel className="font-normal mt-2">Password <Label className="text-red-600">*</Label></FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Masukan password" {...field} required/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
              <p>Role <Label className="text-red-600">*</Label></p>
              <Select defaultValue="1" onValueChange={(e) => {
                form.setValue("role_id",parseInt(e))
              }}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Role"></SelectValue>
                </SelectTrigger>
                <SelectContent side="top">
                  <SelectGroup>
                    <SelectLabel className="border-b-4">Role List</SelectLabel>
                    <SelectItem value="1">Buyer</SelectItem>
                    <SelectItem value="2">Seller</SelectItem>
                    <SelectItem value="3">Admin</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            <div className="flex gap-4 items-center text-sm">
            {!form.formState.isSubmitting ? <Button type="submit" className="bg-red-600">Register</Button> : <Button type="submit" disabled  className="bg-red-600">Register <LoadingSpinner></LoadingSpinner></Button>}
            <div className="flex flex-col">
              <div className="flex">  
              <h1 className="me-1">Are You A Buyer?</h1>
              <Link to="/buyer/dashboard" className="text-blue-500">Click Here</Link>
              </div>

              <div className="flex">
              <h1 className="me-1">Do you have an account?</h1>
              <Link to="/auth/login" className="text-blue-500">Login</Link>
              </div>
            </div>
            </div>
          </form>
        </Form>
        </div>
        <div className="flex flex-col w-1/2 justify-center items-center bg-red-50 rounded-sm">
        <img src="/auth/register.png" className="w-3/4 object-cover"/>
        <img src="/Lakoe.png" className="w-2/6"/>
        </div>
        </div>
      )
  }

