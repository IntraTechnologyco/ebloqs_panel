import React, { useEffect, useState } from 'react'
import { getTransactionsByType } from '../../ApiFuntions/transactions'
import Input from "../../components/Input"
import PaginationHandler from '../../components/PaginationHandler'
import PaymentsTable from '../../components/PaymentsTable'
import Select from '../../components/Select'

export default function Payments() {
  const [trasactionType,setTrasactionType]=useState(1)
  const [trasactionData,setTrasactionData]=useState([])
  const testArrayPaymentMode=[
    {
      type:1,
      name:"credit/debit"
    },
    {
      type:0,
      name:"bank SWIFT"
    }
  ]
  useEffect(()=>{
    getTransactionsByType(trasactionType)
    .then((res)=>{
      console.log(res)
      setTrasactionData(res.data.data)
    })
  },[trasactionType])
  return (
    <div>
      {/** payment mode */}
      <div className='grid grid-cols-3 gap-7 shadow border p-7 rounded'>
        <Select label="Payment mode" data={testArrayPaymentMode} value={trasactionType} onChange={(e)=>setTrasactionType(parseInt(e.target.value))} />
        <Input label="Price" value="$ 500" />
        <Input label="Customer" value="Jhon Doe" />
      </div>
      {/** payment table */}
      <div className='mt-10'>
      <PaymentsTable data={trasactionData}/>
      </div>
    </div>
  )
}
