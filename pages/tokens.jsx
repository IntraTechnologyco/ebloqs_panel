import React, {useEffect, useState } from 'react'
import Input from "../components/Input"
import ButtonBlueGradient from "../components/Buttons/ButtonBlueGradient"
import { getTokenData, getTotalSupplyTokens, updateTokenPreventa } from '../ApiFuntions/tokens'
import { convertToCurrency } from '../globalFunction/convertToCurrency'
import Loader from '../components/Loader'

export default function Tokens() {
  const [totalSypply,setTotalSupply]=useState("")
  const [preventaData,setPreventadata]=useState({})
  const [eblBalance,setEblBalance]=useState(0)
  const [icoCost,setIcoCost]=useState("")
  const [loading,setLoading]=useState(true)
  const [refetch,setRefetch]=useState(true)
  

  //handle inputs onChange
  const handleInputsOnChange=({target})=>{
     setPreventadata({
      ...preventaData,
      [target.name]:target.value
    })
  }
  //hadle dollar balance
  useEffect(()=>{
    getTokenData()
    .then((res)=>{
      setPreventadata(res)
      setIcoCost(res.ico_cost)
      console.log(res)
    })
    getTotalSupplyTokens()
    .then((res)=>{
      setTotalSupply(res.data.data)
      setLoading(false)
      setEblBalance((1000000000000000000000000n-BigInt(res.data.data)))
    })
  },[refetch])

  const handleUpdateTokendata=()=>{
    setLoading(true)
    console.log({
      ebl_balance:eblBalance.toString(),
      ico_cost:preventaData.ico_cost,
      private_round:preventaData.private_round<=0?BigInt(parseInt(eblBalance)*icoCost).toString():preventaData.private_round,
      presale:preventaData.private_round>0?BigInt(((parseInt(eblBalance)-preventaData.ebl_balance)*icoCost)).toString():preventaData.presale
    })
        icoCost!=preventaData.ico_cost&&updateTokenPreventa({
      ebl_balance:eblBalance.toString(),
      ico_cost:preventaData.ico_cost,
      private_round:preventaData.private_round<=0?BigInt(parseInt(eblBalance)*icoCost).toString():preventaData.private_round,
      presale:preventaData.private_round>0?BigInt(((parseInt(eblBalance)-preventaData.ebl_balance)*icoCost)).toString():preventaData.presale
    })
    .then(()=>{
      setLoading(false)
      setRefetch(!refetch)
    })    
  }
  return (
    <div className='max-w-[800px] mx-auto'>
      {
        loading?<div className='h-screen absolute top-0 z-0 w-inherit mx-auto right-0 left-0'><Loader size="w-10"/></div>
        :
        <>
        <h2 className='text-purple-dark font-bold text-2xl'>Tokens</h2>
      {/** card tokens */}
      <div className='border shadow-sm p-10 rounded-lg mt-5'>
        <Input type="string" disabled={true} label="EBL Supply" value={convertToCurrency(totalSypply)}  />
        <div className='mt-5 w-60 ml-auto'>
        {/* <ButtonBlueGradient text="Create" onClick={()=>console.log("token create")} /> */}
        </div>
        {/** balances */}
        <div className='grid grid-cols-2 gap-10 mt-10'>
        <Input  onChange={(e)=>handleInputsOnChange(e)} type="string" disabled={true} label="EBL Balance" name="ebl_balance" value={convertToCurrency(parseInt(eblBalance)-preventaData.ebl_balance)}/>
        <Input onChange={(e)=>handleInputsOnChange(e)} type="string" disabled={true} label="Dollar Balance" name="dollar_balance" value={convertToCurrency(BigInt((parseInt(eblBalance)-preventaData.ebl_balance)*icoCost),"USD")} />
        </div>
        <div className='grid grid-cols-2 gap-10'>
          <div>
          <Input onChange={(e)=>handleInputsOnChange(e)} type="string" disabled={true} label="Private round" name="private_round" value={convertToCurrency(preventaData.private_round,"USD")}  />
          <Input onChange={(e)=>handleInputsOnChange(e)} type="string" disabled={true} label="Presale" name="presale" value={convertToCurrency(preventaData.presale,"USD")}  />
          </div>
       <div>
       <Input onChange={(e)=>handleInputsOnChange(e)} type="number" label="Ico cost" name="ico_cost" value={preventaData.ico_cost}  />
       <br />
        <ButtonBlueGradient text="Update" onClick={()=>handleUpdateTokendata()} disabled={icoCost==preventaData.ico_cost?true:false} />
       </div>
        </div>
      </div>
        </>
      }
    </div>
  )
}
