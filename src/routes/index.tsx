
import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "../pages/dashboard-page";
import { FormProdukPages } from "@/pages/form-produk-baru";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2 flex">
        {/* <DashboardPage /> */}
        <FormProdukPages />
        {/* <Register/> */}
    </div>
  );
}
