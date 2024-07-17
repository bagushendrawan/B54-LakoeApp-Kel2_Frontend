import { useContext, useState } from "react";
import { LocationContext } from "@/context/LocationContext";
import { Location } from "@/datas/type";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";

interface DialogProps {
  onSave: (location: Location) => void;
}

export const AddLocation: React.FC<DialogProps> = ({ onSave }) => {
  const context = useContext(LocationContext);

  const [namaLokasi, setNamaLokasi] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kota, setKota] = useState("");
  const [kodePos, setKodePos] = useState("");
  const [pinPoint, setPinPoint] = useState("");

  if (!context) {
    return null;
  }
  const { locations, setLocations } = context;

  const handleSave = () => {
    const newLocation: Location = {
      id: locations.length ? locations[locations.length - 1].id + 1 : 1,
      namaLokasi,
      alamat,
      kota,
      kodePos,
      pinPoint,
    };

    setLocations([...locations, newLocation]);
    setNamaLokasi("");
    setAlamat("");
    setKota("");
    setKodePos("");
    setPinPoint("");
    onSave(newLocation);
  };

  return (
    <div className="mt-5 mr-10">
      <Dialog>
        <div className="w-screen inline-flex justify-between">
          <div className="mt-3 mb-5 w-screen flex flex-col">
            <Label className="font-bold text-xl">Lokasi Toko</Label>
            <Label className="text-xl">
              Alamat toko ini akan digunakan sebagai alamat pengirimanmu
            </Label>
          </div>
          <div className="mr-40 mt-3">
            <DialogTrigger>
              <Button variant="outline">Tambah Lokasi</Button>
            </DialogTrigger>
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
                <Label htmlFor="kota" className="text-left">
                  Kota/Kecamatan
                </Label>
                <Input
                  id="kota"
                  name="kota"
                  value={kota}
                  onChange={(e) => setKota(e.target.value)}
                  className="flex w-64"
                />
              </div>
              <div className="flex justify-between items-center">
                <Label htmlFor="kodePos" className="text-left">
                  Kode Pos
                </Label>
                <Input
                  id="kodePos"
                  name="kodePos"
                  value={kodePos}
                  onChange={(e) => setKodePos(e.target.value)}
                  className="flex w-64"
                />
              </div>
              <div className="flex-col justify-between items-center">
                <Label htmlFor="pinpoint" className="text-left">
                  Pinpoint Lokasi
                </Label>
                <Input
                  id="pinpoint"
                  name="pinpoint"
                  value={pinPoint}
                  onChange={(e) => setPinPoint(e.target.value)}
                  className="flex w-full"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleSave}>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};