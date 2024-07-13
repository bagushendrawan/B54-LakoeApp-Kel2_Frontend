import AdminPage from '@/pages/admin';
import { ThrowLogin } from '@/pages/auth/throw-login';
import { createFileRoute } from '@tanstack/react-router';



export const Route = createFileRoute('/admin/dashboard')({
  component: () => {
    const user = localStorage.getItem("token")
    if(!user)
    {
      return <ThrowLogin />
    }

   return <AdminPages/>
  }
})

function AdminPages() {
  return (
    <div className='w-full p-2'>
      <AdminPage />
    </div>
  )
}