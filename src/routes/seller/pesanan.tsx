import { SideBar } from '@/features/side-bar'
import { createFileRoute } from '@tanstack/react-router'
import { PesananPage } from '../../pages/order/pesanan-page'
import { ProtectedRoute } from '../__root'

export const Route = createFileRoute('/seller/pesanan')({
  component: () => (
    <ProtectedRoute>
      <Pesanan/>
    </ProtectedRoute>
  )
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