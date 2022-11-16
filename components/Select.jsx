import React from 'react'

export default function Select({data,label,onChange,value,name, disabled}) {
  return (
    <div>
        <label className='font-medium text-purple-dark'>{label}</label>
        <br />
        <select onChange={onChange} required value={value} name={name} disabled={disabled} className="mt-1 border rounded h-12 w-full focus-within:outline-none px-2 text-purple-dark">
        {
            data.map((opt,idx)=>{
                return(
                    <option key={idx} value={opt.type}>{opt.name}</option>
                )
            })
        }
        </select>
    </div>
  )
}
