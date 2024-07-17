import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "../__root";
import { BuyerDashboardPage } from "@/pages/buyer/buyer-dashboard-page";

export const Route = createFileRoute("/buyer/dashboard")({
  component: () => (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  ),
});

function Dashboard() {
  return (
    <>
      <BuyerDashboardPage />
    </>
  );
}
