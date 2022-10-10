import React, { useState } from 'react'
import ButtonDelete from './Buttons/ButtonDelete'
import ButtonEdit from './Buttons/ButtonEdit'
import SelectWithoutLabel from "../components/selects/SelectWithoutLabel"
import SelectAdminStatus from './selects/SelectAdminStatus'
import ConfirmModal from "../components/modals/ConfirmModal"

export default function AdminTable() {
    const [deleteCustomer,setDeleteCustomer]=useState({status:false,name:"",id:""})
  return (
        
    <table className='w-full text-center mt-5'>
        <thead className='border-b-2 border-purple-dark h-12'>
        <tr>
            <th className='w-36'>Action</th>
            <th>Status</th>
            <th>Role</th>
            <th>Register On</th>
            <th>Email</th>
            <th>Name</th>
          </tr>
        </thead>
        <tr className='h-12 border-t-2'>
            <td className='flex items-center h-12 justify-between'>
                <ButtonEdit/>
                <ButtonDelete onClick={()=>setDeleteCustomer({status:true,name:"Guy Howard",id:"885"})}/>
            </td>
            <td>
                <SelectAdminStatus/>
            </td>
            <td>
                <SelectWithoutLabel data={[{id:1,name:"Read"},{id:2,name:"Write"},{id:3,name:"Update"}]} />
            </td>
            <td>5/27/15</td>
            <td>alma.lawson@example.com</td>
            <td>Guy Howard</td>
          </tr>
          <tr className='h-12 border-t-2'>
            <td className='flex items-center h-12 justify-between'>
                <ButtonEdit/>
                <ButtonDelete onClick={()=>setDeleteCustomer({status:true,name:"Minster Min",id:"22125"})}/>
            </td>
            <td>
                <SelectAdminStatus/>
            </td>
            <td>
                <SelectWithoutLabel data={[{id:1,name:"Read"},{id:2,name:"Write"},{id:3,name:"Update"}]} />
            </td>
            <td>5/27/15</td>
            <td>alma.lawson@example.com</td>
            <td>Mister Min</td>
          </tr>
          <tr className='h-12 border-t-2'>
            <td className='flex items-center h-12 justify-between'>
                <ButtonEdit/>
                <ButtonDelete onClick={()=>setDeleteCustomer({status:true,name:"Minster Min",id:"22125"})}/>
            </td>
            <td>
                <SelectAdminStatus/>
            </td>
            <td>
                <SelectWithoutLabel data={[{id:1,name:"Read"},{id:2,name:"Write"},{id:3,name:"Update"}]} />
            </td>
            <td>5/27/15</td>
            <td>alma.lawson@example.com</td>
            <td>Mister Min</td>
          </tr>
          <tr className='h-12 border-t-2'>
            <td className='flex items-center h-12 justify-between'>
                <ButtonEdit/>
                <ButtonDelete onClick={()=>setDeleteCustomer({status:true,name:"Minster Min",id:"22125"})}/>
            </td>
            <td>
                <SelectAdminStatus/>
            </td>
            <td>
                <SelectWithoutLabel data={[{id:1,name:"Read"},{id:2,name:"Write"},{id:3,name:"Update"}]} />
            </td>
            <td>5/27/15</td>
            <td>alma.lawson@example.com</td>
            <td>Mister Min</td>
          </tr>
          <tr className='h-12 border-t-2'>
            <td className='flex items-center h-12 justify-between'>
                <ButtonEdit/>
                <ButtonDelete onClick={()=>setDeleteCustomer({status:true,name:"Minster Min",id:"22125"})}/>
            </td>
            <td>
                <SelectAdminStatus/>
            </td>
            <td>
                <SelectWithoutLabel data={[{id:1,name:"Read"},{id:2,name:"Write"},{id:3,name:"Update"}]} />
            </td>
            <td>5/27/15</td>
            <td>alma.lawson@example.com</td>
            <td>Mister Min</td>
          </tr>
          <tr className='h-12 border-t-2'>
            <td className='flex items-center h-12 justify-between'>
                <ButtonEdit/>
                <ButtonDelete onClick={()=>setDeleteCustomer({status:true,name:"Minster Min",id:"22125"})}/>
            </td>
            <td>
                <SelectAdminStatus/>
            </td>
            <td>
                <SelectWithoutLabel data={[{id:1,name:"Read"},{id:2,name:"Write"},{id:3,name:"Update"}]} />
            </td>
            <td>5/27/15</td>
            <td>alma.lawson@example.com</td>
            <td>Mister Min</td>
          </tr>
          {/*** popups seption */
    deleteCustomer.status&&<ConfirmModal text={`Are you sure about delete the customer ${deleteCustomer.name}?`} onCancel={()=>setDeleteCustomer({status:false,name:"",id:""})} />
}
    </table>
    
  )
}
