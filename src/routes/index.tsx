import { SideBar } from "@/features/side-bar";
import { DashboardPage } from "../pages/dashboard-page";
// import { FormProdukPages } from "../pages/form-produk-baru";
import { createFileRoute } from "@tanstack/react-router";
// import { Register } from "@/pages/register";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2 flex">
      <SideBar />
      <DashboardPage />
      {/* <FormProdukPages /> */}
      {/* <Register /> */}
    </div>
  );
}
