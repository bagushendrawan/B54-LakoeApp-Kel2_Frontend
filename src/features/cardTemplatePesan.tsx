import React, { useState } from "react";
import { AddTemplatePesan } from "@/components/AddTemplatePesan";
import EditLocationDialog from "@/components/EditLocationDialog";
import LocationCard from "@/components/LocationCard";

interface TamplatePesan {
  id: number;
  judulPesan: string;
  daftarIsiPesan: Text;
  namaPembeli: string;
  namaToko: string;
  namaProduk: string;
}

export const CardTemplatePesan: React.FC = () => {
  const [templatePesans, setPesans] = useState<TamplatePesan[]>([]);
  const [editingPesan, setEditingPesan] = useState<TamplatePesan | null>(null);

  const handleAddLocation = (templatePesan: TamplatePesan) => {
    setPesans([...templatePesans, templatePesan]);
  };

  const handleEditLocation = (updatedLocation: TamplatePesan) => {
    setPesans(
      templatePesans.map((templatePesan) =>
        templatePesan.id === updatedLocation.id
          ? updatedLocation
          : templatePesan
      )
    );
    setEditingPesan(null);
  };

  const handleDeleteLocation = (id: number) => {
    setPesans(
      templatePesans.filter((templatePesan) => templatePesan.id !== id)
    );
  };

  return (
    <>
      <AddTemplatePesan onSave={handleAddLocation} />
      {templatePesans.map((templatePesan) => (
        <LocationCard
          key={templatePesan.id}
          templatePesan={templatePesan}
          onDelete={handleDeleteLocation}
          onEdit={setEditingPesan}
        />
      ))}
      {editingPesan && (
        <EditLocationDialog
          templatePesan={editingPesan}
          onSave={handleEditLocation}
        />
      )}
    </>
  );
};
