import React from 'react'
import Input from "../../components/Input"
import PaginationHandler from '../../components/PaginationHandler'
import PaymentsTable from '../../components/PaymentsTable'
import Select from '../../components/Select'

export default function Payments() {
  const testArrayPaymentMode=[
    {
      name:"credit/debit"
    },
    {
      name:"bank SWIFT"
    }
  ]
  return (
    <div>
      {/** payment mode */}
      <div className='grid grid-cols-3 gap-7 shadow border p-7 rounded'>
        <Select label="Payment mode" data={testArrayPaymentMode} />
        <Input label="Price" value="$ 500" />
        <Input label="Customer" value="Jhon Doe" />
      </div>
      {/** payment table */}
      <div className='mt-10'>
      <PaymentsTable/>
      </div>
    </div>
  )
}
