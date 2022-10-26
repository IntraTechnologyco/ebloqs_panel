import Image from 'next/image'
import React, { useRef } from 'react'

export default function UploadImage() {
  const fileRef=useRef()
  return (
    <button onClick={()=>fileRef.current.click()} className='border border-dashed p-5 border-purple-dark text-purple-dark rounded flex flex-col h-44 items-center justify-center cursor-pointer'>
      <Image src="/images/addimg.png" width={34} height={34}/>
      <p>Agregar foto</p>
      <input ref={fileRef} type="file" className='hidden'/>
    </button>
  )
}
