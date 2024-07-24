import { PengirimanPages } from "@/pages/setting/pengiriman";
import { MainSetting } from "@/features/mainInformasi";
import { SideBar } from "@/features/side-bar";
import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute, ProtectedSellerRoute } from "../__root";

export const Route = createFileRoute("/seller/pengiriman")({
  component: () => (
    <ProtectedRoute>
      <ProtectedSellerRoute>
        <Pengiriman />
      </ProtectedSellerRoute>
    </ProtectedRoute>
  ),
});

function Pengiriman() {
  return (
    <div className="flex bg-[#F6F7D4]">
      <SideBar />
      <div className="w-full p-2 h-screen">
        <PengirimanPages />
      </div>
    </div>
  );
}
