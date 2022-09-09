import React from 'react'
import Input from "../components/Input"
import ButtonBlueGradient from "../components/Buttons/ButtonBlueGradient"

export default function Tokens() {
  return (
    <div className='max-w-[800px] mx-auto'>
      <h2 className='text-purple-dark font-bold text-2xl'>Tokens</h2>
      {/** card tokens */}
      <div className='border shadow-sm p-10 rounded-lg mt-5'>
        <Input type="number" label="EBL" value="00.00"  />
        <div className='mt-5 w-60 ml-auto'>
        <ButtonBlueGradient text="Create" onClick={()=>console.log("token create")} />
        </div>
        {/** balances */}
        <div className='grid grid-cols-2 gap-10 mt-10'>
        <Input type="number" label="EBL Balance" value="1000.000"  />
        <Input type="number" label="Dollar Balance" value="1500"  />
        </div>
      </div>
    </div>
  )
}
