import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CustomersListBlock({ letter, data, letterOnClick }) {
  const [users, setUsers] = useState([]);
  console.log(data)
  useEffect(() => {
    setUsers(
      data?.filter((user) => {
        return user.name.charAt(0).toLowerCase() === letter.toLowerCase();
      })
    );
  },[letter]);
  return (
    <div className="w-full flex flex-col text-purple-dark border-b pb-3 mb-5">
      {/** button letter */}
      <button
        onClick={letterOnClick}
        className="bg-[#F6F4FD] hover:bg-[#cfc4f5] transition-all duration-100 uppercase text-left px-5 font-semibold rounded py-1 drop-shadow-sm"
      >
        {letter}
      </button>
      {/** Links username */}
      {users?.map((user, idx) => {
        return (
          <Link href="tokens" key={idx}>
            <span className="text-left px-5 py-1 hover:bg-[#F6F4FD]/50 text-sm capitalize cursor-pointer">
              {user.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
