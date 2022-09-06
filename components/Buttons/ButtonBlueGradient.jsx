import React from 'react'

export default function ButtonBlueGradient({text}) {
  return (
    <button className='w-full h-12 bg-gradient-blue rounded text-white font-medium drop-shadow-xl hover:drop-shadow transition-all'>{text}</button>
  )
}
