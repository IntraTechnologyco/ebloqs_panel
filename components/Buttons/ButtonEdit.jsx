import Image from 'next/image'
import React from 'react'

export default function ButtonEdit() {
  return (
    <button className='mx-1 flex items-center hover:bg-black/5 p-1 rounded'> <Image src="/images/editIcon.png" width={16} height={16} /> Edit</button>
  )
}
