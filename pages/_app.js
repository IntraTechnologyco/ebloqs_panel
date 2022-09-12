import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import '../styles/globals.css'
import Login from "./login"
import {useRouter} from "next/router"

function MyApp({ Component, pageProps }) {
  const router=useRouter()
  const [auth,setAuth]=useState("")
  useEffect(()=>{
    setAuth(localStorage.getItem("access_token")?true:false)
  },[router])
  return <>{auth===true? <Layout><Component {...pageProps} /></Layout>:auth===false&&<Login/>}</>
}

export default MyApp
