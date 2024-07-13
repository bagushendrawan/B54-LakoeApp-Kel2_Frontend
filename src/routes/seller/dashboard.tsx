import { SideBar } from "@/features/side-bar";
import { createFileRoute, Navigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { DashboardPage } from "../../pages/dashboard/dashboard-page";
import { authUser } from "../__root";
import { ThrowLogin } from "@/pages/auth/throw-login";

export const Route = createFileRoute("/seller/dashboard")({
  component: () => { 
    const user = localStorage.getItem("token")
    if (!user) {

      return <ThrowLogin/>
    }
    return <Index/>
  },
});

function Index() {
  // useEffect(()=>{
  //   authUser();
  // },[])
  return (
    <div>
    <div className="w-full h-screen flex">
    <SideBar />
      <div className="w-10/12">
      <DashboardPage></DashboardPage>
      </div>
    </div>
  </div>
  );
}
