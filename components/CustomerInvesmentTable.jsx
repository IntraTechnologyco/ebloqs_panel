import React from 'react'

export default function CustomerInvesmentTable() {
  return (
    <div className='border shadow text-purple-dark rounded'>
        <div className='py-3 bg-purple-semi-light'><p className='font-bold text-center '>Investment</p></div>
        <div className='p-5'>
        <table className='w-full p-5'>
            <thead className='border-b pb-5'>
                <tr className='h-10'>
                    <th>Real state</th>
                    <th>Vehicles</th>
                    <th>Education</th>
                </tr>
            </thead>
            <tbody className='text-xs font-normal pt-5'>
                <tr className='h-10'>
                    <th>50 EBL-HERALD-01-EC</th>
                    <th>20 EBL-PORSCH-01-US</th>
                    <th>10 EBL-ANAHUA-01-MX</th>
                </tr>
                <tr className='h-10'>
                    <th>50 EBL-HERALD-01-EC</th>
                    <th>20 EBL-PORSCH-01-US</th>
                    <th>10 EBL-ANAHUA-01-MX</th>
                </tr>
                <tr className='h-10'>
                    <th>50 EBL-HERALD-01-EC</th>
                    <th>20 EBL-PORSCH-01-US</th>
                    <th>10 EBL-ANAHUA-01-MX</th>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}
