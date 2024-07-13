import { SideBar } from '@/features/side-bar';
import Product from '@/pages/product';
import { createFileRoute } from '@tanstack/react-router'
import { isAuthenticated } from '../__root';
import { Login } from '@/pages/auth/login';

export const Route = createFileRoute('/seller/produk')({
  component: () => {
    if(!isAuthenticated())
    {
      return <Login />
    }

    return <Produk/>
  }
})

function Produk() {
  return (
    <div>
      <div className="w-full h-screen flex">
      <SideBar />
      <div className='w-10/12 p-2'>
      <Product></Product>
      </div>
      </div>
  </div>
  )
}