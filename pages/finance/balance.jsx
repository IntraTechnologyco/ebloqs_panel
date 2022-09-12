import React, { useEffect, useState } from 'react'
import { getBalance } from '../../ApiFuntions/finance'
import LinkButtonBack from '../../components/Buttons/LinkButtonBack'
import CardLabelWithAmount from '../../components/Cards/CardLabelWithAmount'

export default function Balance() {
  const [balance,setBalance]=useState("0")
  useEffect(()=>{
    getBalance()
    .then((res)=>{
      setBalance(res.data.balance)

    })
  },[])
  return (
    <div>
      <LinkButtonBack text="Regresar" href="/finance"/>
      <div className='w-96 mt-10'>
      <CardLabelWithAmount text="Credit/debit card" amount={"1000.000.000"} />
      <br />
      <CardLabelWithAmount text="Bank" amount={"500.000.000"} />
      <br />
      <CardLabelWithAmount text="Balance" amount={balance} />
      </div>
    </div>
  )
}
