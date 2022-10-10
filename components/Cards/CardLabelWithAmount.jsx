import React from 'react'

export default function CardLabelWithAmount({text,amount}) {
  return (
    <div className='border shadow p-6 rounded '>
        <p className='text-blue-semi-dark font-bold'>{text}</p>
        <br />
        <span className='text-4xl font-bold'>{amount}</span>
    </div>
  )
}
