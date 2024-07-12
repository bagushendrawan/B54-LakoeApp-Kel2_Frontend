import { Button } from "@/components/button";
import { Label } from "@/components/label";

export function HeaderPengaturan() {
  return (
    <>
      <div className="w-screen">
        <div className="mt-3">
          <Label className="text-2xl pl-5">Pengaturan</Label>
        </div>
      </div>
    </>
  );
}

export function HeaderInformasiToko() {
  return (
    <>
      <div className="w-screen">
        <div className="mt-3">
          <Label className="font-bold text-xl">Informasi Toko</Label>
        </div>
      </div>
    </>
  );
}

export function HeaderLogoToko() {
  return (
    <>
      <div className="w-screen">
        <div className="mt-3 mb-5">
          <Label className="font-bold text-xl">Logo Toko</Label>
        </div>
      </div>
    </>
  );
}

export function TemplatePesanHeader() {
  return (
    <>
      <div className="w-screen inline-flex justify-between">
        <div className="mt-3 mb-5 w-screen flex flex-col">
          <Label className="font-bold text-xl mt-3">
            Daftar Template Pesan
          </Label>
        </div>
        <div className="mr-10 mt-3">
          <Button variant="outline">Buat Template</Button>
        </div>
      </div>
    </>
  );
}
