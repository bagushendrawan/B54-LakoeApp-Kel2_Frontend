import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pengaturan')({
  component: Pengaturan,
})

function Pengaturan() {
  return <div>Hello from Pengaturan!</div>
}
