import React, { useEffect, useState } from "react";
import { getTransactionsByType } from "../../ApiFuntions/transactions";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import PaginationHandler from "../../components/PaginationHandler";
import PaymentsTable from "../../components/PaymentsTable";
import Select from "../../components/Select";

export default function Payments() {
  //states
  const [trasactionType, setTrasactionType] = useState(1);
  const [trasactionData, setTrasactionData] = useState([]);
  const [trasactionDataFiltered, setTrasactionDataFiltered] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterByPrice, setFilterByPrice] = useState("");
  const [filterByCustomer, setFilterByCustomer] = useState("");
  const [show, setShow] = useState(5);
  const [pagination, setPagination] = useState({ from: 0, to: 5 });
  const [entries, setEntries] = useState(0);
  const [currentEntry, setCurrenEntry] = useState(1);
  // number of items to show
  const showNumber = [5, 10, 15, 20, 25, 30];
  // payments method list
  const testArrayPaymentMode = [
    {
      type: 1,
      name: "credit/debit",
    },
    {
      type: 0,
      name: "bank SWIFT",
    },
  ];
  //handle show pagination Number
  const handleShowPaginationNumber = ({ target }) => {
    if (Number(show) > Number(target.value)) {
      //bajada
      setPagination({
        from: Number(pagination.from),
        to: Number(pagination.from) + Number(Number(target.value)),
      });
      setShow(target.value);
      console.log("yes");
    } else {
      setPagination({
        from: Number(pagination.from),
        to: Number(pagination.to) + Number(Number(target.value) - 5),
      });
      setShow(target.value);
    }
  };
  //handle next pagination
  const handleNextPagination = () => {
  if ( entries > currentEntry) {
    setCurrenEntry(currentEntry+1)
    setPagination({
      from: Number(pagination.from) + Number(show),
      to: Number(pagination.to) + Number(show),
    });
  }
      

  };
  //handle next pagination
  const handlePreviousPagination = () => {
    if(currentEntry>1){
      setPagination({
        from: Number(pagination.from) - Number(show),
        to: Number(pagination.to) - Number(show),
      });
      setCurrenEntry(currentEntry-1)
    }
    
  };
  //filter payments
  const handleFilterByName = ({ target }) => {
    setFilterByCustomer(target.value);
    setTrasactionDataFiltered(
      trasactionData.filter((item) => {
        return (
          item.customer_name.includes(target.value) &&
          item.amount.includes(filterByPrice)
        );
      })
    );
  };
  //filter payments
  const handleFilterByPrice = ({ target }) => {
    setFilterByPrice(target.value);
    setTrasactionDataFiltered(
      trasactionData.filter((item) => {
        return (
          item.customer_name.includes(filterByCustomer) &&
          item.amount.includes(target.value)
        );
      })
    );
  };

  useEffect(() => {
    getTransactionsByType(trasactionType).then((res) => {
      console.log(res);
      setTrasactionData(res.data.data);
      setLoading(false);
    });
    return () => {
      setFilterByPrice("");
      setFilterByCustomer("");
      setTrasactionDataFiltered(null);
    };
  }, [trasactionType]);
  useEffect(()=>{
   if (trasactionDataFiltered){
    setEntries(Math.floor((trasactionDataFiltered.length+3)/show,1))

    }
    else {
      setEntries(Math.floor((trasactionData.length+3)/show,1))
    } 
    
  },[show, trasactionData, trasactionDataFiltered])
  return loading ? (
    <div className="mx-auto flex justify-center items-center h-96">
      <Loader size={60} />
    </div>
  ) : (
    <div>
      {/** payment mode */}
      <div className="grid grid-cols-3 gap-7 shadow border p-7 rounded">
        <Select
          label="Payment mode"
          data={testArrayPaymentMode}
          value={trasactionType}
          onChange={(e) => setTrasactionType(parseInt(e.target.value))}
        />
        <Input
          label="Price"
          name="price"
          value={filterByPrice}
          onChange={(e) => handleFilterByPrice(e)}
        />
        <Input
          label="Customer"
          name="customer"
          value={filterByCustomer}
          onChange={(e) => handleFilterByName(e)}
        />
      </div>
      {/** payment table */}
      <div className="mt-10 border shadow p-7 rounded">
        {/** table header option */}
        <div className="flex justify-end items-center">
          {/** show columns number*/}
          <div className="flex w-36 items-center">
            <span>Show</span>
            <select
              name="show"
              onChange={(e) => handleShowPaginationNumber(e)}
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
        <PaymentsTable
          data={
            trasactionDataFiltered ? trasactionDataFiltered : trasactionData
          }
          pagination={pagination}
        />
        {/** pagination handler */}
        <div className="mt-5">
          <PaginationHandler
            handleNextPagination={handleNextPagination}
            handlePreviousPagination={handlePreviousPagination}
            entries={entries}
            currentEntry={currentEntry}
          />
        </div>
      </div>
    </div>
  );
}
