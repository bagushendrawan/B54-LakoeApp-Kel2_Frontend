import { Toaster } from '@/components/toaster';
import { SideBar } from '@/features/side-bar';
import { createRootRoute, ErrorComponent, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="w-full h-screen flex">
        <SideBar />
        <div className='w-full bg-stone-200 h-screen overflow-y-auto'>
          <Outlet />
          <Toaster/>
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  ), errorComponent: ErrorComponent
});
