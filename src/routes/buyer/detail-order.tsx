import { DetailOrderPage } from '../../pages/detailOrder/detail-order-page'
import { createFileRoute } from '@tanstack/react-router'
import { isAuthenticated } from '../__root'
import { Login } from '@/pages/auth/login'

export const Route = createFileRoute('/buyer/detail-order')({
  component: () => {
    if(!isAuthenticated())
    {
      return <Login />
    }

    return <DetailOrder/>
  }
})

function DetailOrder() {
  return (
    <div>
      <DetailOrderPage />
    </div>
  )
}