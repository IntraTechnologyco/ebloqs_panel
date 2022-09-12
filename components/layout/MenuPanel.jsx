import Image from 'next/image'
import React from 'react'
import { AutIcon, CustomerIcon, FinanceIcon, LogoutIcon, ProjectsIcon, TokensIcon } from '../../public/images/svgsIcons'
import LinkButtonBlueWhite from '../Buttons/LinkButtonBlueWhiteIcon'
import Link from 'next/link'
import { withRouter } from 'next/router'

const MenuPanel =({router})=> {
  return (
    <div className={`${router.asPath.includes("/login")&&"hidden"}  bg-purple-dark h-screen min-w-96 text-white p-10 pr-20`} >
        <div className='ml-3 mb-10'>
        <Link href="/"><Image src="/images/logow.svg" width={110} height={38} className="cursor-pointer"/></Link>
        </div>
        <ul>
            <li className='my-3'><LinkButtonBlueWhite href="/customers" text="Customers" icon={CustomerIcon}/></li>
            <li className='my-3'><LinkButtonBlueWhite href="/projects" text="Projects" icon={ProjectsIcon} /></li>
            <li className='my-3'><LinkButtonBlueWhite href="/tokens" text="Tokens" icon={TokensIcon}/></li>
            <li className='my-3'><LinkButtonBlueWhite href="/finance" text="Finance" icon={FinanceIcon}/></li>
            <li className='my-3'><LinkButtonBlueWhite href="/authentication" text="Authentication" icon={AutIcon}/></li>
        </ul>
        <hr  className='my-10'/>
        <LinkButtonBlueWhite href="/login" text="Salir" icon={LogoutIcon}/>
        
    </div>
  )
}
export default withRouter(MenuPanel) 
