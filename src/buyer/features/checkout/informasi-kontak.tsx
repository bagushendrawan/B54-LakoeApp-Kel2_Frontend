import { Input } from "@/components/input";
import { Label } from "@/components/label";

export function InformasiKontak() {
  return (
    <>
      <div className="p-3 border border-black rounded-md mb-5">
        <h1 className="font-bold mt-3">Informasi Kontak</h1>
        <div className="space-y-1">
          <Label htmlFor="nama">Nama</Label>
          <Input id="nama" className="border-black" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="nomor">Nomor Whatsapp</Label>
          <Input id="nomor" className="border-black" />
        </div>
      </div>
    </>
  );
}
