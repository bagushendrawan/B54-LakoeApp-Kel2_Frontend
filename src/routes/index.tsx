
import { createFileRoute } from "@tanstack/react-router";
// import { DashboardPage } from "../pages/dashboard-page";
// import { Register } from "@/pages/register";
// import { Login } from "@/pages/login";
// import { FormProdukPages } from "@/pages/addProduct/form-produk-baru";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2 flex">
        {/* <DashboardPage /> */}
        {/* <FormProdukPages /> */}
        {/* <Register/> */}
        {/* <Login/> */}
    </div>
  );
}
