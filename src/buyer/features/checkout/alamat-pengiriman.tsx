import { Input } from "@/components/input";
import { Label } from "@/components/label";
import MapComponentCheckout from "@/components/location/map-componen-checkout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { Textarea } from "@/components/textarea";
import { useEffect, useState } from "react";
import dataDaerah from "../../../assets/data-daerah/data-daerah.json";
import { Route } from "@/routes/buyer/checkout";
import  Axios  from "axios";
import useStore from "@/z-context";
import { useCheckoutForm } from "@/buyer/hooks/use-checkout-form";

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

// interface DataDaerah {
//   id: string;
//   name: string;
//   alt_name: string;
//   latitude: number;
//   longitude: number;
//   regencies: Regencies[];
// }

const form = useCheckoutForm();

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
          <Input id="nama" className="border-black" {...form.register("receiver_name")} />
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
              {...form.register("receiver_phone")}
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
                  <SelectItem value={kelurahan.id} {...form.register("receiver_district")}>
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
            className="border-black h-20 resize-none"
            {...form.register("receiver_address")}
          ></Textarea>
        </div>
        <div className="space-y-1">
            <MapComponentCheckout />
        </div>
      </div>
    </>
  );
}
