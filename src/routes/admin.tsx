import AdminPage from '@/pages/admin';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin')({
  component: AdminPages
})

function AdminPages() {
  return (
    <div className='w-full p-2'>
      <AdminPage />
    </div>
  )
}