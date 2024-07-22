const courier = [
  {
    id: "1",
    name: "Kurir Toko",
  },
  {
    id: "2",
    name: "Ambil Sendiri",
  },
  {
    id: "10",
    name: "Jalur Nugraha Ekakurir (JNE)",
  },
  {
    id: "11",
    name: "POS Indonesia (POS)",
  },
  {
    id: "12",
    name: "Citra Van Titipan Kilat (TIKI)",
  },
  {
    id: "13",
    name: "Priority Cargo and Package (PCP)",
  },
  {
    id: "14",
    name: "Eka Sari Lorena (ESL)",
  },
  {
    id: "15",
    name: "RPX Holding (RPX)",
  },
  {
    id: "16",
    name: "Pandu Logistics (PANDU)",
  },
  {
    id: "17",
    name: "Wahana Prestasi Logistik (WAHANA)",
  },
  {
    id: "18",
    name: "SiCepat Express (SICEPAT)",
  },
  {
    id: "19",
    name: "J&T Express (J&T)",
  },
  {
    id: "20",
    name: "Pahala Kencana Express (PAHALA)",
  },
  {
    id: "21",
    name: "SAP Express (SAP)",
  },
  {
    id: "22",
    name: "JET Express (JET)",
  },
  {
    id: "23",
    name: "Solusi Ekspres (SLIS)",
  },
  {
    id: "24",
    name: "Expedito* (EXPEDITO)",
  },
  {
    id: "25",
    name: "21 Express (DSE)",
  },
  {
    id: "26",
    name: "First Logistics (FIRST)",
  },
  {
    id: "27",
    name: "Nusantara Card Semesta (NCS)",
  },
  {
    id: "28",
    name: "Star Cargo (STAR)",
  },
  {
    id: "29",
    name: "Lion Parcel (LION)",
  },
  {
    id: "30",
    name: "Ninja Xpress (NINJA)",
  },
  {
    id: "31",
    name: "IDL Cargo (IDL)",
  },
  {
    id: "32",
    name: "Royal Express Indonesia (REX)",
  },
  {
    id: "35",
    name: "JNE Express (JNEEXPRESS)",
  },
  {
    id: "36",
    name: "Anteraja (ANTERAJA)",
  },
  {
    id: "37",
    name: "Kirimaja (KIRIMAJA)",
  },
  {
    id: "38",
    name: "Gosend (GOSEND)",
  },
  {
    id: "39",
    name: "GrabExpress (GRAB)",
  },
  {
    id: "40",
    name: "Jaladara Trans (JALADARA)",
  },
  {
    id: "41",
    name: "Indah Cargo (INDAHCARGO)",
  },
  {
    id: "42",
    name: "Raja Cepat Nusantara (RACE)",
  },
  {
    id: "43",
    name: "Jagad Total Logistic Express (JTL)",
  },
  {
    id: "44",
    name: "Armada Anak Bangsa (ARMADA)",
  },
  {
    id: "45",
    name: "Sumber Wahana Sejahtera (ALFATREK)",
  },
  {
    id: "46",
    name: "Paxel Teknologi Unggul (PAXEL)",
  },
  {
    id: "47",
    name: "Janio Technologies Private Limited (JANIO)",
  },
  {
    id: "48",
    name: "KGXpress (KGXPRESS)",
  },
  {
    id: "49",
    name: "Java Pratama Mandiri (JPM)",
  },
  {
    id: "50",
    name: "Pos Logistik Indonesia (POSLOG)",
  },
];

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { BsImage, BsPlusCircle, BsTrash } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

export function DialogKurir(props: any) {
  const [preview, setPreview] = useState<string[]>([]);
  function imageHandle(index: number, url: string) {
    const newUrl = [...preview];
    newUrl[index] = url;
    setPreview(newUrl);
    console.log(newUrl);
  }

  function getImageData(event: ChangeEvent<HTMLInputElement>) {
    const dataTransfer = new DataTransfer();

    Array.from(event.target.files!).forEach((image) =>
      dataTransfer.items.add(image)
    );

    const files = dataTransfer.files;
    const displayUrl = URL.createObjectURL(event.target.files![0]);

    return { files, displayUrl };
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size={"icon"}
          className="border-none hover:bg-none"
        >
          <BsPlusCircle className="h-8 w-8 text-gray-700 hover:text-gray-300"></BsPlusCircle>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambah Kurir</DialogTitle>
          <DialogDescription>
            Tambahkan kurir yang tersedia di toko anda.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Select onValueChange={(name) => props.setKurir(name)}>
            <SelectTrigger className=" text-gray-500">
              <SelectValue placeholder="Pilih kurir yang tersedia" />
            </SelectTrigger>
            <SelectContent className="h-64">
              {courier.map((kurir) => {
                return (
                  <SelectItem value={kurir.name}>
                    <p className="text-black">{kurir.name}</p>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="produk_foto"
              className="relative text-gray-400 focus-within:text-gray-600 block"
            >
              <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12" />
              <Input
                type="file"
                {...props.form.register("produk_foto", { required: true })}
                className="w-32 h-32 text-transparent"
                onChange={(event) => {
                  const { files, displayUrl } = getImageData(event);
                  imageHandle(0, displayUrl);
                }}
                required
              ></Input>
              {preview[0] && (
                <div>
                  <img
                    src={preview[0]}
                    className="absolute inset-4 w-full h-28 object-cover"
                  />
                  <BsTrash
                    className="absolute z-1 inset-0 text-xl text-red-600 font-bold m-2"
                    onClick={() => {
                      {
                        props.form.unregister("produk_foto");
                      }
                      imageHandle(0, "");
                    }}
                  />
                </div>
              )}
            </Label>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function PengirimanPages() {
  const form = useForm();
  const [kurir, setKurir] = useState();
  return (
    <>
      <div className="bg-white rounded-lg h-full w-full m-2 p-4 flex flex-wrap overflow-y-auto">
        <h1 className="text-2xl w-full font-bold mt-2 ms-2 mb-8">
          Pilih Pengiriman
        </h1>

        {courier.map((val) => (
          <div className="border-2 w-5/12 flex items-center m-2 p-4 rounded-lg h-24">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/92/New_Logo_JNE.png"
              className="w-24"
            ></img>
            <h1 className="ms-2">{val.name}</h1>
          </div>
        ))}
        <div className="border-2 w-1/12 flex justify-center items-center m-2 p-4 rounded-lg h-24">
          <DialogKurir set={setKurir} form={form} />
        </div>
      </div>
    </>
  );
}
