import React, { useState, useEffect } from "react";
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

interface DialogProps {
  template: TemplatePesan | null;
  onSave: (data: TemplatePesan) => void;
  children?: React.ReactNode;
}

interface TemplatePesan {
  id: number;
  judulPesan: string;
  daftarIsiPesan: string[];
  namaPembeli: string;
  namaToko: string;
  namaProduk: string;
}

export const EditTemplateDialog: React.FC<DialogProps> = ({
  template,
  onSave,
  children,
}) => {
  const [formData, setFormData] = useState<TemplatePesan | null>(template);

  useEffect(() => {
    setFormData(template);
  }, [template]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formData) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSave = () => {
    if (formData) {
      onSave(formData);
    }
  };

  // if (!formData) return null;

  return (
    <div className="mt-5 mr-10">
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Pesan</DialogTitle>
            <DialogDescription>Edit Template Pesan.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="judulPesan" className="text-right">
                Judul Pesan
              </Label>
              <Input
                id="judulPesan"
                name="judulPesan"
                value={formData?.judulPesan}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="alamdaftarIsiPesan" className="text-right">
                Daftar Isi Pesanan
              </Label>
              <Input
                id="daftarIsiPesan"
                name="daftarIsiPesan"
                value={formData?.daftarIsiPesan}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="namaPembeli" className="text-right">
                Nama Pembeli
              </Label>
              <Input
                id="namaPembeli"
                name="namaPembeli"
                value={formData?.namaPembeli}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="namaToko" className="text-right">
                Nama Toko
              </Label>
              <Input
                id="namaToko"
                name="namaToko"
                value={formData?.namaToko}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="namaProduk" className="text-right">
                Nama Produk
              </Label>
              <Input
                id="namaProduk"
                name="namaProduk"
                value={formData?.namaProduk}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSave}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
