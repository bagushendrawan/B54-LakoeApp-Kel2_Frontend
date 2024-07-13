import { SideBar } from '@/features/side-bar';
import Product from '@/pages/product';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/produk')({
  component: Produk
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