import { ProdukPage } from "@/buyer/pages/produk-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/buyer")({
  component: Produk,
});

function Produk() {
  return (
    <>
      <ProdukPage />
    </>
  );
}
