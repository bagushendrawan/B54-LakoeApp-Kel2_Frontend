import { SideBar } from "@/features/side-bar";
import { Setting } from "@/pages/setting";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pengaturan")({
  component: Pengaturan,
});

function Pengaturan() {
  return (
    <div className="p-2 pr-10 flex">
      <SideBar />
      <Setting />
      {/* <FormProdukPages /> */}
      {/* <Register/> */}
    </div>
  );
}
