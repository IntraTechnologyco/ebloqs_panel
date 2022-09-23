import React from 'react'
import SelectOfStatesWithColors from './SelectOfStatesWithColors'

export default function RecentPaymentsTable({data}) {
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
                data?.map((transaction,idx)=>{
                return(
                    <tr key={idx} className='text-center border-b h-12 text-xs'>
                        <td><SelectOfStatesWithColors state={transaction.status} /></td>
                        <td> {transaction.create.substring(0,10)} </td>
                        <td>$ {transaction.amount} </td>
                        <td>{transaction.customer.substring(0,10)}</td>
                    </tr>
                )
                })
            }
        </tbody>
    </table>
  )
}
