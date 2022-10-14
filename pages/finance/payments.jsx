import React, { useEffect, useState } from 'react'
import { getTransactionsByType } from '../../ApiFuntions/transactions'
import Input from "../../components/Input"
import PaginationHandler from '../../components/PaginationHandler'
import PaymentsTable from '../../components/PaymentsTable'
import Search from '../../components/Search'
import Select from '../../components/Select'

export default function Payments() {
      //states
  const [trasactionType,setTrasactionType]=useState(1)
  const [trasactionData,setTrasactionData]=useState([])
  const [filterByPrice,setFilterByPrice]=useState("")
  const [filterByCustomer,setFilterByCustomer]=useState("")
    // number of items to show
    const showNumber = [5, 10, 15, 20, 25, 30]
    // payments method list
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
  //filter payments
  const filterPayments=({target})=>{
    target.name=="price"?setFilterByPrice(target.value):target.name==="customer"&&setFilterByCustomer(target.name)
    console.log(target.name)

  }
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
        <Input label="Price" name="price" value={filterByPrice} onChange={(e)=>filterPayments(e)} />
        <Input label="Customer" name="customer" value={filterByCustomer} onChange={(e)=>filterPayments(e)}/>
      </div>
      {/** payment table */}
      <div className='mt-10 border shadow p-7 rounded'>
        {/** table header option */}
        <div className="flex justify-between items-center">
          {/** seacr input*/}
          <div className="w-96 h-8">
            <Search placeholder="Search" />
          </div>
        {/** show columns number*/}
        <div className="flex w-36 items-center">
          <span>Show</span>
          <select
            name="show"
            className="ml-10 border rounded h-12 w-full focus-within:outline-none px-2 text-purple-dark"
          >
            {showNumber.map((opt, idx) => {
              return (
                <option key={idx} value={opt}>
                  {opt}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <PaymentsTable data={trasactionData}/>
          {/** pagination handler */}
    <div className="mt-5">
      <PaginationHandler/>
      </div>
      </div>
    </div>
  )
}
