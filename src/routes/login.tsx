import { Login } from '@/pages/login/login'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: () => <div><Login></Login></div>
})