import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Input from '../../components/Input'
import Select from '../../components/Select'
import UploadImage from '../../components/UploadImage'
import ButtonBlueGradient from "../../components/Buttons/ButtonBlueGradient"
import { createContrat, createNewRealState } from '../../ApiFuntions/realState'
import metadata from "../../data/MetadataURIJSONSchema.json"
import Loader from '../../components/Loader'

export default function RealState() {
    const [ realStateData, setRealStateData ] = useState({})
    const [ contratCreated, setContratCreated ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const testCountries=[
        {type:1,name:"Ecuador"},
        {type:2,name:"Colombia"},
        {type:3,name:"Estados Unidos"},
    ]
    const testCities=[
        {type:1,name:"Lima"},
        {type:2,name:"Bogota"},
        {type:3,name:"Quito"},
    ]
    const types=[
        {type:1,name:"Apartamento"},
        {type:2,name:"Casa"},
        {type:2,name:"Suite"},
        {type:2,name:"Loft"},
        {type:2,name:"Apartment Office"},
        {type:2,name:"Oficina"},
        {type:2,name:"Hotel"},
        {type:2,name:"Quinta"},
        {type:2,name:"Centro Comercial"},
    ]
    //handle inputs onchange
    const handleOnChangeInputs=({target})=>{
        setRealStateData({
            ...realStateData,
            [target.name]:target.value
        })
        console.log(realStateData)
    }
        // handle images onChange
    const handleOnChangeImages=({target})=>{
        setRealStateData({
            ...realStateData,
            [target.name]:target.files[0]
        })
        console.log(realStateData)
    }
    //handle create smart contrat
    const handlCreateContrat = (e) => {
        setLoading(true)
        localStorage.setItem("rSD",JSON.stringify(realStateData))
        e.preventDefault()
        const meta = new Blob([metadata], { type: "application/json"});
        const contratData= new FormData
        contratData.append("Name", realStateData.name)
        contratData.append("Symbol", "EBL")
        contratData.append("Supply", realStateData.tokens_emitted)
        contratData.append("Image", realStateData.pic1)
        contratData.append("Metadata", meta)
        createContrat(contratData).then((res)=>{
            console.log(res)
            setContratCreated(true)
            setLoading(false)
        }).catch((err)=>{
            console.log(err)
            setLoading(false)
        })
    }

    //handle public a project
    const handlePublicRealState=()=>{
        setLoading(true)
        const realFormData= new FormData
        realFormData.append("Name", realStateData.name)
        realFormData.append("country", realStateData.country)
        realFormData.append("type", realStateData.type)
        realFormData.append("token_price", realStateData.token_price)
        realFormData.append("address", realStateData.address)
        realFormData.append("tokens_emitted", realStateData.tokens_emitted)
        realFormData.append("building_price", realStateData.building_price)
        realFormData.append("pic1", realStateData.pic1)
        realFormData.append("pic2", realStateData.pic2)
        realFormData.append("pic3", realStateData.pic3)
        realFormData.append("pic4", realStateData.pic4)
        realFormData.append("pic5", realStateData.pic5)
        realFormData.append("tokens_available", realStateData.tokens_available)
        realFormData.append("surface_building", realStateData.surface_building)
        realFormData.append("number_departaments", realStateData.number_departaments)
        realFormData.append("number_amenities", realStateData.number_amenities)
        realFormData.append("escrow", realStateData.escrow)
        realFormData.append("approved_plans", realStateData.approved_plans)
        realFormData.append("construction_license", realStateData.construction_license)
        realFormData.append("builder_data", realStateData.builder_data)
        createNewRealState(realFormData)
        .then((res)=>{
            console.log(res)
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
        })
    }
    useEffect(()=>{
        const realData=JSON.parse(localStorage.getItem("rSD"))
        setRealStateData(realData ?? {})
        setContratCreated(realData ? true : false)
    },[])

  return (
    <div >
        {
            loading&&<div className="mx-auto flex fixed left-0 right-0 justify-center items-center h-full top-0 bottom-0
             z-50 bg-black/20"><Loader size={60}/></div>
        }
        <div className='border-b pb-7'>
            <h2 className='text-2xl text-purple-dark font-bold'>Postea tu anuncio</h2>
            <p>Ingresa la información y demás datos correctamente para publicar tu anuncio con éxito</p>
        </div>
        {/** Algunos detalles */}
        <div className='mt-7'>
            <h2 className='text-xl text-purple-dark font-bold mb-5'>Incluye algunos detalles</h2>
            <div className='grid grid-cols-3 gap-5'>
                <Select label="Pais" name="country" value={realStateData.country} data={testCountries} disabled={contratCreated} onChange={(e)=>handleOnChangeInputs(e)}/>
                <Select label="Ciudad" name="city" data={testCities} disabled={contratCreated} onChange={(e)=>handleOnChangeInputs(e)}/>
                <Select label="Tipo" name="type" data={types} disabled={contratCreated} onChange={(e)=>handleOnChangeInputs(e)}/>
            </div>
        </div>
        {/** Datos del proyecto */}
        <div className='mt-7'>
            <h2 className='text-xl text-purple-dark font-bold mb-5'>Datos del producto</h2>
            <div className='grid grid-cols-3 gap-5'>
                <Input label="Nombre" name="name" value={realStateData.name} onChange={(e)=>handleOnChangeInputs(e)} disabled={contratCreated} required/>
                <Input type="number" label="Precio Token" name="token_price" value={realStateData.token_price} onChange={(e)=>handleOnChangeInputs(e)} disabled={contratCreated} />
                <Input label="Dirección" name="address" value={realStateData.address} onChange={(e)=>handleOnChangeInputs(e)} disabled={contratCreated}/>
                <Input type="number" label="Tokens emitidos" value={realStateData.tokens_emitted} name="tokens_emitted" onChange={(e)=>handleOnChangeInputs(e)} disabled={contratCreated}/>
                <Input type="number" label="Precio edificio" value={realStateData.building_price} name="building_price" onChange={(e)=>handleOnChangeInputs(e)} disabled={contratCreated}/>
                <Input type="number" label="Tokens disponibles" name="tokens_available" value={realStateData.tokens_available} onChange={(e)=>handleOnChangeInputs(e)} disabled={contratCreated}/>
            </div>
        </div>
        {/** Algunos detalles */}
        <div className='mt-7'>
            <h2 className='text-xl text-purple-dark font-bold'>Fotos del producto</h2>
            <p>Sube 5 fotos. Aquellas saldrán en tu anuncio de Ebloqs</p>
            <div className='grid grid-cols-5 gap-5 mt-5'>
                <UploadImage name="pic1" onChange={(e)=>handleOnChangeImages(e)} disabled={contratCreated}/>
                <UploadImage name="pic2" onChange={(e)=>handleOnChangeImages(e)} disabled={contratCreated}/>
                <UploadImage name="pic3" onChange={(e)=>handleOnChangeImages(e)} disabled={contratCreated}/>
                <UploadImage name="pic4" onChange={(e)=>handleOnChangeImages(e)} disabled={contratCreated}/>
                <UploadImage name="pic5" onChange={(e)=>handleOnChangeImages(e)} disabled={contratCreated}/>
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
                    <Input label="Edificio superficie (m2)" name="surface_building" value={realStateData.surface_building} onChange={(e)=>handleOnChangeInputs(e)} disabled={contratCreated}/>
                    <Input label="No. departamentos" name="number_departaments" value={realStateData.number_departaments} onChange={(e)=>handleOnChangeInputs(e)} disabled={contratCreated}/>
                    <Input label="Número amenidades" name="number_amenities" value={realStateData.number_amenities} onChange={(e)=>handleOnChangeInputs(e)} disabled={contratCreated}/>
               </div>
               <div className='grid grid-cols-1 gap-3'>
               <div className='bg-purple-semi-light rounded-md px-5 py-1 flex items-center'>
                    <Image src="/images/validation.png" width={28} height={29}/>
                    <p className='ml-2'>Validación</p>
                </div>
                    <Input label="Fideicomiso" name="escrow" value={realStateData.escrow} onChange={(e)=>handleOnChangeInputs(e)} disabled={contratCreated}/>
                    <Input label="Planos aprobados" name="approved_plans" value={realStateData.approved_plans} onChange={(e)=>handleOnChangeInputs(e)} disabled={contratCreated}/>
                    <Input label="Lic. de construcción" name="construction_license" value={realStateData.construction_license} onChange={(e)=>handleOnChangeInputs(e)} disabled={contratCreated}/>
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
                    <Input label="Renting anual" name="currentRenting" onChange={(e)=>handleOnChangeInputs(e)} disabled={contratCreated}/>
                    <Input label="Gasto anual" name="yearSpend" onChange={(e)=>handleOnChangeInputs(e)} disabled={contratCreated}/>
                    <Input label="Beneficio neto anual" name="yearNeto" onChange={(e)=>handleOnChangeInputs(e)} disabled={contratCreated}/>
               </div>
               <div className='grid grid-cols-1 gap-3'>
               <div className='bg-purple-semi-light rounded-md px-5 py-1 flex items-center'>
                    <Image src="/images/money.png" width={28} height={29}/>
                    <p className='ml-2'>Rentabilidad</p>
                </div>
                    <Input label="Interés construccion (1 año)" name="interesAnualContraction" onChange={(e)=>handleOnChangeInputs(e)} disabled={contratCreated}/>
                    <Input label="Renting neto (2 años)" name="rentingNeto2Years" onChange={(e)=>handleOnChangeInputs(e)} disabled={contratCreated}/>
                    <Input label="Plusvalía (3 años)" name="plusvalia" onChange={(e)=>handleOnChangeInputs(e)} disabled={contratCreated}/>
               </div>
            </div>
        </div>
        {/**Datos del constructor */}
        <div className='mt-7'>
            <h2 className='text-xl text-purple-dark font-bold mb-5'>Datos del constructor</h2>
            <p>Escribe algunos datos sobre el constructor</p>
            <textarea className='w-full border rounded p-5 focus-visible:outline-none' value={realStateData.builder_data} name='builder_data' onChange={(e)=>handleOnChangeInputs(e)} disabled={contratCreated}/>
        </div>
        <div className='w-64 mx-auto my-5'>{
            !contratCreated?
             <ButtonBlueGradient text="Crear contrato" onClick={(e)=>handlCreateContrat(e)} />
             :
             <ButtonBlueGradient text="Publicar" onClick={(e)=>handlePublicRealState(e)} />

        }
       
        </div>
        
    </div>
  )
}
