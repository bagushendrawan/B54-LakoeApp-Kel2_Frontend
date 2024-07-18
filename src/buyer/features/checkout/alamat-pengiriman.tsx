import { Button } from "@/components/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import MapComponent from "@/components/location";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { IoIosPin } from "react-icons/io";
import { IoWarning } from "react-icons/io5";
import dataDaerah from "../../../assets/data-daerah/data-daerah.json";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/textarea";

interface Villages {
  id: string;
  district_id: string;
  name: string;
}

interface Districts {
  id: string;
  regency_id: string;
  name: string;
  alt_name: string;
  latitude: number;
  longitude: number;
  villages: Villages[];
}

interface Regencies {
  id: string;
  province_id: string;
  name: string;
  alt_name: string;
  latitude: number;
  longitude: number;
  districts: Districts[];
}

interface DataDaerah {
  id: string;
  name: string;
  alt_name: string;
  latitude: number;
  longitude: number;
  regencies: Regencies[];
}

export function AlamatPengiriman() {
  // const [daerah] = useState<DataDaerah>(dataDaerah);
  const [selectedProvinsiId, setSelectedProvinsiId] = useState<string>("");
  const [selectedKabupaten, setSelectedKabupaten] = useState<Regencies[]>([]);
  const [selectedKabupatenId, setSelectedKabupatenId] = useState<string>("");
  const [selectedKecamatan, setSelectedKecamatan] = useState<Districts[]>([]);
  const [selectedKecamatanId, setSelectedKecamatanId] = useState<string>("");
  const [selectedKelurahan, setSelectedKelurahan] = useState<Villages[]>([]);

  useEffect(() => {
    if (selectedProvinsiId) {
      const kabupaten =
        dataDaerah.find((data) => selectedProvinsiId === data.id)?.regencies ||
        [];
      // console.log(kabupaten);
      setSelectedKabupaten(kabupaten);
    }

    if (selectedKabupatenId) {
      const kecamatan =
        selectedKabupaten.find((data) => selectedKabupatenId === data.id)
          ?.districts || [];

      // console.log("kecamatan", kecamatan);
      setSelectedKecamatan(kecamatan);
    }

    if (selectedKecamatanId) {
      const kelurahan =
        selectedKecamatan.find((data) => selectedKecamatanId === data.id)
          ?.villages || [];

      // console.log("kelurahan", kelurahan);
      setSelectedKelurahan(kelurahan);
    }
  }, [selectedProvinsiId, selectedKabupatenId, selectedKecamatanId]);

  return (
    <>
      <div className="p-3 border rounded-md border-black mb-5">
        <h1 className="font-bold mt-3">Alamat Pengiriman</h1>
        <div className="space-y-1">
          <Label htmlFor="nama">Nama</Label>
          <Input id="nama" name="receiver_name" className="border-black" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="phone-input">Nomor Whatsapp</Label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
              <p>+62</p>
            </div>
            <Input
              type="text"
              id="phone-input"
              className="border border-black w-full ps-12"
              placeholder="123-456-7890"
            />
          </div>
        </div>
        <div className="space-y-1">
          <Label htmlFor="kecamatan">Provinsi</Label>
          <Select onValueChange={(id) => setSelectedProvinsiId(id)}>
            <SelectTrigger className="border-black text-gray-500">
              <SelectValue placeholder="Ketik disini untuk cari Provinsi" />
            </SelectTrigger>
            <SelectContent>
              {dataDaerah.map((provinsi) => {
                return (
                  <SelectItem value={provinsi.id}>
                    <p className="text-black">{provinsi.name}</p>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label htmlFor="kecamatan">Kabupaten</Label>
          <Select onValueChange={(id) => setSelectedKabupatenId(id)}>
            <SelectTrigger className="border-black text-gray-500">
              <SelectValue placeholder="Ketik disini untuk cari Kabupaten" />
            </SelectTrigger>
            <SelectContent>
              {selectedKabupaten?.map((kabupaten) => {
                return (
                  <SelectItem value={kabupaten.id}>
                    <p className="text-black">{kabupaten.name}</p>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label htmlFor="kecamatan">Kecamatan</Label>
          <Select
            onValueChange={(id) => {
              setSelectedKecamatanId(id);
            }}
          >
            <SelectTrigger className="border-black text-gray-500">
              <SelectValue placeholder="Ketik disini untuk cari Kecamatan" />
            </SelectTrigger>
            <SelectContent>
              {selectedKecamatan?.map((kecamatan) => {
                return (
                  <SelectItem value={kecamatan.id}>
                    <p className="text-black">{kecamatan.name}</p>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label htmlFor="kecamatan">Kelurahan</Label>
          <Select>
            <SelectTrigger className="border-black text-gray-500">
              <SelectValue placeholder="Ketik disini untuk cari Kelurahan" />
            </SelectTrigger>
            <SelectContent>
              {selectedKelurahan?.map((kelurahan) => {
                return (
                  <SelectItem value={kelurahan.id}>
                    <p className="text-black">{kelurahan.name}</p>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label htmlFor="alamat">Detail Alamat</Label>
          <Textarea
            id="alamat"
            name="receiver_address"
            className="border-black h-20 resize-none"
          ></Textarea>
        </div>
        <div className="space-y-1">
          <Label htmlFor="alamat">Pin Alamat</Label>
          <div className="p-3 border border-blue-900 bg-blue-100 rounded-md flex justify-around items-center">
            <div className="flex gap-3 items-center">
              <IoIosPin className="text-2xl" />
              <p>Karang Semut, Trimulya, Jetis, Bantul, Yogyakarta Indonesia</p>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-white text-blue-500 border border-blue-900 hover:bg-blue-200 hover:text-black">
                  Ubah Pin Point
                </Button>
              </DialogTrigger>
              <DialogContent className="text-sm">
                <DialogHeader className="border-b-2 py-3">
                  <DialogTitle>Tandai Pin Point</DialogTitle>
                </DialogHeader>

                <div className="p-3 border border-blue-900 bg-blue-100 rounded-md flex gap-3 items-center">
                  <IoWarning />
                  <p>Pastikan pin point lokasi sesuai dengan alamat!</p>
                </div>

                <div>
                  <MapComponent />
                </div>

                <div className="flex gap-3 items-center text-blue-500">
                  <IoIosPin className="text-2xl" />
                  <p>
                    Karang Semut, Trimulya, Jetis, Bantul, Daerah Istimewa
                    Yogyakarta Indonesia
                  </p>
                </div>

                <div className="flex gap-5 justify-center">
                  <Button className="w-5/12 bg-white text-blue-500 border border-blue-900 hover:bg-blue-200 hover:text-black">
                    Kembali
                  </Button>
                  <Button className="w-5/12 bg-blue-700 text-white border border-blue-900 hover:bg-blue-200 hover:text-black">
                    Pilih Lokasi
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}
