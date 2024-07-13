import { CheckoutPage } from "@/buyer/pages/checkout-page";
import { Login } from "@/pages/auth/login";
import { createFileRoute } from "@tanstack/react-router";
import { isAuthenticated } from "../__root";

export const Route = createFileRoute("/buyer/checkout")({
  component: () => {
    if(!isAuthenticated())
    {
      return <Login />
    }

    return <Checkout/>
  }
});

function Checkout() {
  return (
    <>
      <CheckoutPage />
    </>
  );
}
