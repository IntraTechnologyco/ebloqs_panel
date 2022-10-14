import Image from "next/image";
import {convertToCurrency} from "../globalFunction/convertToCurrency"

export default function PaymentsTable({data}) {;
  //hide payment method except last four
  const convertMethodPaymentPrivate=(value)=>{
    const converted = value.substring(0,value.length-4).replace(/[0-9]/gi,"•")+value.substring(value.length-4)
    return converted
  }

  return (
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
