import { SideBar } from '@/features/side-bar'
import { PesananPage } from '../pages/order/pesanan-page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pesanan')({
  component: Pesanan
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