import { SideBar } from "@/features/side-bar";
import { Login } from "@/pages/auth/login";
import { ThrowLogin } from "@/pages/auth/throw-login";
import { Setting } from "@/pages/setting/setting";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/seller/pengaturan")({
  component: () => {
    const user = localStorage.getItem("token")
    if(!user)
    {
      return <ThrowLogin />
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
