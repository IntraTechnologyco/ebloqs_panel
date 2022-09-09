import Link from 'next/link'
import React from 'react'

export default function LinkButtonOutlinePurpleDark({text,href}) {
  return (
    <Link href={href}><span className='border-2 font-medium border-purple-dark px-2 py-1 cursor-pointer text-purple-dark rounded'>{text}</span></Link>
  )
}
