import React, { useState } from 'react'
import { updateAdminUser } from '../../ApiFuntions/admin'
import ButtonBlueGradient from '../Buttons/ButtonBlueGradient'
import Input from '../Input'
import Select from '../Select'
import CustomModal from './CustomModal'

export default function EditAdminUser({data,onCloseEditUser}) {
    const [userData,setUserData]=useState(data)
    //handle inputs
    const handleInputs=({target})=>{
        setUserData({
            ...userData,
            [target.name]:target.value
        })
    }
    //handle handle Submit update user
    const handleSubmitUpdateUser=(e)=>{
        e.preventDefault()
        updateAdminUser(userData)
        console.log(userData)
        onCloseEditUser(true)
    }
  return (
    <CustomModal onClose={onCloseEditUser}>
      <form onSubmit={(e)=>handleSubmitUpdateUser(e)} className="w-[590px] p-5 bg-white rounded grid grid-cols-2 gap-3 text-left">
        <h2 className="text-center mb-6 text-2xl col-span-2">
         Update user
        </h2>
        <Input type="text" label="Name" name="name" value={userData.name} required onChange={(e)=>handleInputs(e)}/>
        <Input type="text" label="Lastname" name="lastname" value={userData.lastname} required onChange={(e)=>handleInputs(e)}/>
          <Input type="email" label="Email" name="email" value={userData.email} required onChange={(e)=>handleInputs(e)}/>
          <Select label="Rol" name="rol" value={userData?.rol??""} data={[{type:1,name:"Read"},{type:2,name:"Write"},{type:3,name:"Update"}]} onChange={(e)=>handleInputs(e)}/>
        <div className="col-span-2 mt-5">
          <ButtonBlueGradient text="Save"/>
        </div>
      </form>
    </CustomModal>
  )
}
