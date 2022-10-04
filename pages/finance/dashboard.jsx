import Image from 'next/image'
import React, { useState,useEffect } from 'react'
import { getAllUsersWithoutOrder } from '../../ApiFuntions/customers'
import { getBalance } from '../../ApiFuntions/finance'
import { getPayments } from '../../ApiFuntions/transactions'
import CardDashboardWithSeeAllAndTitle from '../../components/Cards/CardDashboardWithSeeAllAndTitle'
import CardDashboarLastWeek from '../../components/Cards/CardDashboarLastWeek'
import RecentPaymentsTable from '../../components/RecentPaymentsTable'

export default function Dashboard() {
  const [eblBalance,setEblBalance]=useState("0")
  const [custmersNumber,setCustumersNumber]=useState("0")
  const [allTransactions,setAllTransactions]=useState([])
  const [stateChanged,setStateChanged]=useState(false)

  useEffect(()=>{
    getBalance()
    .then((res)=>{
      setEblBalance(res.data.balance)
      console.log(res.data)
    })

    getAllUsersWithoutOrder().then((res)=>{
      setCustumersNumber(res.data.length)
    })
   
  },[])
  useEffect(()=>{
    getPayments()
    .then((res)=>{
      console.log(res)
      setAllTransactions(res.data)
    })
  },[stateChanged])
  return (
    <div>
      <h2 className="text-2xl font-bold text-purple-dark">Dashboard</h2>
      {/** last week cards */}
      <div className='grid grid-cols-4 gap-5 mt-7'>
      <CardDashboarLastWeek  text="Tokens fungible" icon="/images/docpurpleicon.png" value="0" progressPercent="0" lastWeekPercent="0.00" up={true} />
      <CardDashboarLastWeek  text="EBL" icon="/images/docpurpleicon.png" value={eblBalance} progressPercent="0" lastWeekPercent="0.00" up={true} />
      <CardDashboarLastWeek  text="Customers" icon="/images/docpurpleicon.png" value={custmersNumber} progressPercent="0" lastWeekPercent="0.00" up={true} />
      <CardDashboarLastWeek  text="Balance" icon="/images/docpurpleicon.png" value={0} progressPercent="0" lastWeekPercent="0.00" up={true} />
      </div>
      {/** tokens analytics and invesments analitycs seption */}
      <div className='flex mt-5'>
        {/** Tokens analytics */}
        <div className='w-[40%] mr-3 h-full'>
        <CardDashboardWithSeeAllAndTitle text="Tokens analytics">
          <div>
            <Image src="/images/tokenAnaChart.png" width={373} height={423}/>
          </div>
        </CardDashboardWithSeeAllAndTitle>
        </div>
        {/** Investments analytics */}
        <div className='w-[60%] ml-3 h-full'>
        <CardDashboardWithSeeAllAndTitle text="Investments analytics">
          <div className='grid grid-cols-4 gap-1 w-96 ml-auto mb-5'>
            {/**1 */}
          <div>
            <p className='font-medium text-purple-dark'>Customers</p>
            <span className='font-bold text-xl text-purple-dark'>$700</span>
          </div>
          {/**2 */}
          <div>
            <p className='font-medium text-purple-dark'>Earnings</p>
            <span className='font-bold text-xl text-red-500'>$700</span>
          </div>
          {/**3 */}
          <div>
            <p className='font-medium text-purple-dark'>Receipts</p>
            <span className='font-bold text-xl text-green-500'>$700</span>
          </div>
          {/**4 */}
          <div>
            <p className='font-medium text-greeen-600'>Total</p>
            <span className='font-bold text-xl text-purple-500'>$700</span>
          </div>
          </div>
          <div>
            <Image src="/images/invesmentsAnaChart.png" width={543} height={323}/>
          </div>
        </CardDashboardWithSeeAllAndTitle>
        </div>
      </div>
      {/** Recent payments */}
      <div className='grid grid-cols-2 mt-5'>
        {/** recent back payment */}
        <div className='mr-3 h-full'>
        <CardDashboardWithSeeAllAndTitle text="Recent back payment">
            <Image src="/images/paymentsChart.png" width={496} height={43}/>
            <RecentPaymentsTable data={allTransactions.transactionsBank} setStateChanged={setStateChanged} stateChanged={stateChanged} selectStateOn={true} />
        </CardDashboardWithSeeAllAndTitle>
        </div>
        {/** recent credit/debit payment */}
        <div className='ml-3 h-full'>
        <CardDashboardWithSeeAllAndTitle text="Recent credit/debit payment">
          <Image src="/images/paymentsChart.png" width={496} height={43}/>
          <RecentPaymentsTable data={allTransactions.transactionsCard} selectStateOn={false}/>
        </CardDashboardWithSeeAllAndTitle>
        </div>
      </div>
    </div>
  )
}
