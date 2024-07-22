
import { LokasiTokoHeaders } from '@/components/mapComponents'
import { CarouselSize } from '@/components/location/test'
import { LocationContextProvider } from '@/context/LocationContext'
import { TemplateContextProvider } from '@/context/TemplateContext'
import { Location, TemplatePesan } from '@/datas/type'
import { CardLokasi } from '@/features/cardLokasi'
import { CardTemplate } from '@/features/cardTemplatePesan'
import { FormInformasiToko } from '@/features/informasi'
import { createFileRoute } from '@tanstack/react-router'
import { LatLng } from 'leaflet'
import MapComponent from '@/components/location'
import { TemplateCard } from '@/components/TemplateCard'
import { MainSetting } from '@/features/mainInformasi'

export const Route = createFileRoute('/test')({
  component: () => <div>
    <MainSetting />
    {/* <LocationContextProvider><CardLokasi onSave={function (): void {
      throw new Error('Function not implemented.')
    }} /></LocationContextProvider> */}
    {/* <MapComponent /> */}
  </div>
})