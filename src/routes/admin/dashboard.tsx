import AdminPage from '@/pages/admin';
import { createFileRoute } from '@tanstack/react-router';
import { ProtectedRoute } from '../__root';



export const Route = createFileRoute('/admin/dashboard')({
  component: () => (
    <ProtectedRoute>
      <AdminPages/>
    </ProtectedRoute>
  )
})

function AdminPages() {
  return (
    <div className='w-full p-2'>
      <AdminPage />
    </div>
  )
}