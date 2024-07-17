import React, { useContext, useState } from "react";
import { Button } from "@/components/button";
import { UpdateLocation } from "@/components/EditLocationDialog";
import type { Location } from "@/datas/type";
import { LocationContext } from "@/context/LocationContext";

interface LocationCardProps {
  location: Location;
  onDelete: (id: number) => void;
  onEdit: (location: Location) => void;
  onSave: (updatedLocations: Location) => void
  // children: Location;
}

export const LocationCard: React.FC<LocationCardProps> = ({
  location,
  onDelete,
  onEdit,
  onSave,
  // children,
}) => {
  const context = useContext(LocationContext);

  const [namaLokasi] = useState(location.namaLokasi);
  const [alamat] = useState(location.alamat);
  const [kota] = useState(location.kota);
  const [kodePos] = useState(location.kodePos);
  const [pinPoint] = useState(location.pinPoint);


  if (!context) {
    return null;
  }

  const { locations, setLocations } = context;

  // const handleSave = () => {
  //   if (locations) {
  //     // onSave(locations)
  //   }
  // };

  onEdit(location);
  setLocations(locations);
  // onSave(updatedLocations: Location)

  return (
    <>
      <div className="border rounded p-4 flex justify-between items-start">
        <div>
          <p>
            <strong>Nama Lokasi:</strong> {namaLokasi}{" "}
            <span className="bg-green-200 text-green-800 py-1 px-2 rounded">
              Alamat Utama
            </span>
          </p>
          <p>
            <strong>Alamat:</strong> {alamat}
          </p>
          <p>
            <strong>Kota/Kecamatan:</strong> {kota}
          </p>
          <p>
            <strong>Kode Pos:</strong> {kodePos}
          </p>
          <p>
            <strong>Pinpoint:</strong>{" "}
            <a href={pinPoint} className="text-blue-600">
              Sudah Pinpoint
            </a>
          </p>
        </div>
        <div className="flex space-x-2">
          <UpdateLocation
            location={location}
            onUpdate={() => onSave(updatedLocations)}
          // onSave={handleSave}

          // variant="ghost"
          />
          <Button variant="ghost" onClick={() => onDelete(location.id)}>
            🗑️
          </Button>
        </div>
      </div >
    </>
  );
};