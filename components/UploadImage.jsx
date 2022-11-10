import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

export default function UploadImage({ name, value, onChange, disabled }) {
  const [tes,setTest]=useState("")
  const fileRef=useRef()
  return (
    <button onClick={()=>fileRef.current.click()} className='border border-dashed p-5 border-purple-dark text-purple-dark rounded flex flex-col h-44 items-center justify-center cursor-pointer relative'>
     {
     fileRef.current?.files[0]?
     <Image src={fileRef.current?.files[0]&&URL.createObjectURL(fileRef.current.files[0])} layout="fill" className='object-contain'/>
     :
      <div>
        <Image src="/images/addimg.png" width={34} height={34}/>
        <p>Agregar foto</p>
      </div>}
      <input ref={fileRef} onChange={onChange}name={name} type="file" accept="image/*" className='hidden' disabled={disabled}/>
    </button>
  )
}
