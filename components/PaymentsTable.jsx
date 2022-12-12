import Image from "next/image";
import { convertToCurrency } from "../globalFunction/convertToCurrency"
import jsPDF from 'jspdf';
import { useEffect, useRef } from "react";

export default function PaymentsTable({data, pagination}) {
  const reportTemplateRef = useRef(null);
  //hide payment method except last four
  const convertMethodPaymentPrivate=(value)=>{
    const converted = value.substring(0,value.length-4).replace(/[0-9]/gi,"•")+value.substring(value.length-4)
    return converted
  }

  const handleTest = (item)=>{
    console.log(reportTemplateRef.current)
    const doc = new jsPDF({
      format: "a4",
      unit: "px"
    });

    // Adding the fonts
    doc.setFont("Inter-Regular", "normal");

    doc.html(`
    <div style="width: 100%">
  <div style="display: flex; align-items:center;">
    <p style="margin-right: 10px;">Payment method:</p>
    <span> ${item.payment_number} </span>
  </div>
  <div style="display: flex; align-items:center;">
    <p style="margin-right: 10px;">Date:</p>
    <span> ${item.create.substring(0,10)} </span>
  </div>
  <div style="display: flex; align-items:center;">
    <p style="margin-right: 10px;">Amount:</p>
    <span> ${convertToCurrency(item.amount,"usd")} </span>
  </div>
  <div style="display: flex; align-items:center;">
    <p style="margin-right: 10px;">Customer:</p>
    <span> ${item.customer_name} </span>
  </div>
  <div style="display: flex; align-items:center;">
    <p style="margin-right: 10px;">Reference ID:</p>
    <span> ${item.id} </span>
  </div>
</div>
    `, {
      async callback(doc) {
        await doc.save("document");
      }
    });
  }


  return (
      <table className="w-full mt-10 text-purple-dark" >
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
            data.slice(pagination.from, pagination.to).map((item,idx)=>{
              return (
                <tr ref={reportTemplateRef} key={idx} className="text-center border-b h-12">
                  <td className="text-blue-semi-dark flex items-center justify-center my-auto h-12">
                      <Image src="/images/docicon.png" width={22} height={22} />
                     <button onClick={()=>handleTest(item)}>Download</button>
                  </td>
                  <td>
                  { item.type === "card" && <Image src="/images/cardlogo.png" width={25} height={16} /> }
                    <span className="ml-2">{convertMethodPaymentPrivate(item.payment_number)}</span>
                  </td>
                  <td>{item.create.substring(0,10)}</td>
                  <td>{convertToCurrency(item.amount,"usd")}</td>
                  <td>{item.customer_name}</td>
                  <td className="text-blue-semi-dark">{item.id}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

  );
}
