import Image from 'next/image'
import React from 'react'
import Input from '../../components/Input'
import Select from '../../components/Select'
import UploadImage from '../../components/UploadImage'
import ButtonBlueGradient from "../../components/Buttons/ButtonBlueGradient"

export default function RealState() {
    const testCountries=[
        {type:1,name:"Ecuador"},
        {type:2,name:"Colombia"},
        {type:3,name:"Estados Unidos"},
    ]
    const testCities=[
        {type:1,name:"Ecuador"},
        {type:2,name:"Colombia"},
        {type:3,name:"Estados Unidos"},
    ]
    const types=[
        {type:1,name:"departamento"},
        {type:2,name:"casa"},
    ]
    const handleOnChangeInputs=({target})=>{
        console.log(target.value)
    }

  return (
    <div>
        <div className='border-b pb-7'>
            <h2 className='text-2xl text-purple-dark font-bold'>Postea tu anuncio</h2>
            <p>Ingresa la información y demás datos correctamente para publicar tu anuncio con éxito</p>
        </div>
        {/** Algunos detalles */}
        <div className='mt-7'>
            <h2 className='text-xl text-purple-dark font-bold mb-5'>Incluye algunos detalles</h2>
            <div className='grid grid-cols-3 gap-5'>
                <Select label="Pais" data={testCountries} />
                <Select label="Ciudad" data={testCities} />
                <Select label="Tipo" data={types} />
            </div>
        </div>
        {/** Datos del proyecto */}
        <div className='mt-7'>
            <h2 className='text-xl text-purple-dark font-bold mb-5'>Datos del producto</h2>
            <div className='grid grid-cols-3 gap-5'>
                <Input label="Nombre" name="name" onChange={(e)=>handleOnChangeInputs(e)} required/>
                <Input type="number" label="Precio Token" name="tokenValue" onChange={(e)=>handleOnChangeInputs(e)} required/>
                <Input label="Dirección" name="addres" onChange={(e)=>handleOnChangeInputs(e)} required/>
                <Input type="number" label="Tokens emitidos" name="tokensEmited" onChange={(e)=>handleOnChangeInputs(e)} required/>
                <Input type="number" label="Precio edificio" name="buildPrice" onChange={(e)=>handleOnChangeInputs(e)} required/>
                <Input type="number" label="Tokens disponibles" name="avaliableTokens" onChange={(e)=>handleOnChangeInputs(e)} required/>
            </div>
        </div>
        {/** Algunos detalles */}
        <div className='mt-7'>
            <h2 className='text-xl text-purple-dark font-bold'>Fotos del producto</h2>
            <p>Sube 5 fotos. Aquellas saldrán en tu anuncio de Ebloqs</p>
            <div className='grid grid-cols-5 gap-5 mt-5'>
                <UploadImage/>
                <UploadImage/>
                <UploadImage/>
                <UploadImage/>
                <UploadImage/>
            </div>
        </div>
        {/** Datos del proyecto */}
        <div className='mt-7'>
            <h2 className='text-xl text-purple-dark font-bold mb-5'>Datos del proyecto</h2>
            <div className='grid grid-cols-2 gap-5'>
               <div className='grid grid-cols-1 gap-3'>
                <div className='bg-purple-semi-light rounded-md px-5 py-1 flex items-center'>
                    <Image src="/images/apartment.png" width={28} height={29}/>
                    <p className='ml-2'>Tipo de proyecto</p>
                </div>
                    <Input label="Edificio superficie (m2)" name="buildSuperficie" onChange={(e)=>handleOnChangeInputs(e)} required/>
                    <Input label="No. departamentos" name="nApartamentos" onChange={(e)=>handleOnChangeInputs(e)} required/>
                    <Input label="Número amenidades" name="nAmenidades" onChange={(e)=>handleOnChangeInputs(e)} required/>
               </div>
               <div className='grid grid-cols-1 gap-3'>
               <div className='bg-purple-semi-light rounded-md px-5 py-1 flex items-center'>
                    <Image src="/images/validation.png" width={28} height={29}/>
                    <p className='ml-2'>Validación</p>
                </div>
                    <Input label="Fideicomiso" name="fideicomiso" onChange={(e)=>handleOnChangeInputs(e)} required/>
                    <Input label="Planos aprobados" name="planosAprobados" onChange={(e)=>handleOnChangeInputs(e)} required/>
                    <Input label="Lic. de construcción" name="licConstraccion" onChange={(e)=>handleOnChangeInputs(e)} required/>
               </div>
            </div>
        </div>
        {/** Tokenomics del proyecto */}
        <div className='mt-7'>
            <h2 className='text-xl text-purple-dark font-bold mb-5'>Tokenomics del proyecto</h2>
            <div className='grid grid-cols-2 gap-5'>
               <div className='grid grid-cols-1 gap-3'>
                <div className='bg-purple-semi-light rounded-md px-5 py-1 flex items-center'>
                    <Image src="/images/house.png" width={28} height={29}/>
                    <p className='ml-2'>Alquiler</p>
                </div>
                    <Input label="Renting anual" name="currentRenting" onChange={(e)=>handleOnChangeInputs(e)} required/>
                    <Input label="Gasto anual" name="yearSpend" onChange={(e)=>handleOnChangeInputs(e)} required/>
                    <Input label="Beneficio neto anual" name="yearNeto" onChange={(e)=>handleOnChangeInputs(e)} required/>
               </div>
               <div className='grid grid-cols-1 gap-3'>
               <div className='bg-purple-semi-light rounded-md px-5 py-1 flex items-center'>
                    <Image src="/images/money.png" width={28} height={29}/>
                    <p className='ml-2'>Rentabilidad</p>
                </div>
                    <Input label="Interés construccion (1 año)" name="interesAnualContraction" onChange={(e)=>handleOnChangeInputs(e)} required/>
                    <Input label="Renting neto (2 años)" name="rentingNeto2Years" onChange={(e)=>handleOnChangeInputs(e)} required/>
                    <Input label="Plusvalía (3 años)" name="plusvalia" onChange={(e)=>handleOnChangeInputs(e)} required/>
               </div>
            </div>
        </div>
        {/**Datos del constructor */}
        <div className='mt-7'>
            <h2 className='text-xl text-purple-dark font-bold mb-5'>Datos del constructor</h2>
            <p>Escribe algunos datos sobre el constructor</p>
            <textarea className='w-full  border rounded p-5 focus-visible:outline-none'/>
        </div>
        <div className='w-64 mx-auto my-5'>
        <ButtonBlueGradient text="Publicar" />
        </div>
        
    </div>
  )
}
