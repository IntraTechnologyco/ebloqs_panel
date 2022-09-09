import Image from 'next/image'
import React from 'react'
import CardDashboardWithSeeAllAndTitle from '../../components/Cards/CardDashboardWithSeeAllAndTitle'
import CardDashboarLastWeek from '../../components/Cards/CardDashboarLastWeek'
import RecentPaymentsTable from '../../components/RecentPaymentsTable'

export default function Dashboard() {
 const recentPaymentsDataTest=[
  {
    id:"1",
    state:"paid out"
  },
  {
    id:"2",
    state:"Enviado"
  },
  {
    id:"3",
    state:"not payed"
  },
  {
    id:"4",
    state:"pending"
  }
  
]
  return (
    <div>
      <h2 className="text-2xl font-bold text-purple-dark">Dashboard</h2>
      {/** last week cards */}
      <div className='grid grid-cols-4 gap-5 mt-7'>
      <CardDashboarLastWeek  text="Tokens fungible" icon="/images/docpurpleicon.png" value="2.140" progressPercent="60" lastWeekPercent="2.98" up={true} />
      <CardDashboarLastWeek  text="EBL" icon="/images/docpurpleicon.png" value="1.677" progressPercent="20" lastWeekPercent="8.45" up={false} />
      <CardDashboarLastWeek  text="Customers" icon="/images/docpurpleicon.png" value="3.540" progressPercent="70" lastWeekPercent="2.87" up={false} />
      <CardDashboarLastWeek  text="Binance" icon="/images/docpurpleicon.png" value="7.560" progressPercent="90" lastWeekPercent="4.65" up={true} />
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
            <RecentPaymentsTable data={recentPaymentsDataTest}/>
        </CardDashboardWithSeeAllAndTitle>
        </div>
        {/** recent credit/debit payment */}
        <div className='ml-3 h-full'>
        <CardDashboardWithSeeAllAndTitle text="Recent credit/debit payment">
          <Image src="/images/paymentsChart.png" width={496} height={43}/>
          <RecentPaymentsTable data={recentPaymentsDataTest}/>
        </CardDashboardWithSeeAllAndTitle>
        </div>
      </div>
    </div>
  )
}
