import { createFileRoute } from '@tanstack/react-router'
import { DetailOrderPage } from '../../pages/detailOrder/detail-order-page'
import { ProtectedRoute } from '../__root'

export const Route = createFileRoute('/buyer/detail-order')({
  component: () => (
    <ProtectedRoute>
      <DetailOrder/>
    </ProtectedRoute>
  )
})

function DetailOrder() {
  return (
    <div>
      <DetailOrderPage />
    </div>
  )
}