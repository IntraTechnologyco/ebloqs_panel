import React from 'react'

export default function PointsAcumItem({points,eblCount}) {
  return (
    <div className='flex font-bold justify-between items-center text-sm bg-white shadow border border-purple-semi-light p-3 rounded'>
        <p className='text-blue-semi-dark'>{eblCount} EBL</p>
        <div className='bg-[#EAE4FC] rounded-full w-28 px-2 py-1 text-center'>
            <span className='text-[#8966F0]'>+ {points} pts</span>
        </div>
    </div>
  )
}
