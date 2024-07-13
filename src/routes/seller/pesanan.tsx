import { SideBar } from '@/features/side-bar'
import { PesananPage } from '../../pages/order/pesanan-page'
import { createFileRoute } from '@tanstack/react-router'
import { Login } from '@/pages/auth/login'
import { isAuthenticated } from '../__root'

export const Route = createFileRoute('/seller/pesanan')({
  component: () => {
    if(!isAuthenticated())
    {
      return <Login />
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