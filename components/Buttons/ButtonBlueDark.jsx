import React from 'react'

export default function ButtonBlueDark({text,onClick,disabled}) {
  return (
    <button onClick={onClick} disabled={disabled} className={`${disabled?"bg-purple-dark/70":" bg-purple-dark"} w-full h-11  rounded text-white font-medium drop-shadow transition-all`} >{text}</button>
  )
}
