import Product from '@/pages/product';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/produk')({
  component: Produk
})

function Produk() {
  return (
    <div className="w-full p-2">
      <Product />
    </div>
  )
}