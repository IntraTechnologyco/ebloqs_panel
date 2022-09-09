import React, { useEffect, useState } from "react";
import CustomersListBlock from "../components/CustomersListBlock";
import Search from "../components/Search";
import customersData from "../data/customersData.json";

export default function Customer() {
    const [searchTyped,setSearchTyped]=useState("")
    useEffect(()=>{
      
    },[])
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
      !searchTyped&&
      <div className="shadow-lg border p-5">
        <CustomersListBlock letter="A" data={customersData} letterOnClick={()=>setSearchTyped("a")}/>
        <CustomersListBlock letter="B" data={customersData} letterOnClick={()=>setSearchTyped("b")}/>
        <CustomersListBlock letter="C" data={customersData} letterOnClick={()=>setSearchTyped("c")}/>
      </div>
      }
      {
      /** table in case the user types in the search input */
      searchTyped&&
      <div className="shadow-lg border p-5">
        <CustomersListBlock letter={searchTyped.charAt(0)} data={customersData} letterOnClick={()=>setSearchTyped(searchTyped.charAt(0))}/>
      </div>
      }
    </div>
  );
}
