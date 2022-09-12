import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import LinkButtonOutlinePurpleDark from '../../components/Buttons/LinkButtonOutlinePurpleDark'
import CustomerBalances from '../../components/Cards/CustomerBalances'
import CustomerInvesmentTable from '../../components/CustomerInvesmentTable'
import CardWithTitle from '../../components/Cards/CardWithTitle'
import PointsAcumItem from '../../components/Cards/PointsAcumItem'
import Link from 'next/link'
export default function Customer() {
    const router=useRouter()
  return (
    <div className='flex'>
        <div className='w-[200px] bg-[#F9F9FA] fixed -ml-10 -mb-6 top-10 h-screen text-purple-dark p-5 border-r'>
        <h2 className="text-xl font-bold text-purple-dark mb-3 text-center">Claudia Vania Arteaga Villacis</h2>
        <div className='flex justify-center'>
        <Image src="/images/test4.png" width={150} height={150} className="rounded-full" />
        </div>
        <p className='mt-3 text-blue-semi-dark font-bold text-sm text-center'>ID: 0916717937</p>
        <p className='font-semibold text-sm text-center'>Nº De referencia <br /> FI99HL7B</p>
        <div className='text-xs mt-5'>
            <div className='flex items-center my-1'>
                <Image src="/images/emailicon.png" width={24} height={24}/>
                <p className='ml-2'>claudia@hotmail.com</p>
            </div>
            <div className='flex items-center my-1'>
                <Image src="/images/phoneicon.png" width={24} height={24}/>
                <p className='ml-2'>+593 99 800 4464</p>
            </div>
            <div className='flex items-center my-1'>
                <Image src="/images/calicon.png" width={24} height={24}/>
                <p className='ml-2'>22/01/17</p>
            </div>
            <div className='flex items-center my-1'>
                <Image src="/images/neticon.png" width={24} height={24}/>
                <p className='ml-2'>Ecuador</p>
            </div>
            <div className='flex items-center my-1'>
                <Image src="/images/ubiicon.png" width={24} height={24}/>
                <p className='ml-2'>Guayaquil</p>
            </div>
            <div className='flex items-center my-1'>
                <div className='min-w-[24px]'>
                <Image src="/images/houseicon.png" width={24} height={24}/>
                </div>
                <p className='ml-2'>Samborondon, Ciudad Celeste, Etapa cristalina,casa 4 villa 9</p>
            </div>
            <div className='flex items-center my-1'>
                <Image src="/images/balanceicon.png" width={24} height={24}/>
                <p className='ml-2'>090100</p>
            </div>
            <div className='mt-5 flex justify-center'>
            <LinkButtonOutlinePurpleDark href="/" text="View Document"/>
            </div>
        </div>
        </div>

        <div className='w-full pl-[180px]'>
            <div className='grid grid-cols-4 gap-3'>
                <CustomerBalances text="Invesment" value="3" /> 
                <CustomerBalances text="Money Balance" value="$ 1500" /> 
                <CustomerBalances text="EBL Balance" value="1500" /> 
                <CustomerBalances text="Token ebloqs" value="100" /> 
            </div>
            {/** second seption */}
            <div className='grid grid-cols-3 mt-5 gap-5'>
                
                <div className='col-span-2'>
                    {/** invesment table */}
                    <CustomerInvesmentTable/>
                    { /** referred */}
                    <br />
                    <CardWithTitle text="Referred">
                        <div className='flex flex-col border-t'>
                        <Link href="/"><span className='cursor-pointer py-2'>Claudia Vania Arteaga Villacis</span></Link>
                        <Link href="/"><span className='cursor-pointer py-2'>Lucía Amelia Astudillo Mera</span></Link>
                        <Link href="/"><span className='cursor-pointer py-2'>Claudia Vania Arteaga Villacis</span></Link>
                        <Link href="/"><span className='cursor-pointer py-2'>Claudia Vania Arteaga Villacis</span></Link>
                        
                        </div>
                    </CardWithTitle>
                </div>
                { /** Puntos acumulados */}
                <div className='col-span-1'>
                   <CardWithTitle text="Tus puntos acumulados">
                    <div className='flex justify-center'>
                    <Image src="/images/test7.png" width={142} height={142}/>
                    </div>
                    <div className='grid grid-cols-1 gap-2 mt-5'>
                        <PointsAcumItem eblCount={30} points={"70.000"} />
                        <PointsAcumItem eblCount={60} points={"5.000"}/>
                        <PointsAcumItem eblCount={90} points={"120.000"}/>
                        <PointsAcumItem eblCount={120} points={"4.000"}/>
                    </div>
                    </CardWithTitle> 
                </div>
            </div>
            {/** 3 seption */}
            <div className='grid grid-cols-3 gap-5 mt-5'>
                <div className='col-span-2 gap-5 grid-cols-2 grid'>
                <CardWithTitle text="Investment Map">
                    <div>
                        <Image src="/images/test5.png" width={246} height={149}/>
                    </div>
                </CardWithTitle>
                <CardWithTitle text="Money Balance">
                    <div>
                        <Image src="/images/test6.png" width={246} height={149}/>
                    </div>
                </CardWithTitle>
                </div>
                <div className='col-span-1'>
                <CardWithTitle text="EBL Balance">
                    <div>
                        <Image src="/images/test8.png" width={246} height={149}/>
                    </div>
                </CardWithTitle>

                </div>
            </div>

        </div>

    </div>
  )
}
