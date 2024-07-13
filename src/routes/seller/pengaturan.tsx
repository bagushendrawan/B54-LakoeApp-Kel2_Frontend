import { SideBar } from "@/features/side-bar";
import { Login } from "@/pages/auth/login";
import { Setting } from "@/pages/setting/setting";
import { createFileRoute } from "@tanstack/react-router";
import { isAuthenticated } from "../__root";

export const Route = createFileRoute("/seller/pengaturan")({
  component: () => {
    if(!isAuthenticated())
    {
      return <Login />
    }

    return <Pengaturan/>
  }
});

function Pengaturan() {
  return (
    <div className="p-2 pr-10 flex">
      <SideBar />
      <div className="w-10/12">
      <Setting />
      </div>
      {/* <FormProdukPages /> */}
      {/* <Register/> */}
    </div>
  );
}
