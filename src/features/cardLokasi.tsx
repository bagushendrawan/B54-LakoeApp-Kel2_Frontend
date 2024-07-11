import React, { useState } from "react";
import AddLocationDialog from "@/components/AddLocationDialog";
import EditLocationDialog from "@/components/EditLocationDialog";
import LocationCard from "@/components/LocationCard";

interface Location {
  id: number;
  namaLokasi: string;
  alamat: string;
  kota: string;
  kodePos: string;
  pinpoint: string;
}

export const CardLokasi: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [editingLocation, setEditingLocation] = useState<Location | null>(null);

  const handleAddLocation = (location: Location) => {
    setLocations([...locations, location]);
  };

  const handleEditLocation = (updatedLocation: Location) => {
    setLocations(
      locations.map((location) =>
        location.id === updatedLocation.id ? updatedLocation : location
      )
    );
    setEditingLocation(null);
  };

  const handleDeleteLocation = (id: number) => {
    setLocations(locations.filter((location) => location.id !== id));
  };

  return (
    <>
      <AddLocationDialog onSave={handleAddLocation} />
      {locations.map((location) => (
        <LocationCard
          key={location.id}
          location={location}
          onDelete={handleDeleteLocation}
          onEdit={setEditingLocation}
        />
      ))}
      {editingLocation && (
        <EditLocationDialog
          location={editingLocation}
          onSave={handleEditLocation}
        />
      )}
    </>
  );
};
