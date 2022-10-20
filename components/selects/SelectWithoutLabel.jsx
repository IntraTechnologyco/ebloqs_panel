import React from 'react'

export default function SelectWithoutLabel({data,onChange,value,name,disabled}) {
  return (
        <select onChange={onChange} disabled={disabled} value={value} name={name} className="rounded focus-within:outline-none px-1 text-purple-dark">
        {
            data.map((opt,idx)=>{
                return(
                    <option key={idx} value={opt.id}>{opt.name}</option>
                )
            })
        }
        </select>
  )
}
