import React from "react";
import { Button } from "@/components/button";
import { TemplatePesan } from "@/datas/type";
import { UpdateTemplate } from "./EditTemplateDialog";

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
  const { judulPesan, daftarIsiPesan } = template

  return (
    <div className="border rounded p-4 flex justify-between items-start">
      <div className="flex-col w-screen">
        <p className="font-bold text-2xl">
          <strong>{judulPesan} </strong>
        </p>
        <p className="mt-10">{daftarIsiPesan}</p>
      </div>
      <div className="flex">
        <div className="w-32">
          <UpdateTemplate
            template={template}
            onUpdate={() => onEdit(template)}
          // onSave={handleSave}

          // variant="ghost"
          />
        </div>
        <div className="mt-3">
          <Button variant="outline" onClick={() => onDelete(template.id)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
