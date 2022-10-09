import React from 'react'

export default function SelectWithoutLabel({data,onChange,value,name}) {
  return (
        <select onChange={onChange} value={value} name={name} className="rounded focus-within:outline-none px-1 text-purple-dark">
        {
            data.map((opt,idx)=>{
                return(
                    <option key={idx} value={opt.name}>{opt.name}</option>
                )
            })
        }
        </select>
  )
}
