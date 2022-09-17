import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import LinkButtonOutlinePurpleDark from '../../components/Buttons/LinkButtonOutlinePurpleDark'
import CustomerBalances from '../../components/Cards/CustomerBalances'
import CustomerInvesmentTable from '../../components/CustomerInvesmentTable'
import CardWithTitle from '../../components/Cards/CardWithTitle'
import PointsAcumItem from '../../components/Cards/PointsAcumItem'
import Link from 'next/link'
import { changeUserStatus, getUserDataByUserId } from '../../ApiFuntions/user'
import Loader from '../../components/Loader'
import { converToCurrency } from '../../globalFunction/convertToCurrency'
import RadioButton from '../../components/RadioButton'
export default function Customer() {
    //states
    const [userInfo,setUserInfo]=useState({})
    const [userActiveChanged,setUserActiveChanged]=useState(true)
    const [loading,setLoading]=useState(true)
    //next router
    const router=useRouter()
    useEffect(()=>{
        router.query.id&&getUserDataByUserId(router.query.id).then((res)=>{
            setLoading(false)
            setUserInfo(res.data)
            setUserActiveChanged(res.data.primaryData[0].status)
        }).catch((err)=>{
            console.log(err)
        })
    },[router.query.id,userActiveChanged])
    //handle Inactive or active user
    const handleUserState=(e)=>{
        if(e.target.checked===true){
            console.log(e.target.value) 
            changeUserStatus({id:router.query.id,status:JSON.parse(e.target.value.toLowerCase())})
            setUserActiveChanged(JSON.parse(e.target.value.toLowerCase()))
        } 
    }
  return (
    <>
    {
        !loading?
        <div className='flex'>
        <div className='w-[200px] overflow-y-auto bg-[#F9F9FA] fixed -ml-10 -mb-6 top-10 h-screen text-purple-dark p-5 border-r'>
        <h2 className="text-lg font-bold text-purple-dark mb-3 text-center capitalize">{userInfo.personalData.name} {userInfo.personalData.lastname}</h2>
        <div className='flex justify-center'>
        <Image src="/images/test4.png" width={120} height={120} className="rounded-full" />
        </div>
        <p className='mt-3 text-blue-semi-dark font-bold text-sm text-center'>ID: {userInfo.personalData.dniNumber}</p>
        <p className='font-semibold text-sm text-center'>Nº De referencia <br />{userInfo.primaryData[0].idRef}</p>
        <div className='text-xs mt-5'>
            <div className='flex items-center my-1 text-ellipsis'>
                <div className='min-w-[24px]'>
                <Image src="/images/emailicon.png" width={24} height={24}/>
                </div>
                <p className='ml-2 text-ellipsis overflow-hidden hover:overflow-visible'>{userInfo.primaryData[0].email}</p>
            </div>
            <div className='flex items-center my-1'>
                <Image src="/images/phoneicon.png" width={24} height={24}/>
                <p className='ml-2'>{userInfo.personalData.phoneNumber}</p>
            </div>
            <div className='flex items-center my-1'>
                <Image src="/images/calicon.png" width={24} height={24}/>
                <p className='ml-2'>{userInfo.personalData.birthdayDate}</p>
            </div>
            <div className='flex items-center my-1'>
                <Image src="/images/neticon.png" width={24} height={24}/>
                <p className='ml-2'>{userInfo.addressData.country}</p>
            </div>
            <div className='flex items-center my-1'>
                <Image src="/images/ubiicon.png" width={24} height={24}/>
                <p className='ml-2'>{userInfo.addressData.city}</p>
            </div>
            <div className='flex items-center my-1'>
                <div className='min-w-[24px]'>
                <Image src="/images/houseicon.png" width={24} height={24}/>
                </div>
                <p className='ml-2'>{userInfo.addressData.address1}</p>
            </div>
            <div className='flex items-center my-1'>
                <Image src="/images/balanceicon.png" width={24} height={24}/>
                <p className='ml-2'>{userInfo.addressData.postalCode}</p>
            </div>
            <div className='mt-5 flex justify-center'>
            <LinkButtonOutlinePurpleDark href="/" text="View Document"/>
            </div>
            <div className='mt-2'>
               <RadioButton text="Inactive (Off)" id="inactive" name="status" checked={!userActiveChanged} value={false} onChange={(e)=>{handleUserState(e)}} /> 
               <RadioButton text="Active (On)" id="active" name="status" checked={userActiveChanged} value={true}  onChange={(e)=>{handleUserState(e)}}/> 
            </div>
        </div>
        </div>

        <div className='w-full pl-[180px]'>
            <div className='grid grid-cols-4 gap-3'>
                <CustomerBalances text="Invesment" value="0" /> 
                <CustomerBalances text="Money Balance" value={converToCurrency(0)} /> 
                <CustomerBalances text="EBL Balance" value={converToCurrency(userInfo.balanceData.data)} /> 
                <CustomerBalances text="Token ebloqs" value="0" /> 
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
         :<div className='h-screen absolute top-0 z-0 w-inherit mx-auto right-0 left-0'><Loader size="w-10" /></div>
    

    }
    </>
  )
}
