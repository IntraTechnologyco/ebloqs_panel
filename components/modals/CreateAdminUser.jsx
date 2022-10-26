import Input from "../Input";
import ButtonBlueGradient from "../Buttons/ButtonBlueGradient";
import CustomModal from "./CustomModal";
import { registerNewAdminUser } from "../../ApiFuntions/admin";
import { useState } from "react";
import Select from "../Select";

export default function CreateAdminUser({onCloseModal}) {
    //states
    const [newUserdData,setNewUserData]=useState({name:"",lastname:"",email:"",password:"",rol:""})
    //handle inputs onChange
    const handleInputs=({target})=>{
        setNewUserData({
            ...newUserdData,
            [target.name]:target.value
        })
    }
    // handle register new admin user
  const handleSubmitRegister=(e)=>{
    e.preventDefault()
    registerNewAdminUser(newUserdData)
     .then(()=>{
        onCloseModal(true)
    }) 
    }
  return (
    <CustomModal onClose={onCloseModal}>
      <form onSubmit={(e)=>handleSubmitRegister(e)} className="w-[590px] p-5 bg-white rounded grid grid-cols-2 gap-3">
        <h2 className="text-center mb-6 text-2xl col-span-2">
          Create new user
        </h2>
          <Input type="text" label="Name" name="name" required onChange={(e)=>handleInputs(e)}/>
          <Input type="text" label="Lastname" name="lastname" required onChange={(e)=>handleInputs(e)}/>
          <Input type="email" label="Email" name="email" required onChange={(e)=>handleInputs(e)}/>
          <Input type="password" label="Password" name="password" required onChange={(e)=>handleInputs(e)}/>
        <div className="col-span-2 mt-5">
          <ButtonBlueGradient text="Register"/>
        </div>
      </form>
    </CustomModal>
  );
}
