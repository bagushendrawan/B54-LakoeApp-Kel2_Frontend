import { ChangePass } from '@/pages/password/change'
import { RequestPass } from '@/pages/password/request'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/change-password/$token')({
  component: () => <div><ChangePass/></div>
})