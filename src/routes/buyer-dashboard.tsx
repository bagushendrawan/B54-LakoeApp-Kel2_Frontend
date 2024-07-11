import { BuyerDashboardPage } from '@/pages/buyer-dashboard-page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/buyer-dashboard')({
  component: BuyerDashboard
})

function BuyerDashboard() {
  return (
    <>
    <BuyerDashboardPage />
    </>
  )
}