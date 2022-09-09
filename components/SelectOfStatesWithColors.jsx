import React, { useState } from 'react'

export default function SelectOfStatesWithColors({data,state}) {
    const [stateSelect,setStateSelect]=useState(state)
  return (
    <select onChange={(e)=>setStateSelect(e.target.value)}  className={`w-full capitalize focus-within:outline-none ${stateSelect==="1"?"bg-green-200 text-green-700":stateSelect==="3"?"bg-blue-200 text-blue-700":stateSelect==="2"?"bg-red-200 text-red-700":stateSelect==="4"&&"bg-yellow-200 text-yellow-700" } font-medium rounded p-1`} >
        {
            data.map((item,idx)=>{
                return(
                    <option key={idx} value={item.id}>{state==="1"?"Paid out":state==="2"?"enviado":state==="3"?"not payed":state==="4"&&"Pending"}</option>
                )
            })
        }
    </select>
  )
}
