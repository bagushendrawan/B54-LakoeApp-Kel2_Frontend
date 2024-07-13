import { FormProdukBaru } from '@/features/form-produk-baru';
import { SideBar } from '@/features/side-bar';
import { Login } from '@/pages/auth/login';
import { ThrowLogin } from '@/pages/auth/throw-login';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/seller/add-product')({
  component: () => {
    const user = localStorage.getItem("token")
    if(!user)
    {
      return <ThrowLogin />
    }

    return <AddProduct/>
  }
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