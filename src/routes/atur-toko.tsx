import { MainSetting } from '@/features/mainInformasi'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/atur-toko')({
  component: () => <div><MainSetting></MainSetting></div>
})