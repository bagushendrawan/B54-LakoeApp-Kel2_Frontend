import { Button } from "@/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import React, { useState } from "react";

interface Location {
  id: number;
  namaLokasi: string;
  alamat: string;
  kota: string;
  kodePos: string;
  pinpoint: string;
}

export const Toko: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([
    {
      id: 1,
      namaLokasi: " 1",
      alamat: "Alamat 1",
      kota: "Kota 1",
      kodePos: "11111",
      pinpoint: "Pinpoint 1",
    },
    {
      id: 2,
      namaLokasi: "Lokasi 2",
      alamat: "Alamat 2",
      kota: "Kota 2",
      kodePos: "22222",
      pinpoint: "Pinpoint 2",
    },
    {
      id: 3,
      namaLokasi: "Lokasi 3",
      alamat: "Alamat 3",
      kota: "Kota 3",
      kodePos: "33333",
      pinpoint: "Pinpoint 3",
    },
  ]);

  const [editId, setEditId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Location>({
    id: 0,
    namaLokasi: "",
    alamat: "",
    kota: "",
    kodePos: "",
    pinpoint: "",
  });

  const handleEdit = (location: Location) => {
    setEditId(location.id);
    setFormData(location);
  };

  const handleDelete = (id: number) => {
    setLocations(locations.filter((location) => location.id !== id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editId !== null) {
      setLocations(
        locations.map((location) =>
          location.id === editId ? formData : location
        )
      );
      setEditId(null);
      setFormData({
        id: 0,
        namaLokasi: "",
        alamat: "",
        kota: "",
        kodePos: "",
        pinpoint: "",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mt-5 mr-10 ">
          <Dialog>
            <DialogTrigger>
              <Button variant="outline">Tambah Lokasi</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Tambahkan Lokasi Baru</DialogTitle>
                <DialogDescription>
                  Tambahkan Lokasi Baru Toko.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="namaLokasi" className="text-right">
                    Nama Lokasi
                  </Label>
                  <Input
                    id="namaLokasi"
                    defaultValue="Nama Lokasi"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="alamat" className="text-right">
                    Alamat
                  </Label>
                  <Input
                    id="alamat"
                    defaultValue="Alamat"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="alamat" className="text-right">
                    Kota/Kecamatan
                  </Label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="cari Kota/Kecamatan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Kota/Kecamatan</SelectLabel>
                        <SelectItem value="Cimanggis">Cimanggis</SelectItem>
                        <SelectItem value="Cinere">Cinere</SelectItem>
                        <SelectItem value="Cipayung">Cipayung</SelectItem>
                        <SelectItem value="Limo">Limo</SelectItem>
                        <SelectItem value="Pancoran Mas">
                          Pancoran Mas
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="alamat" className="text-right">
                    Kode Pos
                  </Label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Kode Pos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Kode Pos</SelectLabel>
                        <SelectItem value="54318">Cimanggis</SelectItem>
                        <SelectItem value="54318">Cinere</SelectItem>
                        <SelectItem value="Cipayung">Cipayung</SelectItem>
                        <SelectItem value="Limo">Limo</SelectItem>
                        <SelectItem value="Pancoran Mas">
                          Pancoran Mas
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="items-center">
                <Label htmlFor="username" className="text-right">
                  Pinpoint Lokasi
                  <DialogDescription className="text-left">
                    Tandai Lokasi Untuk Mempermudah Permintaan Pickup Kurir.
                  </DialogDescription>
                </Label>
                Ini dari
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </form>
    </>
  );
};

export {};
