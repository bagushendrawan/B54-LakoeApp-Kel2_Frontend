import React, { useContext, useState } from "react";
import { AddLocation } from "@/components/AddLocationDialog";
import { UpdateLocation } from "@/components/EditLocationDialog";
import { LocationCard } from "@/components/LocationCard";
import { LocationContext, LocationContextProvider } from "@/context/LocationContext";
import { Location } from "@/datas/type";

interface DialogProps {
  onSave: (locations: Location[]) => void;
}

export const CardLokasi: React.FC<DialogProps> = ({ onSave }) => {
  const context = useContext(LocationContext);
  const [editingLocation, setEditingLocation] = useState<Location | null>(null);

  if (!context) {
    return null;
  }

  const { locations, setLocations } = context;

  const handleAddLocation = (newLocation: Location) => {
    const updatedLocations = [...locations, newLocation];
    setLocations(updatedLocations);
    onSave(updatedLocations);
  };

  const handleEditLocation = (updatedLocation: Location) => {
    const updatedLocations = locations.map((location) =>
      location.id === updatedLocation.id ? updatedLocation : location
    );
    setLocations(updatedLocations);
    onSave(updatedLocations);
    setEditingLocation(null);
  };

  const handleDeleteLocation = (id: number) => {
    const updatedLocations = locations.filter((location) => location.id !== id);
    setLocations(updatedLocations);
    onSave(updatedLocations);
  };

  return (
    <LocationContextProvider>
      <AddLocation onSave={handleAddLocation} />
      {locations.map((location) => (
        <LocationCard
          key={location.id}
          location={location}
          onDelete={handleDeleteLocation}
          onEdit={(location) => setEditingLocation(location)}
        />
      ))}
      {editingLocation && (
        <UpdateLocation
          location={editingLocation}
          onUpdate={handleEditLocation}
        />
      )}
    </LocationContextProvider>
  );
};
