import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pengaturan')({
  component: Pengaturan,
})

function Pengaturan() {
  return <div className="p-2">Hello from Pengaturan!</div>
}
