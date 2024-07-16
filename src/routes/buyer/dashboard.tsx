import { ProdukPage } from "@/buyer/pages/produk-page";
import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "../__root";

export const Route = createFileRoute("/buyer/dashboard")({
  component: () => (
    <ProtectedRoute>
      <Produk/>
    </ProtectedRoute>
  )
});

function Produk() {
  return (
    <>
      <ProdukPage />
    </>
  );
}
