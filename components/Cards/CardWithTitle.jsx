import React from 'react'

export default function CardWithTitle({text,children}) {
  return (
    <div className='text-purple-dark border shadow border-purple-semi-light rounded p-5'>
        <h2 className='font-bold mb-5'>{text}</h2>
        {children}
    </div>
  )
}
