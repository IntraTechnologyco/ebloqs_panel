import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ButtonBlueGradient from "../components/Buttons/ButtonBlueGradient";
import CheckBox from "../components/CheckBox";
import Input from "../components/Input";

export default function login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
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
    console.log("loged");
  };
  return (
    <div className="flex">
      {/** login */}
      <div className="w-[50%] pl-20">
        <Image src="/images/logo.svg" width={150} height={70} />
        <h2 className="font-semibold text-3xl text-purple-dark text-center mt-5">
          Bienvenido a Ebloqs
        </h2>
        <p className="text-purple-full-light text-center">
          Ingresa tus datos para acceder a Ebloqs
        </p>
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
    </div>
  );
}
