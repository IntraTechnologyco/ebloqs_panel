import React from 'react'

export default function CustomModal({children,onClose}) {
  return (
    <div className='fixed top-0 bottom-0  bg-black/5 right-0 left-0 z-50 flex items-center justify-center'>
        
        <div className='bg-white shadow-xl border w-auto h-auto p-5 rounded relative'>
        <button onClick={onClose} className='absolute -right-2 -top-3 bg-purple-dark rounded-full text-white w-7 h-7'>x</button>
            {children}            
        </div>
    </div>
  )
}
