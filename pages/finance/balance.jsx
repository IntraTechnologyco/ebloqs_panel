import React, { useEffect, useState } from 'react'
import { getTransactionBalances } from '../../ApiFuntions/transactions'
import LinkButtonBack from '../../components/Buttons/LinkButtonBack'
import CardLabelWithAmount from '../../components/Cards/CardLabelWithAmount'
import { convertToCurrency } from '../../globalFunction/convertToCurrency'
import Loader from "../../components/Loader"

export default function Balance() {
  const [balance,setBalance]=useState({balance_Bank:0, balance_Card:0, total_Balance:0})
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    getTransactionBalances()
    .then((res)=>{
      setBalance(res.data)
      setLoading(false)
    })
  },[])
  return loading?
  <div className="mx-auto flex justify-center items-center h-96"><Loader size={60}/></div>
  : (
    <div>
      <LinkButtonBack text="Regresar" href="/finance"/>
      <div className='w-96 mt-10'>
      <CardLabelWithAmount text="Credit/debit card" amount={convertToCurrency(balance.balance_Card,"usd")} />
      <br />
      <CardLabelWithAmount text="Bank" amount={convertToCurrency(balance.balance_Bank,"usd")} />
      <br />
      <CardLabelWithAmount text="Balance" amount={convertToCurrency(balance.total_Balance,"usd")} />
      </div>
    </div>
  )
}
