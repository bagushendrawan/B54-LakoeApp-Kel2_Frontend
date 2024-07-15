import { Outlet } from "@tanstack/react-router";

function App() {
  return (
    <>
        <div className='w-full h-screen bg-gradient-to-br from-rose-600 to-red-600'>
          <Outlet />
        </div>
      {/* <TanStackRouterDevtools /> */}
    </>
  )
}

export default App;
