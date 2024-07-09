
import { DashboardPage } from "@/pages/dashboard-page";
import { FormProdukPages } from "@/pages/form-produk-baru";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2 flex">
      <DashboardPage />
      <FormProdukPages />
    </div>
  );
}
