
import { LocationContextProvider } from '@/context/LocationContext'
import { TemplateContextProvider } from '@/context/TemplateContext'
import { CardLokasi } from '@/features/cardLokasi'
import { CardTemplate } from '@/features/cardTemplatePesan'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test')({
  component: () => <div><TemplateContextProvider><CardTemplate onSave={function (): void {
    throw new Error('Function not implemented.')
  }} /></TemplateContextProvider></div>
})