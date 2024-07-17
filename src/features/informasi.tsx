
// ======================================================================================================
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Textarea } from "@/components/textarea";
import { HeaderLogoToko } from "./headerPengaturan";

import React, { useState } from "react";
import { Informasi } from "@/datas/type";

export const FormInformasiToko: React.FC = () => {
  // State untuk menyimpan nilai dari input, textarea, dan file
  const [formData, setFormData] = useState<Informasi[]>([]);

  const [namaToko, setNamaToko] = useState<string>("");
  const [selogan, setSelogan] = useState<string>("");
  const [deskripsi, setDeskripsi] = useState<string>("");
  const [image, setImage] = useState<string | File | null>(null);

  // Handler untuk mengubah nilai input teks
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNamaToko(e.target.value);
  };

  // Handler untuk mengubah nilai input teks
  const handleSeloganChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelogan(e.target.value);
  };

  // Handler untuk mengubah nilai textarea
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDeskripsi(e.target.value);
  };

  // Handler untuk mengubah nilai input file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  // Handler untuk mengirimkan data form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newStore: Informasi = {
      id: formData.length + 1, // Generate unique id
      namaToko,
      selogan,
      deskripsi,
      image,
      completed: false,
    };
    // Tambahkan data baru ke state formData
    setFormData([...formData, newStore]);
    // Reset form
    setNamaToko("");
    setSelogan("");
    setDeskripsi("");
    setImage(null);

    console.log(newStore);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-screen">
        <div className="flex gap-9">
          <div className="mt-3 w-screen">
            <div className="flex-col">
              <Label className="py-10">Selogan</Label>
              <Input
                placeholder="Buat Selogan Untuk Toko"
                className="mt-3 mb-3 w-96"
                value={selogan}
                onChange={handleSeloganChange}
              ></Input>
              <Label>Nama Toko</Label>
              <Input
                className="mt-3 mb-3 w-96"
                value={namaToko}
                onChange={handleNameChange}
              ></Input>
            </div>
          </div>
          <div className="flex-col mr-10 mt-3 w-screen">
            <div>
              <Label className="py-10">Deskripsi</Label>
              <Textarea
                className="mt-3 mb-5"
                value={deskripsi}
                onChange={handleDescriptionChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mr-10 border-b pb-5">
          <Button type="submit">Simpan</Button>
        </div>
        <HeaderLogoToko />
        <div className="border-b">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input
              id="picture"
              type="file"
              // value={image}
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </form>
  );
};