import Image from 'next/image'
import React from 'react'

export default function Loader({size}) {
  return (
        <Image src="/images/tail-spin.svg" width={size} height={size} />
  )
}
