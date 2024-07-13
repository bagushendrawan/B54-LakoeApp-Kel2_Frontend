import { CheckoutPage } from "@/buyer/pages/checkout-page";
import { Login } from "@/pages/auth/login";
import { ThrowLogin } from "@/pages/auth/throw-login";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/buyer/checkout")({
  component: () => {
    const user = localStorage.getItem("token")
    if(!user)
    {
      return <ThrowLogin />
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
