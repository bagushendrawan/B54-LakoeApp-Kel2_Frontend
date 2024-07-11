import { CheckoutPage } from "@/buyer/pages/checkout-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/checkout")({
  component: Checkout,
});

function Checkout() {
  return (
    <>
      <CheckoutPage />
    </>
  );
}
