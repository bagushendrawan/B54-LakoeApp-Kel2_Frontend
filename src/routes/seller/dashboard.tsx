import { SideBar } from "@/features/side-bar";
import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "../../pages/dashboard/dashboard-page";
import { ProtectedRoute, ProtectedSellerRoute } from "../__root";

export const Route = createFileRoute("/seller/dashboard")({
  component: () => (
    <ProtectedRoute>
      <ProtectedSellerRoute>
      <Index/>
      </ProtectedSellerRoute>
    </ProtectedRoute>
  )
});

function Index() {
  // useEffect(()=>{
  //   authUser();
  // },[])
  return (
    <div>
    <div className="w-full h-auto flex bg-slate-800">
    <SideBar />
      <div className="w-full h-screen overflow-y-auto">
      <DashboardPage></DashboardPage>
      </div>
    </div>
  </div>
  );
}
