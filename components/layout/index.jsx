import Image from 'next/image'
import React from 'react'
import MenuPanel from './MenuPanel'
import TopBar from './TopBar'

export default function Layout({children}) {
  return (
    <div className='flex'>
        <MenuPanel/>
        <main className='w-full'>
          <TopBar/>
            <div className='p-10'>
            {children}
            </div>
        </main>
    </div>
  )
}
