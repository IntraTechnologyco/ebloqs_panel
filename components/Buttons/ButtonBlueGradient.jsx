import React from 'react'

export default function ButtonBlueGradient({text,onClick,disabled}) {
  return (
    <button onClick={onClick} disabled={disabled} className={`${disabled?"bg-gradient-disabled":"bg-gradient-blue  hover:drop-shadow"} w-full h-12  rounded text-white font-medium drop-shadow-xl transition-all`} >{text}</button>
  )
}
