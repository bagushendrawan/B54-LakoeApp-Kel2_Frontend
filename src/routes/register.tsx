import { Register } from '@/pages/register/register'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/register')({
  component: () => <div><Register></Register></div>
})