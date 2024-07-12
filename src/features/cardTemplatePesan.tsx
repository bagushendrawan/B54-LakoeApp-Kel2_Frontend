import React, { useState } from "react";
import { AddTemplatePesan } from "@/components/AddTemplatePesan";
import { EditTemplateDialog } from "@/components/EditTemplateDialog";
import { TemplateCard } from "@/components/TemplateCard";

interface TamplatePesan {
  id: number;
  judulPesan: string;
  daftarIsiPesan: string[];
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

  const handleEditTemplate = (updatedTemplate: TamplatePesan) => {
    setPesans(
      templatePesans.map((templatePesan) =>
        templatePesan.id === updatedTemplate.id
          ? updatedTemplate
          : templatePesan
      )
    );
    setEditingPesan(null);
  };

  const handleDeleteTemplate = (id: number) => {
    setPesans(
      templatePesans.filter((templatePesan) => templatePesan.id !== id)
    );
  };

  return (
    <>
      <AddTemplatePesan onSave={handleAddLocation} />
      {templatePesans.map((templatePesan) => (
        <TemplateCard
          key={templatePesan.id}
          template={templatePesan}
          onDelete={handleDeleteTemplate}
          onEdit={setEditingPesan}
        />
      ))}
      {editingPesan && (
        <EditTemplateDialog
          template={editingPesan}
          onSave={handleEditTemplate}
        />
      )}
    </>
  );
};
