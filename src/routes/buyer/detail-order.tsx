import { Login } from '@/pages/auth/login'
import { createFileRoute } from '@tanstack/react-router'
import { DetailOrderPage } from '../../pages/detailOrder/detail-order-page'
import { ThrowLogin } from '@/pages/auth/throw-login'

export const Route = createFileRoute('/buyer/detail-order')({
  component: () => {
    const user = localStorage.getItem("token")
    if(!user)
    {
      return <ThrowLogin />
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