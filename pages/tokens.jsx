import React, { useEffect, useState } from 'react'
import Input from "../components/Input"
import ButtonBlueGradient from "../components/Buttons/ButtonBlueGradient"
import { getTotalSupplyTokens } from '../ApiFuntions/tokens'
import { converToCurrency } from '../globalFunction/convertToCurrency'
import Loader from '../components/Loader'

export default function Tokens() {
  const [totalSypply,setTotalSupply]=useState()
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    getTotalSupplyTokens()
    .then((res)=>{
      setTotalSupply(res.data.data)
      setLoading(false)
      console.log((res.data.data))
    })
  },[])
  return (
    <div className='max-w-[800px] mx-auto'>
      {
        loading?<div className='h-screen absolute top-0 z-0 w-inherit mx-auto right-0 left-0'><Loader size="w-10" /></div>
        :
        <>
        <h2 className='text-purple-dark font-bold text-2xl'>Tokens</h2>
      {/** card tokens */}
      <div className='border shadow-sm p-10 rounded-lg mt-5'>
        <Input type="string" disabled={true} label="EBL Supply" value={converToCurrency(totalSypply)}  />
        <div className='mt-5 w-60 ml-auto'>
        {/* <ButtonBlueGradient text="Create" onClick={()=>console.log("token create")} /> */}
        </div>
        {/** balances */}
        <div className='grid grid-cols-2 gap-10 mt-10'>
        <Input type="string" disabled={true} label="EBL Balance" value={totalSypply&&(100000000000000000000000-Number(totalSypply)).toString()}  />
        <Input type="number" disabled={true} label="Dollar Balance" value="7.500000"  />
        </div>
        <div className='grid grid-cols-2 gap-10'>
          <div>
          <Input type="number" disabled={true} label="Private round" value="7.500000"  />
          <Input type="number" disabled={true} label="Presale" value="10.000000"  />
          </div>
       <div>
       <Input type="number" label="Ico cost" value="0.075"  />
       <br />
        <ButtonBlueGradient text="Update" onClick={()=>console.log("Updated token")} />
       </div>
        </div>
      </div>
        </>
      }
    </div>
  )
}
