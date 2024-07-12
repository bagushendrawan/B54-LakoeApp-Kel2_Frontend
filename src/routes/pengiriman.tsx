import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pengiriman')({
  component: () => <div>Hello /pengiriman!</div>
})