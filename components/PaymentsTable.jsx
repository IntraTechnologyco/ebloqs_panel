import Image from "next/image";
import React from "react";
import Search from "../components/Search";
import PaginationHandler from "./PaginationHandler";

export default function PaymentsTable({data}) {
  const showNumber = [5, 10, 15, 20, 25, 30];
  return (
    <div>
    <div className="border shadow p-7 rounded">
      {/** table header option */}
      <div className="flex justify-between items-center">
        {/** seacr input*/}
        <div className="w-96 h-8">
          <Search placeholder="Search" />
        </div>
        {/** show columns number*/}
        <div className="flex w-36 items-center">
          <span>Show</span>
          <select
            name="show"
            className="ml-10 border rounded h-12 w-full focus-within:outline-none px-2 text-purple-dark"
          >
            {showNumber.map((opt, idx) => {
              return (
                <option key={idx} value={opt}>
                  {opt}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {/** table*/}
      <table className="w-full mt-10 text-purple-dark">
        <thead>
          <tr>
            <th>Action</th>
            <th>Payment method</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Customer</th>
            <th>Reference ID</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,idx)=>{
              return (
                <tr key={idx} className="text-center border-b h-12">
                  <td className="text-blue-semi-dark flex items-center justify-center my-auto h-12">
                      <Image src="/images/docicon.png" width={22} height={22} />
                      Descargar
                  </td>
                  <td>
                    <Image src="/images/cardlogo.png" width={25} height={16} />
                    <span className="ml-2">*********5241</span>
                  </td>
                  <td>{item.create.substring(0,10)}</td>
                  <td>{item.amount}</td>
                  <td>{item.customer_name}</td>
                  <td className="text-blue-semi-dark">{item.id}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      
    </div>
    {/** pagination handler */}
    <div className="mt-5">
      <PaginationHandler/>
      </div>
    </div>
  );
}
