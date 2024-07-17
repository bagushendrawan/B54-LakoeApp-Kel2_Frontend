import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/dialog";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { Textarea } from "./textarea";

interface DialogProps {
  onSave: (data: TemplatePesan) => void;
}

interface TemplatePesan {
  id: number;
  judulPesan: string;
  daftarIsiPesan: string[];
  namaPembeli: string;
  namaToko: string;
  namaProduk: string;
}

export const AddTemplatePesan: React.FC<DialogProps> = ({ onSave }) => {
  const [formData, setFormData] = useState<TemplatePesan>({
    id: 0,
    judulPesan: "",
    daftarIsiPesan: [""],
    namaPembeli: "",
    namaToko: "",
    namaProduk: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave({ ...formData, id: Date.now() });
    setFormData({
      id: 0,
      judulPesan: "",
      daftarIsiPesan: [""],
      namaPembeli: "",
      namaToko: "",
      namaProduk: "",
    });
  };

  return (
    <div className="mt-5 mr-10">
      <Dialog>
        <div className="w-screen inline-flex justify-between">
          <div className="mt-3 mb-5 w-screen flex flex-col">
            <Label className="font-bold text-xl">Daftar Template Pesan</Label>
          </div>
          <div className="mr-40 mt-3">
            <DialogTrigger asChild>
              <Button variant="outline">Buat Tamplate</Button>
            </DialogTrigger>
          </div>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Buat Template Baru</DialogTitle>
              <DialogDescription>Buat Tamplate Pesan.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex-col justify-between items-center">
                <Label htmlFor="judulPesan" className="">
                  Judul Pesan<span className="text-red-600">*</span>
                </Label>
                <Input
                  id="judulPesan"
                  name="judulPesan"
                  value={formData.judulPesan}
                  onChange={handleChange}
                  className="flex w-full mt-4"
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex">
                  <Button variant="outline">Nama Customer</Button>
                </div>
                <div className="flex">
                  <Button variant="outline">Nama Produk</Button>
                </div>
                <div className="flex">
                  <Button variant="outline">Nama Toko</Button>
                </div>
              </div>

              <div className="flex-col justify-between items-center">
                <Label htmlFor="daftarIsiPesan" className="">
                  Detail isi pesan<span className="text-red-600">*</span>
                </Label>
                <Textarea
                  id="daftarIsiPesan"
                  name="daftarIsiPesan"
                  value={formData.daftarIsiPesan.join(", ")}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      daftarIsiPesan: e.target.value.split(", "),
                    }))
                  }
                  className="flex w-full mt-4"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={handleSave}>Save changes</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};
