import { FormProdukBaru } from '@/features/form-produk-baru';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/add-product')({
  component: AddProduct
})

function AddProduct() {
  return (
    <div className="w-full p-2">
      {/* <FormProdukBaru /> */}
      addproduk
    </div>
  )
}