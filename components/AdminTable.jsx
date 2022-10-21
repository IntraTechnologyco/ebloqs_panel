import ButtonDelete from './Buttons/ButtonDelete'
import ButtonEdit from './Buttons/ButtonEdit'
import SelectAdminStatus from './selects/SelectAdminStatus'
import InputWithoutBordersWhenDisabled from './inputs/InputWithoutBordersWhenDisabled'

export default function AdminTable({data, setEditingUser, setDeleteCustomer, handleChangeAdminUserStatus}) {
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
        {
            data.length>0&&data.map((item,idx)=>{
                return (
                    <tr key={idx} className='h-12 border-t-2'>
                        <td className='flex items-center h-12 justify-between'>
                            <ButtonEdit onClick={()=>setEditingUser({status:true,data:item})} />
                            <ButtonDelete onClick={()=>setDeleteCustomer({status:true,name:`${item.name} ${item.lastname}`,id:item.id})}/>
                        </td>
                        <td>
                            <SelectAdminStatus name="status" value={item.status} onChange={()=>{handleChangeAdminUserStatus(item.id)}} />
                        </td>
                        <td>{item.rol==1?"Read":item.rol=="2"?"Write":item.rol=="3"&&"Update"}</td>
                        <td>{item.create.substring(0,10)}</td>
                        <td><InputWithoutBordersWhenDisabled className="text-center" disabled value={item.email}/></td>
                        <td className='flex items-center'><InputWithoutBordersWhenDisabled className="text-center capitalize" disabled value={`${item.name} ${item.lastname}`}/></td>
                    </tr>
                )
            })
        }
    </table>
    
  )
}
