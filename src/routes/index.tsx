import { SideBar } from "@/features/side-bar";
import { DashboardPage } from "../pages/dashboard/dashboard-page";
import { FormProdukPages } from "../pages/addProduct/form-produk-baru";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { Register } from "@/pages/auth/register";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
    <div className="w-full h-screen flex">
    <SideBar />
      <div className="w-10/12">
      <DashboardPage></DashboardPage>
      </div>
    </div>
  </div>
  );
}
