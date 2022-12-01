import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ButtonBlueGradient from "../components/Buttons/ButtonBlueGradient";
import CheckBox from "../components/CheckBox";
import Input from "../components/Input";
import {loginAdmin} from "../ApiFuntions/login"
import LoaderFullScreen from "../components/LoaderFullScreen";
import { useRouter } from "next/router";

export default function Login() {
  //states
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); //handle login loader
  // router
  const router = useRouter()
  // HANDLE INPUTS ON CHANGE
  const handleInputsChange = ({ target }) => {
    setLoginData({
      ...loginData,
      [target.name]: target.value,
    });
  };
  // HANDLE LOGIN
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true)
    loginAdmin(loginData).then((res)=>{
      localStorage.setItem("access_token",res.data.access_token)
      localStorage.setItem("userInfo",JSON.stringify(res.data))
      router.push("/")
    })
    .catch((err)=>{
      console.log(err)
      setLoading(false)
    })
  };
  useEffect(()=>{
    //delete access_token from local storage when user is on login page
    localStorage.removeItem("access_token")
    localStorage.removeItem("userInfo")
  },[])
  return (
    <div className="flex fixed w-screen h-screen top-0 left-0 right-0">
      {/** login */}
      <div className="w-[50%] pl-20">
        <Image src="/images/logo.svg" width={150} height={70} />
        <h2 className="font-semibold text-3xl text-purple-dark text-center mt-5">
          Bienvenido a Ebloqs
        </h2>
        <p className="text-purple-full-light text-center">
          Ingresa tus datos para acceder a Ebloqs
        </p>
        <div className="bg-red-500">
        
        </div>
        {/** form */}
        <form onSubmit={(e) => handleLogin(e)} className="w-[400px] mx-auto">
          <Input
            type="email"
            name="email"
            required
            onChange={(e) => handleInputsChange(e)}
            label="Email"
            value={loginData.email}
          />
          <br />
          <Input
            type="password"
            name="password"
            required
            onChange={(e) => handleInputsChange(e)}
            label="Contrase&ntilde;a"
            value={loginData.password}
          />
          <div className="flex justify-end pt-1 text-[#2504CA] ">
            <Link href="/">¿Olvidaste tu contrase&ntilde;a?</Link>
          </div>
          <CheckBox label="Recordar usuario" id="rememberUser" />
          <br />
          <br />
          <ButtonBlueGradient text="Iniciar sesión" />
        </form>
        {/** sing up */}
        <div className="mt-16 text-center">
          <p className="text-purple-dark">
            ¿No tienes cuenta?
            <span className="text-[#2504CA] font-medium ml-2">
              <Link href="/singup">Registrate</Link>
            </span>
          </p>
        </div>
      </div>
      <div className="bg-[url(/images/loginbg.png)] bg-contain bg-no-repeat bg-right h-screen w-[50%]" />
     {
      loading&&
      <LoaderFullScreen loaderSize={70}/>}
    </div>
  );
}
