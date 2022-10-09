import Image from 'next/image'
import React from 'react'

export default function ButtonDelete({onClick}) {
  return (
    <button onClick={onClick} className='mx-1 hover:bg-black/5 p-1 rounded flex items-center'><Image src="/images/deleteIcon.png" width={16} height={16}/> delete</button>
  )
}
