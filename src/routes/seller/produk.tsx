import { SideBar } from '@/features/side-bar';
import Product from '@/pages/product';
import { createFileRoute } from '@tanstack/react-router';
import { ProtectedRoute } from '../__root';

export const Route = createFileRoute('/seller/produk')({
  component: () => (
    <ProtectedRoute>
      <Produk/>
    </ProtectedRoute>
  )
})

function Produk() {
  return (
    <div>
      <div className="w-full h-screen flex bg-slate-800">
      <SideBar />
      <div className='w-full h-screen overflow-y-auto p-2'>
      <Product></Product>
      </div>
      </div>
  </div>
  )
}