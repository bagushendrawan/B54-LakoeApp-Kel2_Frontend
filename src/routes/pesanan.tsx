import { PesananPage } from '@/pages/pesanan-page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pesanan')({
  component: Pesanan
})

function Pesanan() {
  return (
    <div>
      <PesananPage />
    </div>
  )
}