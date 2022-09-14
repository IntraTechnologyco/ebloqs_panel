import React, { useEffect, useState } from "react";
import { getAllCustomers, getCustomersByLastname } from "../../ApiFuntions/customers";
import CustomersListBlock from "../../components/CustomersListBlock";
import Search from "../../components/Search";
import Loader from "../../components/Loader"

export default function Customer() {
    const [searchTyped,setSearchTyped]=useState("")
    const [customers,setCustomers]=useState([])
    const [allCustomers,setAllCustomers]=useState([])
//useState

    useEffect(()=>{
      searchTyped?
      getCustomersByLastname(searchTyped.charAt(searchTyped.indexOf(" ")+1))
      .then((res)=>{
        setCustomers(res?.data[0]?.names)
      }):
      getAllCustomers().then((res)=>{
        setAllCustomers(res.data)
      }) 
      console.log(searchTyped.indexOf(" ")+1)
    },[searchTyped])

  return (
    <div>
      {/** search */}
      <div className="mb-5 flex justify-between">
        <h2 className="text-2xl font-bold text-purple-dark">Clientes</h2>
        <div className="w-96">
          <Search placeholder="Cliente" onChange={(e)=>setSearchTyped(e.target.value)} />
        </div>
      </div>
      {
      /** table default */
      allCustomers.length>0?!searchTyped&&
      <div className="shadow-lg border p-5">
        {
          allCustomers.map((item,idx)=>{
            return(
              <CustomersListBlock key={idx} textOnEmpty={false} letter={item.title} data={item.lastnames} letterOnClick={()=>setSearchTyped(item.title.charAt(item.title.indexOf(" ")+1))}/>
            )
          })
        }
        
      </div>:
     <div className="mx-auto flex justify-center items-center h-96"><Loader size={60}/></div> 
      }
      {
      /** table in case the user types in the search input */
      searchTyped&&
      <div className="shadow-lg border p-5">
        <CustomersListBlock letter={searchTyped.charAt(searchTyped.indexOf(" ")+1)} textOnEmpty={true} data={customers} letterOnClick={()=>setSearchTyped(searchTyped.charAt(searchTyped.indexOf(" ")+1))}/>
      </div>
      }
    </div>
  );
}
