import { CheckoutPage } from "@/buyer/pages/checkout-page";
import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "../__root";

export const Route = createFileRoute("/buyer/checkout")({
  component: () => (
    <ProtectedRoute>
      <Checkout/>
    </ProtectedRoute>
  )
});

function Checkout() {
  return (
    <>
      <CheckoutPage />
    </>
  );
}
