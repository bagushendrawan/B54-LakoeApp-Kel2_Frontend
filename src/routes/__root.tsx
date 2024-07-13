import { Toaster } from '@/components/toaster';
import { SideBar } from '@/features/side-bar';
import useStore from '@/z-context';
import { createRootRoute, ErrorComponent, Navigate, Outlet, redirect } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Login } from '@/pages/auth/login';
import App from '@/App';
import Axios from 'axios';
import { useEffect } from 'react';
import { useToast } from '@/components/use-toast';

export function throwLoginToast(){
  console.log("throw login toast");
  const {toast} = useToast()
  toast({
    variant: "destructive",
    title: `Error!`,
    description: `Please Login First`,
  });
}

export async function authUser(){
  const token = localStorage.getItem("token");
  try {
    const auth = await Axios({
      method: "get",
      url: `http://localhost:3000/login/auth`,
      headers: { 
          "Content-Type": "multipart/form-data",
          'Authorization': `Bearer ${token}`
      },
      })

      if(auth.status === 401){
        localStorage.removeItem("token");
      }
  } catch(err){
    const {toast} = useToast()
    toast({
      variant: "destructive",
      title: `Error!`,
    });
  }
}

// export async function checkAuth(){
//   const token = localStorage.token;
//   const setUser = useStore((state) => state.SET_USER);
//   const {toast} = useToast()
//   if(!token){
//     toast({
//       variant: "destructive",
//       title: `Error!`,
//       description: `Please Login First`,
//     });
//   }

//   try {
//     const response = await Axios({
//       method: "get",
//       url: `http://localhost:3000/login/auth`,
//       headers: { 
//           "Content-Type": "multipart/form-data",
//           'Authorization': `Bearer ${token}`
//       },
//       })
//       setUser(response.data)
//   } catch(err){
//     console.log("err",err);
//     localStorage.removeItem("token");
//   }
    
// }

export const Route = createRootRoute({
  component: () => {
    // if(!isAuthenticated())
    // {
    //   return <Login />
    // }

    return <App/>
  }, errorComponent: ErrorComponent,
});
