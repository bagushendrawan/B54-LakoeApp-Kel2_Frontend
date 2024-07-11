import React from "react";
import { Button } from "@/components/button";

interface Location {
  id: number;
  namaLokasi: string;
  alamat: string;
  kota: string;
  kodePos: string;
  pinpoint: string;
}

interface LocationCardProps {
  location: Location;
  onDelete: (id: number) => void;
  onEdit: (location: Location) => void;
}

const LocationCard: React.FC<LocationCardProps> = ({
  location,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="border rounded p-4 flex justify-between items-start">
      <div>
        <p>
          <strong>Nama Lokasi:</strong> {location.namaLokasi}{" "}
          <span className="bg-green-200 text-green-800 py-1 px-2 rounded">
            Alamat Utama
          </span>
        </p>
        <p>
          <strong>Alamat:</strong> {location.alamat}
        </p>
        <p>
          <strong>Kota/Kecamatan:</strong> {location.kota}
        </p>
        <p>
          <strong>Kode Pos:</strong> {location.kodePos}
        </p>
        <p>
          <strong>Pinpoint:</strong>{" "}
          <a href="#" className="text-blue-600">
            Sudah Pinpoint
          </a>
        </p>
      </div>
      <div className="flex space-x-2">
        <Button variant="ghost" onClick={() => onEdit(location)}>
          ✏️
        </Button>
        <Button variant="ghost" onClick={() => onDelete(location.id)}>
          🗑️
        </Button>
      </div>
    </div>
  );
};

export default LocationCard;
