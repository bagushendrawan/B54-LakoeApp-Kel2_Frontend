import { MainSetting } from '@/features/mainInformasi'
import { SideBar } from '@/features/side-bar'
import { createFileRoute } from '@tanstack/react-router'
import { ProtectedRoute } from '../__root'

export const Route = createFileRoute('/seller/atur-toko')({
  component: () => (
    <ProtectedRoute>
      <AturToko/>
    </ProtectedRoute>
  )
})

function AturToko(){
  return (
    <div>
    <div className="w-full h-screen flex bg-slate-800">
      <SideBar />
      <div className='w-10/12'>
      <MainSetting></MainSetting>
      </div>
    </div>
  </div>
  )
}

