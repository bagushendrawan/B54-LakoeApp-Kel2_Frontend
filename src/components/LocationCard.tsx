import React from "react";
import { Button } from "@/components/button";
import { UpdateLocation } from "@/components/EditLocationDialog";
import type { Location } from "@/datas/type";

interface LocationCardProps {
  location: Location;
  onDelete: (id: number) => void;
  onEdit: (location: Location) => void;
}

export const LocationCard: React.FC<LocationCardProps> = ({
  location,
  onDelete,
  onEdit,

}) => {
  const { namaLokasi, alamat, kota, kodePos, pinPoint } = location

  return (
    <>
      <div className="border rounded p-4 flex justify-between items-start">
        <div className="w-screen">
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
        <div className="flex">
          <div className="w-32">
            <UpdateLocation
              location={location}
              onUpdate={() => onEdit(location)}
            // onSave={handleSave}
            // variant="ghost"
            />
          </div>
          <div className="mt-5">
            <Button variant="outline" onClick={() => onDelete(location.id)}>
              Delete
            </Button>
          </div>
        </div>
      </div >
    </>
  );
};