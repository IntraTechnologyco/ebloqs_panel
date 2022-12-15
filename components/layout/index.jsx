import React from 'react'
import MenuPanel from './MenuPanel'
import TopBar from './TopBar'
import InformativeFeedback from "../FeedbackModals/InformativeFeedback";
import { useCtx } from '../../context/context';


export default function Layout({children}) {
  const { feedbackInformativeData } = useCtx()
  return (
    <div className='flex max-w-[1440px] mx-auto'>
        <MenuPanel/>
        <main className='w-full h-screen overflow-auto relative'>
          <TopBar/>
            <div className='p-10 py-6'>
            {children}
            </div>
        </main>
        {
        feedbackInformativeData.open && <InformativeFeedback />
        }
    </div>
  )
}
