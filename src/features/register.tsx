"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/form"
import { Input } from "../components/input"

const registerSchema = z.object({
    username: z.string({message:"username tidak boleh kosong"}).max(50),
    email: z.string({message:"email harus diisi"}).min(2).max(50),
    phone: z.string({message:"no telp harus diisi"}).max(16),
    password: z.string({message:"password harus diisi"}).max(32),
    role_id: z.number({message:"role_id harus diisi"}).max(1),
  })

export function RegisterForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof registerSchema>>({
      resolver: zodResolver(registerSchema),
      defaultValues: {
        username: "",
        email: "",
        phone: "",
        password: "",
        role_id: 0,
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof registerSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      const formData = new FormData();
    formData.append('full_name', values.username);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('password', values.password);
    formData.append('role_id', values.role_id);
    const response = await Axios({
        method: "post",
        url: `${api}/register`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
        })
    if(response.status === 201)
      {
          toast({
              title: "Register success!, Please check your email to verify",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
          navigate("/");
      }
    } catch (error : any) {
      toast({
        title: error.response.data,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    console.log(error);
    }
      console.log(values)
    }

    const onSubmit: SubmitHandler<registerForm> = async(data) => {
        try {
          const formData = new FormData();
          formData.append('full_name', data.full_name);
          formData.append('email', data.email);
          formData.append('password', data.password);
            const response = await Axios({
                method: "post",
                url: `${api}/register`,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
                })
            if(response.status === 201)
              {
                  toast({
                      title: "Register success!, Please check your email to verify",
                      status: "success",
                      duration: 5000,
                      isClosable: true,
                    });
                  navigate("/");
              }
            } catch (error : any) {
              toast({
                title: error.response.data,
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            console.log(error);
            }
    }

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel className="font-normal mt-2">Username</FormLabel>
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
                  <FormLabel className="font-normal mt-2">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan email" {...field} required/>
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
                  <FormLabel className="font-normal mt-2">Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan phone" {...field} required/>
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
                  <FormLabel className="font-normal mt-2">Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan password" {...field} required/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role_id"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel className="font-normal mt-2">Role_id</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan Role_id" {...field} required/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )
  }

