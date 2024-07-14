import { FormProdukBaru } from '@/features/form-produk-baru';
import { SideBar } from '@/features/side-bar';
import { createFileRoute } from '@tanstack/react-router';
import { ProtectedRoute } from '../__root';

export const Route = createFileRoute('/seller/add-product')({
  component: () => (
    <ProtectedRoute>
      <AddProduct/>
    </ProtectedRoute>
  )
})

function AddProduct() {
  return (
    <div className="w-full h-screen flex">
      <SideBar />
      <div className='w-10/12 p-2'>
        <FormProdukBaru></FormProdukBaru>
      </div>
    </div>
  )
}