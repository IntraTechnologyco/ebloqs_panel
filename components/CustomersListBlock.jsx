import Link from "next/link";
import React from "react";

export default function CustomersListBlock({ letter, data, letterOnClick,textOnEmpty }) {
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
      {data&&data.length>0?data.map((user, idx) => {
        return (
          <Link href={`/customers/${user.ownerID}`} key={idx}>
            <span className="text-left px-5 py-1 hover:bg-[#F6F4FD]/50 text-sm capitalize cursor-pointer">
              {user.name} {user.lastname}
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
