import { SideBar } from "@/features/side-bar";
import { Setting } from "@/pages/setting/setting";
import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute, ProtectedSellerRoute } from "../__root";

export const Route = createFileRoute("/seller/pengaturan")({
  component: () => (
    <ProtectedRoute>
      <ProtectedSellerRoute>
        <Pengaturan />
      </ProtectedSellerRoute>
    </ProtectedRoute>
  ),
});

function Pengaturan() {
  return (
    <div className="flex bg-[#F6F7D4]">
      <SideBar />
      <div className="w-full p-4 h-screen overflow-y-auto">
        <Setting />
      </div>
      {/* <FormProdukPages /> */}
      {/* <Register/> */}
    </div>
  );
}
