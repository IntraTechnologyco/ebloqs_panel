import Image from 'next/image'
import React, { useRef } from 'react'

export default function UploadImage({ name, value, onChange, disabled }) {
  const fileRef=useRef()
  return (
    <button onClick={()=>fileRef.current.click()} className='border border-dashed p-5 border-purple-dark text-purple-dark rounded flex flex-col h-44 items-center justify-center cursor-pointer relative'>
     {
     value?
     <Image src={ URL.createObjectURL(value) } layout="fill" className='object-contain'/>
     :
      <div>
        <Image src="/images/addimg.png" width={34} height={34}/>
        <p>Agregar foto</p>
      </div>}
      <input ref={fileRef} onChange={onChange} name={name} type="file" accept="image/png, image/jpeg, image/jpg" className='hidden' disabled={disabled}/>
    </button>
  )
}
