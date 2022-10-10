import React, { useState } from 'react'
import AdminTable from '../components/AdminTable'
import PaginationHandler from '../components/PaginationHandler'
import Search from '../components/Search'

export default function Authentication() {
  const [handlerPagination,setHandlerPagination]=useState(10)
  const [pages,setpages]=useState(6)
  return (
    <div>
      <h2 className='text-2xl text-purple-dark font-bold mb-5'>Users</h2>
      {/** table */}
     <div className='shadow border p-5 rounded text-purple-dark'>
     <div className='flex justify-between'>
        <div className='w-96'>
        <Search placeholder="Search" />
        </div>
        <div className='w-96 flex justify-end items-center'>
            <span>Show</span>
            <select className='border p-2 rounded ml-2 focus-visible:outline-none' onChange={(e)=>setHandlerPagination(e.target.value)} name="show" id="show">
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={40}>40</option>
            </select>
        </div>
        </div>
     <AdminTable/>
     </div>
      {/** pagination handler */}
    <div className="mt-5">
      <PaginationHandler maxRows={pages} />
      </div>
    </div>
  )
}
