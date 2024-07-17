import React, { useContext, useState } from 'react';
import { LocationContext } from '@/context/LocationContext';
import { Location } from '@/datas/type';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './dialog';
import { Button } from './button';
import { Label } from './label';
import { Input } from './input';

interface UpdateLocationProps {
  location: Location;
  onSave: (updatedLocations: Location) => void;
}


export const UpdateLocation: React.FC<UpdateLocationProps> = ({ location, onSave }) => {
  const context = useContext(LocationContext);
  const [namaLokasi, setNamaLokasi] = useState(location.namaLokasi);
  const [alamat, setAlamat] = useState(location.alamat);
  const [kota, setKota] = useState(location.kota);
  const [kodePos, setKodePos] = useState(location.kodePos);
  const [pinPoint, setPinPoint] = useState(location.pinPoint);
  
  if (!context) {
    return null;
  }
  
  const { locations, setLocations } = context;

  const handleUpdate = () => {
    const updatedLocations = locations.map(loc =>
      loc.id === location.id ? { ...loc, namaLokasi, alamat, kota, kodePos, pinPoint } : loc
    );
    setLocations(updatedLocations);
    onSave(updatedLocations);
  };

  return (
    <div className="mt-5 mr-10">
      <Dialog>
        <DialogTrigger>
          <Button variant="ghost">Edit Location</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Lokasi</DialogTitle>
            <DialogDescription>Edit Lokasi Toko.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="namaLokasi" className="text-right">
                Nama Lokasi
              </Label>
              <Input
                id="namaLokasi"
                name="namaLokasi"
                value={namaLokasi}
                onChange={(e) => setNamaLokasi(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="alamat" className="text-right">
                Alamat
              </Label>
              <Input
                id="alamat"
                name="alamat"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="kota" className="text-right">
                Kota/Kecamatan
              </Label>
              <Input
                id="kota"
                name="kota"
                value={kota}
                onChange={(e) => setKota(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="kodePos" className="text-right">
                Kode Pos
              </Label>
              <Input
                id="kodePos"
                name="kodePos"
                value={kodePos}
                onChange={(e) => setKodePos(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="pinpoint" className="text-right">
                Pinpoint Lokasi
              </Label>
              <Input
                id="pinpoint"
                name="pinpoint"
                value={pinPoint}
                onChange={(e) => setPinPoint(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleUpdate}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};



// =====================================================================================================================================
// import React, { useEffect, useState } from "react";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
// } from "@/components/dialog";
// import { Button } from "@/components/button";
// import { Input } from "@/components/input";
// import { Label } from "@/components/label";
// // import { useLocationContext } from "@/hooks/useLocationContext";

// interface DialogPropsLocations {
//   location: Location;
//   onSave: (location: Location) => void;
//   children?: React.ReactNode;
// }
// // interface Location {
// //   id: string;
// //   namaLokasi: string;
// //   alamat: string;
// //   kota: string;
// //   kodePos: string;
// //   pinpoint: string;
// // }

// export const EditLocationDialog: React.FC<DialogPropsLocations> = ({
//   location,
//   onSave,
//   // children,
// }) => {
//   // console.log(location)
//   // const { locations, setLocations } = useLocationContext()
//   const [formData, setFormData] = useState<Location>(location);

//   useEffect(() => {
//     setLocations(locations);
//   }, [location, locations, setLocations]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (locations) setLocations({ ...locations, [e.target.name]: e.target.value });
//   };

//   const handleSave = () => {
//     const newLocations: Location[] = locations.map((location) => {
//       const newLocation: Location = {
//         id: "",
//         namaLokasi: "",
//         alamat: "",
//         kota: "",
//         kodePos: "",
//         pinpoint: ""
//       }

//       return newLocation
//     })
//     setLocations(location)
//     onSave(location);

//   };

//   // if (!formData) return null;

//   return (
//     <div className="mt-5 mr-10">
//       <Dialog>
//         <DialogTrigger>
//           <Button variant="ghost">Edit Location</Button>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>Edit Lokasi</DialogTitle>
//             <DialogDescription>Edit Lokasi Toko.</DialogDescription>
//           </DialogHeader>
//           <div className="grid gap-4 py-4">
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="namaLokasi" className="text-right">
//                 Nama Lokasi
//               </Label>
//               <Input
//                 id="namaLokasi"
//                 name="namaLokasi"
//                 value={location?.namaLokasi}
//                 onChange={handleChange}
//                 className="col-span-3"
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="alamat" className="text-right">
//                 Alamat
//               </Label>
//               <Input
//                 id="alamat"
//                 name="alamat"
//                 value={location?.alamat}
//                 onChange={handleChange}
//                 className="col-span-3"
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="kota" className="text-right">
//                 Kota/Kecamatan
//               </Label>
//               <Input
//                 id="kota"
//                 name="kota"
//                 value={location?.kota}
//                 onChange={handleChange}
//                 className="col-span-3"
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="kodePos" className="text-right">
//                 Kode Pos
//               </Label>
//               <Input
//                 id="kodePos"
//                 name="kodePos"
//                 value={location?.kodePos}
//                 onChange={handleChange}
//                 className="col-span-3"
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="pinpoint" className="text-right">
//                 Pinpoint Lokasi
//               </Label>
//               <Input
//                 id="pinpoint"
//                 name="pinpoint"
//                 value={location?.pinpoint}
//                 onChange={handleChange}
//                 className="col-span-3"
//               />
//             </div>
//           </div>
//           <DialogFooter>
//             <Button onClick={handleSave}>Save changes</Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// <div>
//   <input
//     type="text"
//     placeholder="Name"
//     value={namaLokasi}
//     onChange={(e) => setNamaLokasi(e.target.value)}
//   />
//   <input
//     type="text"
//     placeholder="Description"
//     value={alamat}
//     onChange={(e) => setAlamat(e.target.value)}
//   />
//   <input
//     type="text"
//     placeholder="Name"
//     value={kota}
//     onChange={(e) => setKota(e.target.value)}
//   />
//   <input
//     type="text"
//     placeholder="Description"
//     value={kodePos}
//     onChange={(e) => setKodePos(e.target.value)}
//   />
//   <input
//     type="text"
//     placeholder="Name"
//     value={pinPoint}
//     onChange={(e) => setPinPoint(e.target.value)}
//   />
//   <button onClick={handleUpdate}>Update</button>
// </div>

// ======================================================================================================================