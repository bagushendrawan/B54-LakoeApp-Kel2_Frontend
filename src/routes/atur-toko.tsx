import { MainSetting } from '@/features/mainInformasi'
import { SideBar } from '@/features/side-bar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/atur-toko')({
  component: () => 
    <div>
      <div className="w-full h-screen flex">
      <SideBar />
      <div className='w-10/12'>
      <MainSetting></MainSetting>
      </div>
      </div>
    </div>
})