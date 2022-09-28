import React from 'react'
import { updateTransactionStatus } from '../ApiFuntions/transactions'

export default function SelectOfStatesWithColors({state,onChange}) {
    
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
    <select onChange={(e)=>onChange(e)} value={state} className={`w-full capitalize focus-within:outline-none ${state==0?"bg-yellow-200 text-yellow-700":state==2?"bg-blue-200 text-blue-700":state==1&&"bg-green-200 text-green-700" } font-medium rounded p-1`} >
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
