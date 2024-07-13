import { SideBar } from '@/features/side-bar';
import { Login } from '@/pages/auth/login';
import { ThrowLogin } from '@/pages/auth/throw-login';
import Product from '@/pages/product';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/seller/produk')({
  component: () => {
    const user = localStorage.getItem("token")
    if(!user)
    {
      return <ThrowLogin />
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