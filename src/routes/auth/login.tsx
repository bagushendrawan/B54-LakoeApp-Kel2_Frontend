import { Login } from '@/pages/login/login'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/login')({
  component: () => <div><Login/></div>
})