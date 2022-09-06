import Image from 'next/image'
import React from 'react'
import Search from '../Search'

export default function TopBar() {
  return (
    <div className=' bg-[#F9F9FA] h-14 border-b flex items-center justify-between px-5'>
            <button className='px-3 h-full'>
              <Image src="/images/menuicon.svg" width={26} height={26} />
            </button>
            <div className='flex items-center'>
                {/** search */}
            <div className='w-96 h-9 flex'>
            <Search placeholder="Cliente" />
            </div>
            {/** user */}
            <div className='ml-5 flex items-center justify-end min-w-[220px]'>
                <div className='w-10 h-10 rounded-full'>
                <Image src="/images/test2.png" width={50} height={50}/>
                </div>
                <span className='ml-2 font-medium'>Hola, Breiner Lopez</span>
            </div>
            </div>
          </div>
  )
}
