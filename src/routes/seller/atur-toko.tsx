import { MainSetting } from '@/features/mainInformasi'
import { SideBar } from '@/features/side-bar'
import { Login } from '@/pages/auth/login'
import { createFileRoute } from '@tanstack/react-router'
import { isAuthenticated } from '../__root'

export const Route = createFileRoute('/seller/atur-toko')({
  component: () => {
    if(!isAuthenticated())
    {
      return <Login />
    }

    <div>
      <div className="w-full h-screen flex">
        <SideBar />
        <div className='w-10/12'>
        <MainSetting></MainSetting>
        </div>
      </div>
    </div>
  }
})

