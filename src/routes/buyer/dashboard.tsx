import { ProdukPage } from "@/buyer/pages/produk-page";
import { Login } from "@/pages/auth/login";
import { createFileRoute } from "@tanstack/react-router";
import { isAuthenticated } from "../__root";

export const Route = createFileRoute("/buyer/dashboard")({
  component: () => {
    if(!isAuthenticated())
    {
      return <Login />
    }

   return <Produk/>
  }
});

function Produk() {
  return (
    <>
      <ProdukPage />
    </>
  );
}
