import React, { useEffect, useState } from 'react'
import { getTokenData } from '../ApiFuntions/tokens'
import { confirmBlockchainTransfer, updateTransactionStatus } from '../ApiFuntions/transactions'
import { convertToCurrency } from '../globalFunction/convertToCurrency'
import ConfirmModal from './modals/ConfirmModal'
import SelectOfStatesWithColors from './SelectOfStatesWithColors'

export default function RecentPaymentsTable({data,setStateChanged,stateChanged,selectStateOn}) {
    const [stateSelect,setStateSelect]=useState(null)
    const [icoCost,setIcoCost]=useState(0)
    const [confirmModalData,setConfirmModalData]=useState({state:false, text:"", loading:false})
    const [transactionData,setTransactionData]=useState({id:null,status:null})
    
    const handleUpdateState=({target}, trasactionId, amount ,to)=>{
        setConfirmModalData({state:true,text:`Esta seguro que quiere cambiar el estado de la transaction ${trasactionId} de`})
        setTransactionData({ id:trasactionId, status:parseInt(target.value), amount:parseInt(amount/icoCost), to:to })
        setStateSelect(target.value)
      }
      const handleHanleUpdateStatus=()=>{
        
        setConfirmModalData({...confirmModalData, loading:true})

        updateTransactionStatus(transactionData)
        .then(()=>{

          if( transactionData.status!=1 ){
            setStateChanged(!stateChanged)
            setConfirmModalData({ state:false, text:"", loading:false })
          }

          else if(transactionData.status === 1){
            confirmBlockchainTransfer(transactionData.to, transactionData.amount)
            .then(()=>{
              setStateChanged(!stateChanged)
              setConfirmModalData({ state:false, text:"", loading:false })
            })
          }
        })

      }
      useEffect(()=>{
        getTokenData().then((res)=>{
          setIcoCost(Number(res.ico_cost))
         },[])
      })
  return (
    <table className='w-full mt-10 text-purple-dark'>
      {
        confirmModalData.state && <ConfirmModal text={confirmModalData.text} onCancel={()=>setConfirmModalData({state:false,text:""})} onConfirm={()=>handleHanleUpdateStatus()} loading={ confirmModalData.loading } />
      } 
        <thead className='bg-purple-semi-light rounded h-10'>
            <tr>
                <th>Status</th>
                <th>Send date</th>
                <th>Amount</th>
                <th>Customer</th>
            </tr>
        </thead>
        <tbody>
            {
                data?.map((transaction,idx)=>{
                return(
                    <tr key={idx} className='text-center border-b h-12 text-xs'>
                        <td>  
                          {
                            selectStateOn?
                            <SelectOfStatesWithColors userId={transaction.id} state={transaction.status} onChange={(e)=>handleUpdateState(e,transaction.id, parseInt(transaction.amount), transaction.customer)} />
                            :
                            <p className={`w-full capitalize focus-within:outline-none ${transaction.status==0?"bg-yellow-200 text-yellow-700":transaction.status==2?"bg-blue-200 text-blue-700":transaction.status==1&&"bg-green-200 text-green-700" } font-medium rounded p-1`}>{transaction.status=="0"?"Pending":transaction.status=="1"?"Paid out":transaction.status==2&&"Not payed"}</p>
                          }
                        </td>
                        <td> {transaction.create.substring(0,10)} </td>
                        <td>{convertToCurrency(transaction.amount,"USD")} </td>
                        <td>{transaction.customer_name}</td>
                    </tr>
                )
                })
            }
        </tbody>
    </table>
  )
}
