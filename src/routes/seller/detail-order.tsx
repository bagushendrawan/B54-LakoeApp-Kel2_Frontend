import { createFileRoute } from "@tanstack/react-router";
import { DetailOrderPage } from "../../pages/detailOrder/detail-order-page";
import { ProtectedRoute } from "../__root";
import { SideBar } from "@/features/side-bar";

export const Route = createFileRoute("/seller/detail-order")({
  component: () => (
    <ProtectedRoute>
      <DetailOrder />
    </ProtectedRoute>
  ),
});

function DetailOrder() {
  return (
    <div>
      <div className="w-full h-auto flex bg-slate-800">
        <SideBar />
        <div className="w-full h-screen overflow-y-auto">
          <DetailOrderPage></DetailOrderPage>
        </div>
      </div>
    </div>
  );
}
