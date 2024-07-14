import { Outlet } from "@tanstack/react-router";
import { Toaster } from "./components/toaster";

function App() {
  return (
    <>
        <div className='w-full bg-gradient-to-br from-rose-600 to-red-600 h-screen overflow-y-auto'>
          {/* <img src="/bg.jpg" className="w-full h-full z-0 absolute object-cover bg-cover"></img> */}
          <Outlet /> 
        </div>
      {/* <TanStackRouterDevtools /> */}
    </>
  )
}

export default App;
