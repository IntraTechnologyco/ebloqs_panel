import React from 'react'

export default function ConfirmModal({text,onConfirm,onCancel}) {
  return (
    <div className='bg-black/20 fixed z-50 w-full h-full top-0 right-0 flex justify-center items-center'>

       <div className='bg-white w-96 rounded shadow-md p-5 text-center'>
       <p>{text}</p>
        <div className='mt-5'>
        <button onClick={onConfirm} className="bg-purple-dark h-10 w-32 rounded shadow text-white mr-2">Confirm</button>
        <button onClick={()=>onCancel()} className="bg-purple-full-light h-10 w-32 rounded shadow text-white ml-2">Cancel</button>
        </div>
       </div>
    </div>
  )
}
