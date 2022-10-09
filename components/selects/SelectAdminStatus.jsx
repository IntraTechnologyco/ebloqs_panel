import React, { useState } from 'react'

export default function SelectAdminStatus() {
    const [status,setStatus]=useState(0)
  return (
    <div>
        <select onChange={(e)=>setStatus(e.target.value)} name="status" id="status" className={`focus-visible:outline-none ${status==1?"bg-[#F7E8E7]":"bg-[#E7F7EA]"}  rounded h-8 px-1`}>
            <option value={0}>Active</option>
            <option value={1}>Inactive</option>
        </select>
    </div>
  )
}
