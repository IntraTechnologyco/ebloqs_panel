import React from 'react'

export default function RadioButton({text,id,name,onChange,value,checked}) {
  return (
    <div className='flex'>
        <input id={id} name={name} value={value} type="radio" onChange={onChange} checked={checked} />
        <label className='ml-2' htmlFor={id}>{text}</label>
    </div>
  )
}
