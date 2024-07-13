import { SideBar } from "@/features/side-bar";
import { DashboardPage } from "../../pages/dashboard/dashboard-page";
import { FormProdukPages } from "../../pages/addProduct/form-produk-baru";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { Register } from "@/pages/auth/register";
import { isAuthenticated } from "../__root";
import { Login } from "@/pages/auth/login";

export const Route = createFileRoute("/seller/")({
  component: () => {
    if(!isAuthenticated())
    {
      return <Login />
    }

    return <Index/>
  },
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
