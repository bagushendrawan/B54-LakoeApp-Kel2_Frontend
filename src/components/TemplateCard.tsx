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
      <div>
        <p>
          <strong>Nama Lokasi:</strong> {template.judulPesan}{" "}
          <span className="bg-green-200 text-green-800 py-1 px-2 rounded">
            Alamat Utama
          </span>
        </p>
        <p>
          <strong>Alamat:</strong> {template.daftarIsiPesan}
        </p>
        <p>
          <strong>Kota/Kecamatan:</strong> {template.namaPembeli}
        </p>
        <p>
          <strong>Kode Pos:</strong> {template.namaToko}
        </p>
        <p>
          <strong>Pinpoint:</strong>
          {template.namaProduk}
          <a href="#" className="text-blue-600">
            Sudah Pinpoint
          </a>
        </p>
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
