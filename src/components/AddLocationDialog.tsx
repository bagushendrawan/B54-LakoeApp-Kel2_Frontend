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
  onSave: (data: Location) => void;
}

interface Location {
  id: number;
  namaLokasi: string;
  alamat: string;
  kota: string;
  kodePos: string;
  pinpoint: string;
}

const AddLocationDialog: React.FC<DialogProps> = ({ onSave }) => {
  const [formData, setFormData] = useState<Location>({
    id: 0,
    namaLokasi: "",
    alamat: "",
    kota: "",
    kodePos: "",
    pinpoint: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave({ ...formData, id: Date.now() });
    setFormData({
      id: 0,
      namaLokasi: "",
      alamat: "",
      kota: "",
      kodePos: "",
      pinpoint: "",
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
            <DialogTrigger>
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
                <Label htmlFor="namaLokasi" className="text-right">
                  Nama Lokasi
                </Label>
                <Input
                  id="namaLokasi"
                  name="namaLokasi"
                  value={formData.namaLokasi}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="alamat" className="text-right">
                  Alamat
                </Label>
                <Input
                  id="alamat"
                  name="alamat"
                  value={formData.alamat}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="kota" className="text-right">
                  Kota/Kecamatan
                </Label>
                <Input
                  id="kota"
                  name="kota"
                  value={formData.kota}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="kodePos" className="text-right">
                  Kode Pos
                </Label>
                <Input
                  id="kodePos"
                  name="kodePos"
                  value={formData.kodePos}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pinpoint" className="text-right">
                  Pinpoint Lokasi
                </Label>
                <Input
                  id="pinpoint"
                  name="pinpoint"
                  value={formData.pinpoint}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose>
                <Button onClick={handleSave}>Save changes</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default AddLocationDialog;
