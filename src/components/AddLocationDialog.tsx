import { useContext, useState } from "react";
import { LocationContext } from "@/context/LocationContext";
import { Location } from "@/datas/type";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { Button, buttonVariants } from "./button";
import { Label } from "./label";
import { Input } from "./input";
import MapComponent from "./location";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./select";
interface DialogProps {
  onSave: (location: Location) => void;
}

export const AddLocation: React.FC<DialogProps> = ({ onSave }) => {
  const context = useContext(LocationContext);

  const [namaLokasi, setNamaLokasi] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kota, setKota] = useState("");
  const [kodePos, setKodePos] = useState("");
  const [pinPoint, setPinPoint] = useState<[number, number]>([
    -6.381870411756581,
    106.74959499999997
  ]);

  if (!context) {
    return null;
  }
  const { locations, setLocations } = context;

  const handleSave = () => {
    const newLocation: Location = {
      id: Date.now(),
      namaLokasi,
      alamat,
      kota,
      kodePos,
      pinPoint: pinPoint,
    };

    console.log(newLocation);

    setLocations([...locations, newLocation]);
    setNamaLokasi("");
    setAlamat("");
    setKota("");
    setKodePos("");
    setPinPoint([-6.381870411756581, 106.74959499999997]);
    onSave(newLocation);
  };

  return (
    <>
      <Dialog>
        <div className=" bg-slate-50">
          <div className="flex">
            <div className="mt-3 mb-5 w-full flex flex-col">
              <Label className="font-bold text-xl">Lokasi Toko</Label>
              <Label className="text-xl">
                Alamat toko ini akan digunakan sebagai alamat pengirimanmu
              </Label>
            </div>
            <div className="mt-3">
              <DialogTrigger>
                <Button className={buttonVariants({ variant: 'custom', borderRadius: 'xl' })}>Tambah Lokasi1</Button>
              </DialogTrigger>
            </div>
          </div>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Tambahkan Lokasi Baru</DialogTitle>
              <DialogDescription>Tambahkan Lokasi Baru Toko.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="namaLokasi" className="text-left">
                  Nama Lokasi
                </Label>
                <Input
                  id="namaLokasi"
                  name="namaLokasi"
                  value={namaLokasi}
                  onChange={(e) => setNamaLokasi(e.target.value)}
                  className="flex w-64"
                />
              </div>
              <div className="flex justify-between items-center">
                <Label htmlFor="alamat" className="text-left">
                  Alamat
                </Label>
                <Input
                  id="alamat"
                  name="alamat"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  className="flex w-64"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <Label htmlFor="kota" className="text-left">
                    Kota/Kecamatan
                  </Label>
                </div>
                <div className="flex w-64">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Your Kota/Kecamatan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Kota/Kecamatan</SelectLabel>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* <Input
                  id="kota"
                  name="kota"
                  value={kota}
                  onChange={(e) => setKota(e.target.value)}
                  className="flex w-64"
                /> */}
              <div className="flex justify-between items-center">
                <div>
                  <Label htmlFor="kodePos" className="text-left">
                    Kode Pos
                  </Label>
                </div>
                <div className="flex w-64">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Your Kode Pos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Kode Pos</SelectLabel>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                {/* <Input
                  id="kodePos"
                  name="kodePos"
                  value={kodePos}
                  onChange={(e) => setKodePos(e.target.value)}
                  className="flex w-64"
                /> */}
              </div>
              <div className="flex-col justify-between items-center">
                <Label htmlFor="pinpoint" className="text-left">
                  Pinpoint Lokasi
                </Label>
                <MapComponent markerPosition={pinPoint} setMarkerPosition={setPinPoint} />
              </div>
            </div>
            <DialogFooter>
              <DialogClose>
                <Button className={buttonVariants({ variant: 'custom', borderRadius: 'xl' })} onClick={handleSave}>Save changes</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
};