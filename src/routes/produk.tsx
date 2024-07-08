import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/produk')({
  component: Produk
})

function Produk() {
  return (
    <div className="p-2">
      <h3>This is Produk!</h3>
    </div>
  )
}