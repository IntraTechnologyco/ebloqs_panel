import React from 'react'
import SelectOfStatesWithColors from './SelectOfStatesWithColors'

export default function RecentPaymentsTable({data}) {
    const maperTest=[{
        state:"1",sendDate:"1/03/2022",amount:"700.00",customer:"Breiner Lopez"
    },
    {
        state:"3",sendDate:"3/03/2022",amount:"430.00",customer:"Breiner Lopez"
    },
    {
        state:"2",sendDate:"23/03/2022",amount:"780.00",customer:"Breiner Lopez"
    },
    {
        state:"1",sendDate:"21/03/2022",amount:"769.40",customer:"Breiner Lopez"
    },
    {
        state:"4",sendDate:"17/03/2022",amount:"324.00",customer:"Breiner Lopez"
    },
    {
        state:"4",sendDate:"12/03/2022",amount:"908.20",customer:"Breiner Lopez"
    },
    
]
  return (
    <table className='w-full mt-10 text-purple-dark'>
        <thead className='bg-purple-semi-light rounded h-10'>
            <tr>
                <th>Status</th>
                <th>Send date</th>
                <th>Amount</th>
                <th>Customer</th>
            </tr>
        </thead>
        <tbody>
            {
                maperTest.map((payment,idx)=>{
                    return(
                        <tr key={idx} className='text-center border-b h-12'>
                <td><SelectOfStatesWithColors data={data} state={payment.state} /></td>
                <td> {payment.sendDate} </td>
                <td>$ {payment.amount} </td>
                <td>{payment.customer}</td>
            </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}
