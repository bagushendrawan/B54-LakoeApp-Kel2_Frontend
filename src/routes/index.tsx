import { DashboardPage } from "@/pages/dashboard-page";
import { createFileRoute } from "@tanstack/react-router";
import { Setting } from "@/pages/setting";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div className="p-2 flex">
        <DashboardPage />
        <Setting />
      </div>
    </>
  );
}
