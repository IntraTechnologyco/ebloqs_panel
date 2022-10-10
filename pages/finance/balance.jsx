import React, { useEffect, useState } from 'react'
import { getTransactionBalances } from '../../ApiFuntions/transactions'
import LinkButtonBack from '../../components/Buttons/LinkButtonBack'
import CardLabelWithAmount from '../../components/Cards/CardLabelWithAmount'
import { converToCurrency } from '../../globalFunction/convertToCurrency'

export default function Balance() {
  const [balance,setBalance]=useState({balance_Bank:0, balance_Card:0, total_Balance:0})
  useEffect(()=>{
    getTransactionBalances()
    .then((res)=>{
      setBalance(res.data)
    })
  },[])
  return (
    <div>
      <LinkButtonBack text="Regresar" href="/finance"/>
      <div className='w-96 mt-10'>
      <CardLabelWithAmount text="Credit/debit card" amount={converToCurrency(balance.balance_Bank,"usd")} />
      <br />
      <CardLabelWithAmount text="Bank" amount={converToCurrency(balance.balance_Card,"usd")} />
      <br />
      <CardLabelWithAmount text="Balance" amount={converToCurrency(balance.total_Balance,"usd")} />
      </div>
    </div>
  )
}
