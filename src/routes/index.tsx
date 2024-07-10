
import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "../pages/dashboard-page";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2 flex">
        <DashboardPage />
        {/* <FormProdukPages /> */}
        {/* <Register/> */}
    </div>
  );
}
