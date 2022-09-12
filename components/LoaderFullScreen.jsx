import React from 'react'
import Loader from './Loader'

export default function LoaderFullScreen({loaderSize}) {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/40'>
        <Loader size={loaderSize} />
    </div>
  )
}
