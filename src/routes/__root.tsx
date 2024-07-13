import { Toaster } from '@/components/toaster';
import { SideBar } from '@/features/side-bar';
import useStore from '@/z-context';
import { createRootRoute, ErrorComponent, Navigate, Outlet, redirect } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Login } from '@/pages/auth/login';
import App from '@/App';

export function isAuthenticated(){
  return useStore((state) => state.user);
}

export const Route = createRootRoute({
  component: () => {
    // if(!isAuthenticated())
    // {
    //   return <Login />
    // }

    return <App/>
  }, errorComponent: ErrorComponent,
});
