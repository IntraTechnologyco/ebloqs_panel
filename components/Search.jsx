import Image from 'next/image'
import React from 'react'

export default function Search({placeholder,onChange}) {
  return (
    <div className='w-full h-full flex items-center border border-purple-full-light bg-white rounded px-2'>
        <input onKeyDown={onChange} className='w-full h-full focus-within:outline-none rounded placeholder-purple-dark/50' placeholder={placeholder} type="search" maxLength={40} />
        <button><Image src="/images/search.svg" width={24} height={24}/></button>
    </div>
  )
}
