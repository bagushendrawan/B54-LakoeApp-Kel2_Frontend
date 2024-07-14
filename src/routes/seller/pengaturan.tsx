import { SideBar } from "@/features/side-bar";
import { Setting } from "@/pages/setting/setting";
import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "../__root";

export const Route = createFileRoute("/seller/pengaturan")({
  component: () => (
    <ProtectedRoute>
      <Pengaturan/>
    </ProtectedRoute>
  )
});

function Pengaturan() {
  return (
    <div className="p-2 pr-10 flex bg-slate-800">
      <SideBar />
      <div className="w-10/12">
      <Setting />
      </div>
      {/* <FormProdukPages /> */}
      {/* <Register/> */}
    </div>
  );
}
