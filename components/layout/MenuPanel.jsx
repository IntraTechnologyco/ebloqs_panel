import Image from 'next/image'
import React from 'react'
import { AutIcon, CustomerIcon, FinanceIcon, LogoutIcon, ProjectsIcon, TokensIcon } from '../../public/images/svgsIcons'
import LinkButtonBlueWhite from '../Buttons/LinkButtonBlueWhiteIcon'
import { withRouter } from 'next/router'

const MenuPanel =({router})=> {
    console.log(router)
  return (
    <div className='bg-purple-dark h-screen min-w-96 text-white p-10 pr-20'>
        <Image src="/images/logow.svg" width={150} height={70} />
        <ul>
            <li className='my-3'><LinkButtonBlueWhite href="/login" text="Customers" icon={CustomerIcon}/></li>
            <li className='my-3'><LinkButtonBlueWhite href="/projects" text="Projects" icon={ProjectsIcon} /></li>
            <li className='my-3'><LinkButtonBlueWhite href="/tokens" text="Tokens" icon={TokensIcon}/></li>
            <li className='my-3'><LinkButtonBlueWhite href="/finance" text="Finance" icon={FinanceIcon}/></li>
            <li className='my-3'><LinkButtonBlueWhite href="/authentication" text="Authentication" icon={AutIcon}/></li>
        </ul>
        <hr  className='my-10'/>
        <LinkButtonBlueWhite href="/" text="Salir" icon={LogoutIcon}/>
        
    </div>
  )
}
export default withRouter(MenuPanel)
