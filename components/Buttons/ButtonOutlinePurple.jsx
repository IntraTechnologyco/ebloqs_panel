import React from 'react'

export default function ButtonOutlinePurple({text,onClick}) {
  return (
    <button onClick={onClick} className='border-2 font-medium border-purple-dark px-2 py-1 cursor-pointer text-purple-dark rounded'>{text}</button>
  )
}
