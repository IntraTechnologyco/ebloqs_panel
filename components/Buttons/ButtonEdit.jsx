import Image from 'next/image'
import React from 'react'

export default function ButtonEdit({onClick}) {
  return (
    <button onClick={onClick} className='mx-1 flex items-center hover:bg-black/5 p-1 rounded'> <Image src="/images/editIcon.png" width={16} height={16} /> Edit</button>
  )
}
