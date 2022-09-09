import React from 'react'

export default function ProgressHorizontal({percent}) {
  return (
    <div>
      <progress className='w-full' value={percent} max="100" />
    </div>
  )
}
