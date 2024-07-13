import { FormProdukBaru } from '@/features/form-produk-baru';
import { SideBar } from '@/features/side-bar';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/add-product')({
  component: AddProduct
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