import { ProdukPage } from "@/buyer/pages/produk-page";
import { Login } from "@/pages/auth/login";
import { ThrowLogin } from "@/pages/auth/throw-login";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/buyer/dashboard")({
  component: () => {
    const user = localStorage.getItem("token")
    if(!user)
    {
      return <ThrowLogin />
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
