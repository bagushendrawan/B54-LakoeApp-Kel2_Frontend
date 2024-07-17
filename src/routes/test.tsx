import { AddInformasi } from '@/components/AddInformasi'
import { AddLocation } from '@/components/AddLocationDialog'
import { UpdateLocation } from '@/components/EditLocationDialog'
import { InformasiList } from '@/components/InformasiCard'
import { LocationCard } from '@/components/LocationCard'
import { LocationContextProvider } from '@/context/InformasiContext'
import { Location } from '@/datas/type'
import { CardLokasi } from '@/features/cardLokasi'
import { LokasiToko } from '@/features/lokasi'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test')({
  component: () => <div><LocationContextProvider><LokasiToko /></LocationContextProvider></div>
})