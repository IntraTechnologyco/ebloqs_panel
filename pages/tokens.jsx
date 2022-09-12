import React, { useEffect, useState } from 'react'
import Input from "../components/Input"
import ButtonBlueGradient from "../components/Buttons/ButtonBlueGradient"
import { getTotalSupplyTokens } from '../ApiFuntions/tokens'
import { converToCurrency } from '../globalFunction/convertToCurrency'

export default function Tokens() {
  const [totalSypply,setTotalSupply]=useState()
  useEffect(()=>{
    getTotalSupplyTokens()
    .then((res)=>{
      setTotalSupply(res.data.data)
      console.log(Number.MAX_SAFE_INTEGER)
    })
  },[])
  return (
    <div className='max-w-[800px] mx-auto'>
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
    </div>
  )
}
