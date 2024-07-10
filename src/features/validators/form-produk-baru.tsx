"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../../components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/form"
import { Input } from "../../components/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/select"

import { Textarea } from "../../components/textarea"


const formSchema = z.object({
  nama_produk: z.string({message:"Nama produk tidak boleh kosong"}).max(50),
  url_halaman_form: z.string({message:"Url harus diisi"}).min(2).max(50),
  deskripsi_produk: z.string({message:"Deskripsi harus diisi"}).max(3000),
})


export function ProductForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        nama_produk: "",
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="nama_produk"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel className="font-normal mt-2">Nama Produk</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan nama produk" {...field} required/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      )
  }

  export function URLHalamanCheckoutForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        url_halaman_form: "",
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="url_halaman_form"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel className="font-normal">URL Halaman Checkout</FormLabel>
                  <FormControl>
                    <Input placeholder="nama-produk" {...field} required/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      )
  }

  export function PilihKategori(){
    return (
      <div className="mt-2">
      <Select>
        <SelectTrigger className="font-light text-gray-150">
          <SelectValue placeholder="Pilih Kategori Produk"/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
      </div>
    )
  }

  export function DeskripsiProduk() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        deskripsi_produk: "",
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }

    return (
        <>
        <Textarea {...form} name="deskripsi_produk" className="h-32" required/>
        </>
      )
  }