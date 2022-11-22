import React from 'react'

export default function Input({type,onChange,value,label,name,required, disabled,ref}) {
  return (
    <div>
        <label className='font-medium text-purple-dark'>{label}</label>
        <br />
        <input ref={ref} required={required} type={type} onChange={onChange} value={value} name={name} className="mt-1 border rounded h-12 w-full focus-within:outline-none px-2 text-purple-dark" disabled={disabled}/>
    </div>
      )
}
