import Image from "next/image";
import React from "react";
import Search from "../components/Search";
import PaginationHandler from "./PaginationHandler";

export default function PaymentsTable() {
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
          <tr className="text-center border-b h-12">
            <td className="text-blue-semi-dark flex items-center justify-center my-auto h-12">
                <Image src="/images/docicon.png" width={22} height={22} />
                Descargar
            </td>
            <td>
              <Image src="/images/cardlogo.png" width={25} height={16} />
              <span className="ml-2">*****1235</span>
            </td>
            <td>5/09/2021</td>
            <td>$100.00</td>
            <td>Breiner Lopez</td>
            <td className="text-blue-semi-dark">#30583</td>
          </tr>
          <tr className="text-center border-b h-12">
            <td className="text-blue-semi-dark"><Image src="/images/docicon.png" width={22} height={22} />
                Descargar</td>
            <td>
              <Image src="/images/cardlogo.png" width={25} height={16} />
              <span className="ml-2">*****1235</span>
            </td>
            <td>5/09/2021</td>
            <td>$100.00</td>
            <td>Breiner Lopez</td>
            <td className="text-blue-semi-dark">#30583</td>
          </tr>
          <tr className="text-center border-b h-12">
            <td className="text-blue-semi-dark"><Image src="/images/docicon.png" width={22} height={22} />
                Descargar</td>
            <td>
              <Image src="/images/cardlogo.png" width={25} height={16} />
              <span className="ml-2">*****1235</span>
            </td>
            <td>5/09/2021</td>
            <td>$100.00</td>
            <td>Breiner Lopez</td>
            <td className="text-blue-semi-dark">#30583</td>
          </tr>
          <tr className="text-center border-b h-12">
            <td className="text-blue-semi-dark"><Image src="/images/docicon.png" width={22} height={22} />
                Descargar</td>
            <td>
              <Image src="/images/cardlogo.png" width={25} height={16} />
              <span className="ml-2">*****1235</span>
            </td>
            <td>5/09/2021</td>
            <td>$100.00</td>
            <td>Breiner Lopez</td>
            <td className="text-blue-semi-dark">#30583</td>
          </tr>
          <tr className="text-center border-b h-12">
            <td className="text-blue-semi-dark"><Image src="/images/docicon.png" width={22} height={22} />
                Descargar</td>
            <td>
              <Image src="/images/cardlogo.png" width={25} height={16} />
              <span className="ml-2">*****1235</span>
            </td>
            <td>5/09/2021</td>
            <td>$100.00</td>
            <td>Breiner Lopez</td>
            <td className="text-blue-semi-dark">#30583</td>
          </tr>
          <tr className="text-center border-b h-12">
            <td className="text-blue-semi-dark"><Image src="/images/docicon.png" width={22} height={22} />
                Descargar</td>
            <td>
              <Image src="/images/cardlogo.png" width={25} height={16} />
              <span className="ml-2">*****1235</span>
            </td>
            <td>5/09/2021</td>
            <td>$100.00</td>
            <td>Breiner Lopez</td>
            <td className="text-blue-semi-dark">#30583</td>
          </tr>
          <tr className="text-center border-b h-12">
            <td className="text-blue-semi-dark"><Image src="/images/docicon.png" width={22} height={22} />
                Descargar</td>
            <td>
              <Image src="/images/cardlogo.png" width={25} height={16} />
              <span className="ml-2">*****1235</span>
            </td>
            <td>5/09/2021</td>
            <td>$100.00</td>
            <td>Breiner Lopez</td>
            <td className="text-blue-semi-dark">#30583</td>
          </tr>
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
