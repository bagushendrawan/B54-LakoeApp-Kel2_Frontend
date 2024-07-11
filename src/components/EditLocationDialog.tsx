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
  location: Location | null;
  onSave: (data: Location) => void;
  children?: React.ReactNode;
}

interface Location {
  id: number;
  namaLokasi: string;
  alamat: string;
  kota: string;
  kodePos: string;
  pinpoint: string;
}

const EditLocationDialog: React.FC<DialogProps> = ({
  location,
  onSave,
  children,
}) => {
  const [formData, setFormData] = useState<Location | null>(location);

  useEffect(() => {
    setFormData(location);
  }, [location]);

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
            <DialogTitle>Edit Lokasi</DialogTitle>
            <DialogDescription>Edit Lokasi Toko.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="namaLokasi" className="text-right">
                Nama Lokasi
              </Label>
              <Input
                id="namaLokasi"
                name="namaLokasi"
                value={namaLokasi}
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
            <Button onClick={handleSave}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditLocationDialog;
