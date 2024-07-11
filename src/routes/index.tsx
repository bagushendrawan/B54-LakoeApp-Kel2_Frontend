
<<<<<<< HEAD
import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "../pages/dashboard-page";
import { FormProdukPages } from "@/pages/form-produk-baru";
import { Register } from "@/pages/register";
import { Login } from "@/pages/login";
=======
import { SideBar } from "@/features/side-bar";
import { DashboardPage } from "../pages/dashboard/dashboard-page";
import { FormProdukPages } from "../pages/addProduct/form-produk-baru";
import { createFileRoute } from "@tanstack/react-router";
import { Register } from "@/pages/register/register";
>>>>>>> origin/product

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2 flex">
<<<<<<< HEAD
        {/* <DashboardPage /> */}
        <FormProdukPages />
        {/* <Register/> */}
        {/* <Login/> */}
=======
      <SideBar />
      <DashboardPage />
      {/* <FormProdukPages /> */}
      {/* <Register/> */}
>>>>>>> origin/product
    </div>
  );
}
