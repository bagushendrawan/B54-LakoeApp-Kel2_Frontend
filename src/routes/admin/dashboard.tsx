import AdminPage from '@/pages/admin';
import { createFileRoute } from '@tanstack/react-router'
import { isAuthenticated } from '../__root';
import { Login } from '@/pages/auth/login';
import { useToast } from '@/components/use-toast';
import { ThrowLogin } from '@/pages/auth/throw-login';



export const Route = createFileRoute('/admin/dashboard')({
  component: () => {
    if(!isAuthenticated())
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