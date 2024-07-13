import { Outlet } from "@tanstack/react-router";
import { Toaster } from "./components/toaster";

function App() {
  return (
    <>
        <div className='w-full bg-stone-200 h-screen overflow-y-auto'>
          <Outlet />
          <Toaster/>
        </div>
      {/* <TanStackRouterDevtools /> */}
    </>
  )
}

export default App;
