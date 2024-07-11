import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Textarea } from "@/components/textarea";
import { HeaderLogoToko } from "./headerPengaturan";

import React, { useState } from "react";
<<<<<<< HEAD


export const FormInformasiToko: React.FC = () => {
  // State untuk menyimpan nilai dari input, textarea, dan file
  const [formData, setFormData] = useState({
=======
import { store } from "@/datas/type";

export const FormInformasiToko: React.FC = () => {
  // State untuk menyimpan nilai dari input, textarea, dan file
  const [formData, setFormData] = useState<store>({
>>>>>>> origin/crud-setting
    namaToko: "",
    selogan: "",
    deskripsi: "",
    file: undefined as File | undefined,
  });

  // Handler untuk mengubah nilai input teks
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      namaToko: e.target.value,
    });
  };

  // Handler untuk mengubah nilai input teks
  const handleSeloganChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      selogan: e.target.value,
    });
  };

  // Handler untuk mengubah nilai textarea
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, deskripsi: e.target.value });
  };

  // Handler untuk mengubah nilai input file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFormData({ ...formData, file });
    }
  };

  // Handler untuk mengirimkan data form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lakukan sesuatu dengan formData, misalnya kirim ke server
    console.log("Form Data:", formData);
    // Reset form jika diperlukan
    setFormData({ selogan: "", namaToko: "", deskripsi: "", file: undefined });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-screen">
        <div className="flex gap-9">
          <div className="mt-3 w-screen">
            <Label className="py-10">Selogan</Label>
            <Input
              placeholder="Buat Selogan Untuk Toko"
              className="mt-3 mb-3"
              value={formData.selogan}
              onChange={handleSeloganChange}
            ></Input>
            <Label>Nama Toko</Label>
            <Input
              className="mt-3 mb-3"
              value={formData.namaToko}
              onChange={handleNameChange}
            ></Input>
          </div>
          <div className="flex-col mr-10 mt-3 w-screen">
            <Label className="py-10">Deskripsi</Label>
            <Textarea
              className="mt-3 mb-5"
              value={formData.deskripsi}
              onChange={handleDescriptionChange}
            />
          </div>
        </div>
        <div className="flex justify-end mr-10 border-b pb-5">
          <Button type="submit">Simpan</Button>
        </div>
        <HeaderLogoToko />
        <div className="border-b">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input id="picture" type="file" onChange={handleFileChange} />
          </div>
        </div>
      </div>
    </form>
  );
};
