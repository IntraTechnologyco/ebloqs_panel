import React from 'react'

export default function CustomerBalances({value,text}) {
  return (
    <div className='border bg-[#F9F9FA] p-5 shadow-sm font-bold text-center rounded'>
        <p className="text-2xl mb-2">{value}</p>
        <p className='text-blue-semi-dark'>{text}</p>
    </div>
  )
}
