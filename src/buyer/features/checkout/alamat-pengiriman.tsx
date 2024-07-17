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
import { Textarea } from "@/components/textarea";
import { IoIosPin } from "react-icons/io";
import { IoWarning } from "react-icons/io5";

export function AlamatPengiriman() {
  return (
    <>
      <div className="p-3 border rounded-md border-black mb-5">
        <h1 className="font-bold mt-3">Alamat Pengiriman</h1>
        <div className="space-y-1">
          <Label htmlFor="nama">Nama</Label>
          <Input id="nama" className="border-black" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="nomor">Nomor Whatsapp</Label>
          <Input id="nomor" className="border-black" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="kecamatan">Kecamatan</Label>
          <Input id="kecamatan" className="border-black" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="kelurahan">Kelurahan</Label>
          <Input id="kelurahan" className="border-black" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="alamat">Detail Alamat</Label>
          <Textarea id="alamat" className="resize-none border-black" />
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
                  <p>INI NANTI ISI MAPS</p>
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
