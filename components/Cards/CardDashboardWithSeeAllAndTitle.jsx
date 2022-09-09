import React from 'react'
import LinkButtonOutlinePurpleDark from '../Buttons/LinkButtonOutlinePurpleDark'

export default function CardDashboardWithSeeAllAndTitle({children,text}) {
  return (
    <div className='border border-purple-semi-light shadow w-full p-5'>
        <div className='flex justify-between items-center border-b pb-3'>
        <LinkButtonOutlinePurpleDark text="See all" href="/dashboard"/>
        <p className='text-lg font-bold text-purple-dark capitalize'>{text}</p>
        </div>
        <div className='pt-5'>
        {children}
        </div>
    </div>
  )
}
