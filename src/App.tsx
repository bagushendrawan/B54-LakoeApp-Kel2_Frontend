import { Outlet } from "@tanstack/react-router";
<<<<<<< HEAD
import { Toaster } from "./components/toaster";
import useStore from "./z-context";
import { useEffect } from "react";
import Axios from "axios"
=======
>>>>>>> origin/product

function App() {
  // const user = useStore((state) => state.user)
  const setUser = useStore((state) => state.SET_USER)
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function auth(){
      try {
        const response = await Axios({
          method: "get",
          url: `http://localhost:3000/login/auth`,
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
           },
        });
        return setUser(response.data);
      } catch (error) {
          return localStorage.removeItem("token");
      }
    }
    auth();
  },[])
  return (
    <>
        <div className='w-full bg-slate-800 h-screen overflow-y-auto'>
          {/* <img src="/bg.jpg" className="w-full h-full z-0 absolute object-cover bg-cover"></img> */}
          <Outlet /> 
        </div>
      {/* <TanStackRouterDevtools /> */}
    </>
  )
}

export default App;
