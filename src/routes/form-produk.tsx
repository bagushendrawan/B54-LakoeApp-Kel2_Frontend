import { SideBar } from '@/features/side-bar'
import { FormProdukPages } from '@/pages/addProduct/form-produk-baru'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/form-produk')({
  component: () => 
  <div>
    <div className="w-full h-screen flex">
      <SideBar />
      <div className='w-full p-2'>
        <FormProdukPages></FormProdukPages>
      </div>
    </div>
  </div>
})