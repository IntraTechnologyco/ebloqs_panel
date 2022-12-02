import React, {useEffect, useState } from 'react'
import Input from "../components/Input"
import ButtonBlueGradient from "../components/Buttons/ButtonBlueGradient"
import { getAvailableTokens, getTokenData, getTotalSupplyTokens, updateTokenPreventa } from '../ApiFuntions/tokens'
import { convertToCurrency } from '../globalFunction/convertToCurrency'
import Loader from '../components/Loader'
import Select from '../components/Select'

export default function Tokens() {
  const [totalSypply,setTotalSupply]=useState(0)
  const [availableTokens,setAvailableTokens]=useState(0)
  const [preventaData,setPreventadata]=useState({} )
  const [eblBalance,setEblBalance]=useState(0)
  const [icoCost,setIcoCost]=useState("")
  const [loading,setLoading]=useState(true)
  const [refetch,setRefetch]=useState(true)
  const [ userRol, setUserRol ] = useState(null)
  //ico costs options
  const ico_costs=[
    {type:"0.07",name:"$0.07"},
    {type:"0.10",name:"$0.10"},
]
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
    getAvailableTokens()
    .then((res)=>{
      setAvailableTokens(res.data.data)
      setLoading(false)
      setEblBalance(1000000000000000000000000000n-BigInt(res.data.data))
    })
    getTotalSupplyTokens()
  },[refetch])
    //get total supply
    useEffect(()=>{
      getTotalSupplyTokens()
      .then((res)=>{
        setTotalSupply(res.data.data)
        console.log(res.data)
      })
    },[])
// handle update ico cost
  const handleUpdateTokendata=(presale_status)=>{
    setLoading(true)
      updateTokenPreventa({
        /* ebl_balance:0,
        ico_cost:preventaData.ico_cost,
        private_round:0,
        presale:0 */
       ebl_balance:eblBalance.toString(),
      ico_cost:preventaData.ico_cost,
      private_round:preventaData.private_round<=0?(((parseInt(eblBalance)-preventaData.ebl_balance) *icoCost).toString()):preventaData.private_round,
      presale:preventaData.private_round>0?(((parseInt(eblBalance)-preventaData.ebl_balance)*icoCost)).toString():preventaData.presale,
      presale_status:presale_status??preventaData.presale_status
    })
    .then(()=>{
      setLoading(false)
      setRefetch(!refetch)
    }).catch((err)=>{
      console.log(err)
       setLoading(false)}) 
  }
  // handle update ico cost
  const updateIcoCost=()=>{
    icoCost!=preventaData.ico_cost&&handleUpdateTokendata(true)

  }
  // handle start presale
  const startPresale=()=>{
    updateTokenPreventa({
      ebl_balance:preventaData.ebl_balance,
      ico_cost:ico_costs[0].type,
      private_round:0,
      presale:0,
      presale_status:true
  })
  .then(()=>{
    setLoading(false)
    setRefetch(!refetch)
  })

  }
  // handle end presale
  const endPresale=()=>{
    handleUpdateTokendata(false)
  }
  useEffect(()=>{
    setUserRol(Number(JSON.parse(localStorage.getItem("userInfo")).rol))
  },[])
  return (
    <div className='max-w-[800px] mx-auto'>
      {
        loading?<div className='h-screen absolute top-0 z-0 w-inherit mx-auto right-0 left-0'><Loader size="w-10"/></div>
        :
        <>
        <h2 className='text-purple-dark font-bold text-2xl'>Tokens</h2>
      {/** card tokens */}
      <div className='border shadow-sm p-10 rounded-lg mt-5'>
        <Input type="string" disabled={true} label="EBL Supply" value={convertToCurrency(availableTokens)}  />
        <div className='mt-5 w-60 ml-auto'>
        {/* <ButtonBlueGradient text="Create" onClick={()=>console.log("token create")} /> */}
        </div>
        {/** balances */}
        <div className='grid grid-cols-2 gap-10 mt-10'>
        <Input  onChange={(e)=>handleInputsOnChange(e)} type="string" disabled={true} label="EBL Balance" name="ebl_balance" value={convertToCurrency(parseInt(eblBalance))}/>
        <Input onChange={(e)=>handleInputsOnChange(e)} type="string" disabled={true} label="Dollar Balance" name="dollar_balance" value={convertToCurrency(((Number(eblBalance)-preventaData.ebl_balance)*icoCost),"USD")} />
        </div>
        <div className='grid grid-cols-2 gap-10'>
          <div>
          <Input onChange={(e)=>handleInputsOnChange(e)} type="string" disabled={true} label="Private round" name="private_round" value={convertToCurrency(preventaData.private_round,"USD")}  />
          <Input onChange={(e)=>handleInputsOnChange(e)} type="string" disabled={true} label="Presale" name="presale" value={convertToCurrency(preventaData.presale,"USD")}  />
          </div>
       <div>
        <Select label="Ico Cost" data={ico_costs} disabled={ userRol === 1 } name="ico_cost" onChange={(e)=>handleInputsOnChange(e)} value={preventaData.ico_cost}/>
       {/* <Input onChange={(e)=>handleInputsOnChange(e)} type="number" label="Ico cost" name="ico_cost" value={preventaData.ico_cost}  /> */}
       <br />
        <ButtonBlueGradient text="Update" onClick={()=>updateIcoCost()} disabled={icoCost==preventaData.ico_cost?true:false} />
       </div>
        </div>
        <div className=' mt-8'>
          {
            userRol !==1 && (
            preventaData.presale_status?
            <ButtonBlueGradient text="End" onClick={()=>endPresale()}/>
            :
            <ButtonBlueGradient text="Start" onClick={()=>startPresale()}/>)
          }
        
        </div>
      </div>
        </>
      }
    </div>
  )
}
