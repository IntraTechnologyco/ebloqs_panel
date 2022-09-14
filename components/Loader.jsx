import React from 'react'
import Lottie from "lottie-react";
import animationData from '../public/loaderbloqs.json'

export default function Loader({size}) {

  return (
    <div className='h-full w-full flex items-center justify-center'>
      <div className={`${size}`}>
      <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
        
  )
}
