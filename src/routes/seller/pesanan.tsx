import { SideBar } from '@/features/side-bar'
import { Login } from '@/pages/auth/login'
import { createFileRoute } from '@tanstack/react-router'
import { PesananPage } from '../../pages/order/pesanan-page'
import { ThrowLogin } from '@/pages/auth/throw-login'

export const Route = createFileRoute('/seller/pesanan')({
  component: () => {
    const user = localStorage.getItem("token")
    if(!user)
    {
      return <ThrowLogin />
    }

  return <Pesanan/>
  }
})

function Pesanan() {
  return (
  <div>
    <div className="w-full h-screen flex">
    <SideBar />
    <div className='w-10/12'>
      <PesananPage></PesananPage>
      </div>
    </div>
  </div>
  )
}