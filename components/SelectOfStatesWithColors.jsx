import React, { useState } from 'react'

export default function SelectOfStatesWithColors({state}) {
    const [stateSelect,setStateSelect]=useState(state)
    const recentPaymentsDataTest=[
        {
            id:0,
            state:"pending"
          },
        {
          id:1,
          state:"paid out"
        },
        {
          id:2,
          state:"not payed"
        }
        
      ]
  return (
    <select onChange={(e)=>setStateSelect(e.target.value)} value={stateSelect} className={`w-full capitalize focus-within:outline-none ${stateSelect==0?"bg-yellow-200 text-yellow-700":stateSelect==2?"bg-blue-200 text-blue-700":stateSelect==1&&"bg-green-200 text-green-700" } font-medium rounded p-1`} >
        {
            recentPaymentsDataTest.map((item,idx)=>{
                return(
                    <option key={idx} value={item.id}>{item.state}</option>
                )
            })
        }
    </select>
  )
}
