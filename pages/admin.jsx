import React, { useEffect, useState } from 'react'
import AdminTable from '../components/AdminTable'
import PaginationHandler from '../components/PaginationHandler'
import Search from '../components/Search'
import ButtonBlueDark from '../components/Buttons/ButtonBlueDark'
import CreateAdminUser from '../components/modals/CreateAdminUser'
import Loader from "../components/Loader"
import { getAdminUsers } from '../ApiFuntions/admin'
import EditAdminUser from '../components/modals/EditAdminUser'
import ConfirmModal from '../components/modals/ConfirmModal'

export default function Authentication() {
  const [handlerPagination,setHandlerPagination]=useState(10)
  const [pages,setpages]=useState(6)
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
  useEffect(() => {
    getAdminUsers()
    .then((res)=>{
      setUsers(res.data.users)
      console.log(res)
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
     <AdminTable data={usersFiltered??users} setEditingUser={setEditingUser} setDeleteCustomer={setDeleteCustomer}/>
     </div>
      {/** pagination handler */}
    <div className="mt-5">
      <PaginationHandler maxRows={pages} />
      </div>
      {/** modals */
      newUser&&<CreateAdminUser onCloseModal={handleOnCloseAddNewUser}/>
    }
       { 
    editingUser.status&&<EditAdminUser data={editingUser.data} onCloseEditUser={handleOnCloseEditUser}/>
   }
       {
    deleteCustomer.status&&<ConfirmModal text={`Are you sure about delete the customer ${deleteCustomer.name}?`} onCancel={()=>setDeleteCustomer({status:false,name:"",id:""})} />
    }
    </div>
  )
}
