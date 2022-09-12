import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCustomersByLastname } from "../ApiFuntions/customers";

export default function CustomersListBlock({ letter, data, letterOnClick,textOnEmpty }) {
  const [noData, setNoData] = useState(true);
  const [users, setUsers] = useState([]);
   useEffect(() => {
    setUsers(
      data?.filter((user) => {
        return user?.name?.charAt(user.name.indexOf(" ")+1).toLowerCase() === letter.toLowerCase();
      })
    );
  },[letter,data]); 
/*   useEffect(()=>{
    getCustomersByLastname("bernal")
    .then((res)=>{
      setUsers(res.data)
    })
  },[]) */
  return (
    <>
    {
      
      
      <div className="w-full flex flex-col text-purple-dark border-b pb-3 mb-5">
      {/** button letter */}
      <button
        onClick={letterOnClick}
        className="bg-[#F6F4FD] hover:bg-[#cfc4f5] transition-all duration-100 uppercase text-left px-5 font-semibold rounded py-1 drop-shadow-sm"
      >
        {letter}
      </button>
      
      {/** Links username */}
      {users&&users.length>0?users.map((user, idx) => {
        return (
          <Link href="/customers/mmm" key={idx}>
            <span className="text-left px-5 py-1 hover:bg-[#F6F4FD]/50 text-sm capitalize cursor-pointer">
              {user.name}
            </span>
          </Link>
        );
      }):textOnEmpty&&
      <p className="text-center py-10 animate-pulse">No se encontraron clientes</p>
      }
    </div>
    }
    </>
  );
}
