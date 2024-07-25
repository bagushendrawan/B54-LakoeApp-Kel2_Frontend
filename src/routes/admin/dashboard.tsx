import AdminPage from "@/pages/admin";
import { createFileRoute } from "@tanstack/react-router";
import { ProtectedAdminRoute, ProtectedRoute } from "../__root";

export const Route = createFileRoute("/admin/dashboard")({
  component: () => (
    <ProtectedRoute>
      <ProtectedAdminRoute>
        <AdminPages />
      </ProtectedAdminRoute>
    </ProtectedRoute>
  ),
});

function AdminPages() {
  return (
    <AdminPage />
  )
}
