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
  nama_produk: z.string().min(2).max(50),
})

const urlHalamanForm = z.object({
  url_halaman_form: z.string().min(2).max(50),
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
                <FormItem>
                  <FormLabel>Nama Produk</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan nama produk" {...field} />
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
    const form = useForm<z.infer<typeof urlHalamanForm>>({
      resolver: zodResolver(urlHalamanForm),
      defaultValues: {
        url_halaman_form: "",
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof urlHalamanForm>) {
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
                <FormItem>
                  <FormLabel>URL Halaman Checkout</FormLabel>
                  <FormControl>
                    <Input placeholder="nama-produk" {...field} />
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
        <SelectTrigger>
          <SelectValue placeholder="Pilih Kategori Produk" />
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
        <>
        <Textarea />
        </>
      )
  }