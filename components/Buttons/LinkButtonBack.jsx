import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LinkButtonBack({href,text}) {
  return (
   <Link href={href}><div className='flex items-center'><Image src="/images/rowback.png" width={22} height={22}/><span className='text-xl font-bold text-purple-dark ml-2 cursor-pointer'>{text}</span></div></Link>
  )
}
