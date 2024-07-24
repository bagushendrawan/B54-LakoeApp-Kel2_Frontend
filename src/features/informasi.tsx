// ======================================================================================================
"use client";
import { Button, buttonVariants } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Textarea } from "@/components/textarea";
import { HeaderLogoToko } from "./headerPengaturan";
import { z } from "zod"
import React, { useEffect, useState } from "react";
import { Informasi } from "@/datas/type";
import { v4 as uuidv4 } from 'uuid';
import { useToast } from "@/components/use-toast";
import useStore from "@/z-context";
import Axios from "axios";
import { api } from "@/lib/api";
import { useForm } from "react-hook-form";

// const informasiSchema = z.object({
//   name: z.string({ message: "nama Tidak boleh kosong" }).max(50),
//   slogan: z.string({ massage: "slogan Tidak boleh kosong" }).min(2).max(50),
//   description: z.array({ massage: "description Tidak boleh kosong" }).max(50),
// })


type formData = {
  name: string;
  slogan: string;
  description: string;
  logo_attachment: string;
};

export const FormInformasiToko: React.FC = () => {
  const { toast } = useToast();
  const user = useStore((state) => state.user);

  // State untuk menyimpan nilai dari input, textarea, dan file
  const [formData, setFormData] = useState<formData>();
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchInfo() {
      const response = await Axios({
        method: "get",
        url: `${api}/users/info`,
        data: user.store_id,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setFormData(response.data);
    }
    fetchInfo();
  }, []);

  const formDatas = useForm<formData>();
  async function onSubmit(data: formData) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      console.log("data", data);
      const response = await Axios({
        method: "patch",
        url: `${api}/users/info`,
        data: data,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data);
      setFormData(response.data);
      toast({
        variant: "success",
        title: `Informasi Updated!`,
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: `Error!`,
        description: `${error.message}`,
      });
      console.log(error);
    }
  }
  return (
    <form onSubmit={formDatas.handleSubmit(onSubmit)} className="bg-white">
      <div>
        <div className="flex gap-9">
          <div className="mt-3">
            <div className="flex-col">
              <Label className="py-10">Selogan</Label>
              <Input
                id="slogan"
                placeholder="Buat Selogan Untuk Toko"
                className="mt-3 mb-3 w-96"
                defaultValue={formData?.slogan}
                {...formDatas.register("slogan")}
              ></Input>
              <Label>Nama Toko</Label>
              <Input
                id="name"
                className="mt-3 mb-3 w-96"
                defaultValue={formData?.name}
                {...formDatas.register("name")}
              ></Input>
            </div>
          </div>
          <div className="flex-col mr-10 mt-3 w-full">
            <div>
              <Label className="py-10">Deskripsi</Label>
              <Textarea
                id="description"
                className="mt-3 mb-5"
                defaultValue={formData?.description}
                {...formDatas.register("description")}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mr-10 border-b pb-5">
          <Button type="submit" className={buttonVariants({ variant: 'custom', className: "rounded-xl" })}>Simpan</Button>
        </div>
        <HeaderLogoToko />
        <div >
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input
              id="logo_attachment"
              type="file"
              defaultValue={formData?.logo_attachment}
              {...formDatas.register("logo_attachment")}
            />
          </div>
        </div>
      </div >
    </form >
  );
};