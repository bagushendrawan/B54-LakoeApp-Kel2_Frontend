import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2 hidden">
        <Link to="/" className="[&.active]:font-bold">
          Dashboard
        </Link>{' '}
        <Link to="/pesanan" className="[&.active]:font-bold">
          Pesanan
        </Link>
        <Link to="/produk" className="[&.active]:font-bold">
          Produk
        </Link>
        <Link to="/pengaturan" className="[&.active]:font-bold">
          Pengaturan
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
