import React from 'react'

export default function CheckBox({id,label}) {
  return (
    <div className='flex items-center'>
        <input type="checkbox" id={id} className='mr-2 h-5 w-5'/>
        <label className='text-purple-dark font-medium' htmlFor={id}>{label}</label>
    </div>
  )
}
