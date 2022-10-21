import React from 'react'

export default function SelectAdminStatus({value, disabled, name, onChange}) {
  return (
    <div>
        <select disabled={disabled} onChange={onChange} value={value} name={name} id="status" className={`focus-visible:outline-none ${value?"bg-[#E7F7EA]":"bg-[#F7E8E7]"} rounded h-8 px-1`}>
            <option value={true}>Active</option>
            <option value={false}>Inactive</option>
        </select>
    </div>
  )
}
