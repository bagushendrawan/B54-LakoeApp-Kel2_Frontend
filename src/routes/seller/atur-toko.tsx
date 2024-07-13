import { MainSetting } from '@/features/mainInformasi'
import { SideBar } from '@/features/side-bar'
import { Login } from '@/pages/auth/login'
import { ThrowLogin } from '@/pages/auth/throw-login'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/seller/atur-toko')({
  component: () => {
    const user = localStorage.getItem("token")
    if(!user)
    {
      return <ThrowLogin />
    }
    return <AturToko/>
  }
})

function AturToko(){
  return (
    <div>
    <div className="w-full h-screen flex">
      <SideBar />
      <div className='w-10/12'>
      <MainSetting></MainSetting>
      </div>
    </div>
  </div>
  )
}

