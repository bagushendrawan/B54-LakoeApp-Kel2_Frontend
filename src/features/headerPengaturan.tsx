import { Button } from "@/components/button";
import { DialogHeader, DialogFooter } from "@/components/dialog";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/select";

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
export function LokasiTokoHeader() {
  return (
    <>
      <div className="w-screen inline-flex ">
        <div className="mt-3 mb-5 w-screen flex flex-col">
          <Label className="font-bold text-xl">Lokasi Toko</Label>
          <Label className="mt-3 font-medium text-gray-400">
            Alamat akan digunakan sebgai alamat pengirimanmu
          </Label>
        </div>
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
