import { DetailOrderPage } from '@/pages/detail-order-page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/detail-order')({
  component: DetailOrder
})

function DetailOrder() {
  return (
    <div>
      <DetailOrderPage />
    </div>
  )
}