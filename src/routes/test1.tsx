import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test1')({
  component: () => <div>Hello /test1!</div>
})