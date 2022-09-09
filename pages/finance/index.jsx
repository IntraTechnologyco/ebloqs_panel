import React from 'react'
import CardProject from "../../components/Cards/CardProject"

export default function Finance() {
  return (
    <div>
      <h2 className='text-purple-dark text-2xl font-bold'>¿What do you want to review today?</h2>
      <div className='grid grid-cols-4 gap-8 mt-5'>
      <CardProject icon="/images/dashboardicon.png" title="Dashboard" url="/finance/dashboard" textLink="More details" />
      <CardProject icon="/images/paymenticon.png" title="Payments " url="/finance/payments" textLink="More details" />
      <CardProject icon="/images/balanceicon.png" title="Balance" url="/finance/balance" textLink="More details" />
      <CardProject icon="/images/accountingicon.png" title="Accounting" url="/finance/accounting" textLink="More details"/>
      <CardProject icon="/images/reportsicon.png" title="Reports" url="/finance/reports" textLink="More details" /> 
      </div>
      
    </div>
  )
}
