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
            <Label className="font-bold text-xl">Lokasi Toko</Label>
            <Label className="text-xl">
              Alamat toko ini akan digunakan sebagai alamat pengirimanmu
            </Label>
          </div>
          <div className="mr-40 mt-3">
            <DialogTrigger asChild>
              <Button variant="outline">Tambah Lokasi</Button>
            </DialogTrigger>
          </div>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Tambahkan Lokasi Baru</DialogTitle>
              <DialogDescription>Tambahkan Lokasi Baru Toko.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="judulPesan" className="text-right">
                  Nama Lokasi
                </Label>
                <Input
                  id="judulPesan"
                  name="judulPesan"
                  value={formData.judulPesan}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="daftarIsiPesan" className="text-right">
                  Alamat
                </Label>
                <Input
                  id="daftarIsiPesan"
                  name="daftarIsiPesan"
                  value={formData.daftarIsiPesan.join(", ")}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      daftarIsiPesan: e.target.value.split(", "),
                    }))
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="namaPembeli" className="text-right">
                  Kota/Kecamatan
                </Label>
                <Input
                  id="namaPembeli"
                  name="namaPembeli"
                  value={formData.namaPembeli}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="namaToko" className="text-right">
                  Kode Pos
                </Label>
                <Input
                  id="namaToko"
                  name="namaToko"
                  value={formData.namaToko}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="namaProduk" className="text-right">
                  Pinpoint Lokasi
                </Label>
                <Input
                  id="namaProduk"
                  name="namaProduk"
                  value={formData.namaProduk}
                  onChange={handleChange}
                  className="col-span-3"
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
