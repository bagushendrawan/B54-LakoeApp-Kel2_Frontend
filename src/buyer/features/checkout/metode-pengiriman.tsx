import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

interface opsiPengirimanType {
  nama: string;
  harga: number;
  image: string;
  IsAvailableForCOD: boolean;
}

const opsiPengiriman: opsiPengirimanType[] = [
  {
    harga: 10000,
    image: "https://static.desty.app/desty-store/jnt.png",
    IsAvailableForCOD: true,
    nama: "jnt",
  },
  {
    harga: 30000,
    image: "https://static.desty.app/desty-store/logistic-files/anteraja.png",
    IsAvailableForCOD: false,
    nama: "anteraja",
  },
  {
    harga: 50000,
    image: "https://static.desty.app/desty-store/logistic-files/jne.png",
    IsAvailableForCOD: true,
    nama: "jne",
  },
];

export function MetodePengiriman() {
  const [pengiriman, setPengiriman] = useState<opsiPengirimanType | undefined>(
    undefined
  );
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="p-3 border border-black rounded-md mb-5">
        <h1 className="font-bold mb-3">Metode Pengiriman</h1>
        <div className="space-y-1">
          <Dialog open={open}>
            <DialogTrigger asChild>
              {pengiriman ? (
                <button className="w-2/4 flex justify-between gap-4 items-center border p-2 rounded-lg border-blue-800 bg-blue-100" onClick={() => {setOpen(true)}}>
                  <div className="flex items-center">
                    <div className="flex items-center gap-5">
                      <img
                        src={pengiriman.image}
                        alt="img"
                        className="w-1/5 h-14"
                      />
                      <div>
                        <p>Serice</p>
                        <p>{pengiriman.nama}</p>
                        <p>Estimasi Pengiriman</p>
                      </div>
                    </div>
                    <div>{pengiriman.harga}</div>
                  </div>
                </button>
              ) : (
                <Button className="px-5 w-5/12 h-12" onClick={() => {setOpen(true)}}>
                  Pilih Metode Pengiriman
                </Button>
              )}
            </DialogTrigger>
            <DialogContent className="text-sm">
              <DialogHeader className="border-b-2 py-3">
                <DialogTitle>Pilih Metode Pengiriman</DialogTitle>
              </DialogHeader>

              <div>
                <p className="font-bold">Reguler (2-4 Hari)</p>
                <p>
                  Pembelian diatas pukul 15:00 WIB, pengiriman akan diproses
                  besok
                </p>
              </div>

              <div>
                {opsiPengiriman.map((data) => (
                  <button
                    className="w-full flex justify-between gap-4 items-center border p-7"
                    onClick={() => {
                      setPengiriman(data);
                      setOpen(false);
                    }}
                  >
                    <div className="flex gap-3 items-center">
                      <img src={data.image} alt="gambar" className="w-10" />
                      <p>{data.nama}</p>
                    </div>
                    <div>
                      <p>Rp {data.harga}</p>
                    </div>
                  </button>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
