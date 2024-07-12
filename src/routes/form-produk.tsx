import { FormProdukPages } from '@/pages/addProduct/form-produk-baru'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/form-produk')({
  component: () => <div><FormProdukPages /></div>
})