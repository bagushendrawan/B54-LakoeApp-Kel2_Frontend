import React from "react";
import { Button } from "@/components/button";

interface TemplatePesan {
  id: number;
  judulPesan: string;
  daftarIsiPesan: string[];
  namaPembeli: string;
  namaToko: string;
  namaProduk: string;
}

interface TemplateCardProps {
  template: TemplatePesan;
  onDelete: (id: number) => void;
  onEdit: (template: TemplatePesan) => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="border rounded p-4 flex justify-between items-start">
      <div className="flex-col">
        <p className="font-bold text-2xl">
          <strong>{template.judulPesan} </strong>
        </p>
        <p className="mt-10">{template.daftarIsiPesan}</p>
      </div>
      <div className="flex space-x-2">
        <Button variant="ghost" onClick={() => onEdit(template)}>
          ✏️
        </Button>
        <Button variant="ghost" onClick={() => onDelete(template.id)}>
          🗑️
        </Button>
      </div>
    </div>
  );
};
