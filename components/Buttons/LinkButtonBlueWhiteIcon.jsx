import Link from 'next/link'
import React from 'react'
import { withRouter } from 'next/router'

const LinkButtonBlueWhite=({text,href,icon,router})=>{
  return (
    <Link href={href}passHref>
    <div className={`capitalize cursor-pointer font-medium flex items-center rounded-xl px-3 py-2 drop-shadow  ${router.asPath.includes(href)?"text-purple-dark bg-white":"text-white"}`} >
        <span className='mr-2'>{icon}</span>
         <a className='w-full'>{text}</a>
    </div>
    </Link>
  )
}
export default withRouter(LinkButtonBlueWhite)
