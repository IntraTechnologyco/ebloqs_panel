import Image from 'next/image'
import React from 'react'
import { withRouter } from 'next/router'

const TopBar=({router})=> {
  return (
    <div className={`${router.asPath.includes("/login")&&"hidden"} bg-[#F9F9FA] h-12 border-b flex items-center justify-between px-5 sticky top-0 w-full z-40`}>
            <button className='px-3 h-full'>
              <Image src="/images/menuicon.svg" width={26} height={26} />
            </button>
            <div className='flex items-center'>
            {/** user */}
            <div className='ml-5 flex items-center justify-end min-w-[220px]'>
                <div className='w-10 h-10 rounded-full'>
                <Image src="/images/logoadmin.png" width={50} height={50}/>
                </div>
                <span className='ml-2 font-medium'>Hola, Usuario</span>
            </div>
            </div>
      </div>
  )
}
export default withRouter(TopBar)
