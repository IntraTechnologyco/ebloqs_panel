import React, { useEffect, useState } from 'react'
import AdminTable from '../components/AdminTable'
import PaginationHandler from '../components/PaginationHandler'
import Search from '../components/Search'
import ButtonBlueDark from '../components/Buttons/ButtonBlueDark'
import CreateAdminUser from '../components/modals/CreateAdminUser'
import Loader from "../components/Loader"
import { deleteAdminUser, getAdminUsers } from '../ApiFuntions/admin'
import EditAdminUser from '../components/modals/EditAdminUser'
import ConfirmModal from '../components/modals/ConfirmModal'
import { changeAdminUserStatus } from '../ApiFuntions/admin'

export default function Authentication() {
  const [handlerPagination,setHandlerPagination]=useState(10)
  const [pages,setpages]=useState(1)
  const [newUser,setNewUser]=useState(false)
  const [users,setUsers]=useState([])
  const [usersFiltered,setUsersFiltered]=useState(null)
  const [editingUser,setEditingUser]=useState({status:false,data:{}})
  const [deleteCustomer,setDeleteCustomer]=useState({status:false,name:"",id:""})
  const [refetch,setRefetch]=useState(true)
  // handleOnCloseAddNewUser
  const handleOnCloseAddNewUser=(refetchConfirm)=>{
    setNewUser(false)
    refetchConfirm&&setRefetch(!refetch)
  }
    // handleOnCloseUpdateUser
    const handleOnCloseEditUser=(refetchConfirm)=>{
      setEditingUser({status:false,data:{}})
      refetchConfirm&&setRefetch(!refetch)
  }
      //handle filter by name
      const filterByname=(filterValue)=>{
        setUsersFiltered(users.filter((item)=>(`${item.name} ${item.lastname}`).includes(filterValue)))
        console.log(users.filter((item)=>(`${item.name} ${item.lastname}`).includes(filterValue)))
    }
    // handle change admin user status
    const handleChangeAdminUserStatus=(id)=>{
      changeAdminUserStatus(id)
      .then(()=>{
        setRefetch(!refetch)
      })
  }
  // handle admin user delete
    const handleDeleteUser =()=>{
      deleteAdminUser(deleteCustomer.id)
      .then(()=>{
        setDeleteCustomer({status:false,name:"",id:""})
        setRefetch(!refetch)
      })
    }
  useEffect(() => {
    getAdminUsers()
    .then((res)=>{
      setUsers(res.data.admins)
    })
  },[refetch])
  
  return users.length<=0?<div className="mx-auto flex justify-center items-center h-96"><Loader size={60}/></div> : (
    <div>
      <div className='flex justify-between mb-5'>
      <h2 className='text-2xl text-purple-dark font-bold mb-5'>Users</h2>
      <div className='w-40'>
      <ButtonBlueDark text="Add new user" onClick={()=>setNewUser(!newUser)}/>
      </div>
      </div>
      {/** table */}
     <div className='shadow border p-5 rounded text-purple-dark'>
     <div className='flex justify-between'>
        <div className='w-96'>
        <Search placeholder="Search by name" onChange={(e)=>filterByname(e.target.value)} />
        </div>
        </div>
     <AdminTable data={usersFiltered??users} setEditingUser={setEditingUser} setDeleteCustomer={setDeleteCustomer} handleChangeAdminUserStatus={handleChangeAdminUserStatus}/>
     </div>

      {/** modals */
      newUser&&<CreateAdminUser onCloseModal={handleOnCloseAddNewUser}/>
    }
       { 
    editingUser.status&&<EditAdminUser data={editingUser.data} onCloseEditUser={handleOnCloseEditUser}/>
   }
       {
    deleteCustomer.status&&<ConfirmModal text={`Are you sure about delete the customer ${deleteCustomer.name}?`} onConfirm={handleDeleteUser} onCancel={()=>setDeleteCustomer({status:false,name:"",id:""})} />
    }
    </div>
  )
}
