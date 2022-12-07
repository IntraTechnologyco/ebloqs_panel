import Image from "next/image";
import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";
import UploadImage from "../../components/UploadImage";
import ButtonBlueGradient from "../../components/Buttons/ButtonBlueGradient";
import {
  createContrat,
  createNewRealState,
  verifyFeaturedAvailable,
} from "../../ApiFuntions/realState";
import metadata from "../../data/MetadataURIJSONSchema.json";
import Loader from "../../components/Loader";
import ButonAddAnother from "../../components/Buttons/ButonAddAnother";
import BtnToggleSwitch from "../../components/Buttons/BtnToggleSwitch";
import countriesData from "../../data/countries.json";
import SelectWithoutType from "../../components/Buttons/SelectWithoutType";
import { useCtx } from "../../context/context";
import InformativeFeedback from "../../components/FeedbackModals/InformativeFeedback";

export default function RealState() {
  // states
  const [featuredAvailable, setFeaturedAvailable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userRol, setUserRol] = useState(null);
  //context data
  const {
    realStateData,
    setRealStateData,
    nftAddress,
    setNftAddress,
    malls,
    setMalls,
    parks,
    setParks,
    metrovia,
    setMetrovia,
    supermarkets,
    setSupermarkets,
    contratCreated,
    setContratCreated,
    featured,
    setFeatured,
    feedbackInformativeData,
    setFeedbackInformativeData,
  } = useCtx();

  const testCities = [
    { type: "Lima", name: "Lima" },
    { type: "Bogota", name: "Bogota" },
    { type: "Quito", name: "Quito" },
  ];
  const types = [
    { type: "Apartamento", name: "Apartamento" },
    { type: "Casa", name: "Casa" },
    { type: "Suite", name: "Suite" },
    { type: "Loft", name: "Loft" },
    { type: "Apartment Office", name: "Apartment Office" },
    { type: "Oficina", name: "Oficina" },
    { type: "Hotel", name: "Hotel" },
    { type: "Quinta", name: "Quinta" },
    { type: "Centro Comercial", name: "Centro Comercial" },
  ];
  const handleAddAnotherZone = () => {
    setSupermarkets({
      ...supermarkets,
      zone_markets: [...supermarkets.zone_markets, ""],
    });
  };
  const handleAddAnotherPark = () => {
    setParks({ ...parks, zone_parks: [...parks.zone_parks, ""] });
    //setParks({...parks,zone_parks: [...parks.zone_parks,""]})
  };
  const handleAddAnotherMetrovia = () => {
    setMetrovia({ ...metrovia, zone_subway: [...metrovia.zone_subway, ""] });
  };
  const handleAddAnotherMall = () => {
    setMalls({ ...malls, zone_malls: [...malls.zone_malls, ""] });
  };
  // handle onchange zones
  const handlAddParkOnChange = (e, idx) => {
    let newArr = [...parks.zone_parks];
    newArr[idx] = e.target.value;
    setParks({ ...parks, zone_parks: newArr });
  };
  const handlAddMarketOnChange = (e, idx) => {
    let newArr = [...supermarkets.zone_markets];
    newArr[idx] = e.target.value;
    setSupermarkets({ ...supermarkets, zone_markets: newArr });
  };
  const handlAddMallOnChange = (e, idx) => {
    let newArr = [...malls.zone_malls];
    newArr[idx] = e.target.value;
    setMalls({ ...malls, zone_malls: newArr });
  };
  const handlAddSubwayOnChange = (e, idx) => {
    let newArr = [...metrovia.zone_subway];
    newArr[idx] = e.target.value;
    setMetrovia({ ...metrovia, zone_subway: newArr });
  };
  //handle inputs onchange
  const handleOnChangeInputs = ({ target }) => {
    setRealStateData({
      ...realStateData,
      [target.name]: target.value,
    });
  };
  // handle images onChange
  const handleOnChangeImages = ({ target }) => {
    setRealStateData({
      ...realStateData,
      [target.name]: target.files[0],
    });
  };
  //handle create smart contrat
  const handlCreateContrat = (e) => {
    if (
      realStateData.name &&
      realStateData.country &&
      realStateData.city &&
      realStateData.type &&
      realStateData.building_price &&
      realStateData.token_price &&
      realStateData.address &&
      realStateData.pic2 &&
      realStateData.pic2 &&
      realStateData.pic3 &&
      realStateData.pic4 &&
      realStateData.pic5 &&
      realStateData.annual_rental &&
      realStateData.annual_expenditure &&
      realStateData.construction_interest &&
      realStateData.net_leasing &&
      realStateData.plusvalia &&
      realStateData.builder_data
    ) {
      setLoading(true);
      e.preventDefault();
      const emitedSupply = (
        (realStateData.building_price / realStateData.token_price) *
        10 ** 18
      ).toLocaleString("fullwide", { useGrouping: false });
      console.log(emitedSupply);
      const meta = new Blob([metadata], { type: "application/json" });
      const contratData = new FormData();
      contratData.append("Name", realStateData.name);
      contratData.append("Symbol", "EBL");
      contratData.append("Supply", emitedSupply);
      contratData.append("Image", realStateData.primary_img);
      contratData.append("Metadata", meta);

      createContrat(contratData)
        .then((res) => {
          console.log(res);
          //localStorage.setItem("rSD",JSON.stringify(realStateData))
          setNftAddress(res.data.data.NFT.nftAddress);
          setContratCreated(true);
          setLoading(false);
          setFeedbackInformativeData({
            open: true,
            text: "Contrato creado exitosamente",
            success: true,
          });
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setFeedbackInformativeData({
            open: true,
            text: "Error al crear el contrato por favor intentelo nuevamente",
            success: false,
          });
        });
    } else {
      setFeedbackInformativeData({
        open: true,
        text: "Todos los campos con * son requeridos por favor diligencialos",
        success: false,
      });
    }
  };

  const cleanData = () => {
    setLoading(false);
    setRealStateData({ name: "" });
    setMalls({ zone_malls: [] });
    setMetrovia({ zone_subway: [] });
    setParks({ zone_parks: [] });
    setSupermarkets({ zone_markets: [] });
    setContratCreated(false);
    setFeatured(false);
    setFeedbackInformativeData({
      open: true,
      text: "Proyecto creado exitosamente",
      success: true,
    });
  };
  //handle public a project
  const handlePublicRealState = () => {
    setLoading(true);
    const emitedSupply = (
      (realStateData.building_price / realStateData.token_price) *
      10 ** 18
    ).toLocaleString("fullwide", { useGrouping: false });
    const realFormData = new FormData();
    realFormData.append("name", realStateData.name);
    realFormData.append("featured", featured);
    realFormData.append("city", realStateData.city);
    realFormData.append(
      "net",
      Number(realStateData.construction_interest) +
        Number(realStateData.net_leasing) +
        Number(realStateData.plusvalia)
    );
    realFormData.append("country", realStateData.country);
    realFormData.append("type", realStateData.type);
    realFormData.append("token_price", realStateData.token_price);
    realFormData.append("address", realStateData.address);
    realFormData.append("tokens_emitted", emitedSupply);
    realFormData.append("building_price", realStateData.building_price);
    realFormData.append("featured_img", realStateData.featured_img);
    realFormData.append("primary_img", realStateData.primary_img);
    realFormData.append("pic1", realStateData.pic1);
    realFormData.append("pic2", realStateData.pic2);
    realFormData.append("pic3", realStateData.pic3);
    realFormData.append("pic4", realStateData.pic4);
    realFormData.append("pic5", realStateData.pic5);
    realFormData.append("tokens_available", emitedSupply);
    realFormData.append("surface_building", realStateData.surface_building);
    realFormData.append(
      "number_departaments",
      realStateData.number_departaments
    );
    realFormData.append("number_amenities", realStateData.number_amenities);
    realFormData.append("escrow", realStateData.escrow);
    realFormData.append("approved_plans", realStateData.approved_plans);
    realFormData.append(
      "construction_license",
      realStateData.construction_license
    );
    realFormData.append("builder_data", realStateData.builder_data);
    realFormData.append("annual_rental", realStateData.annual_rental);
    realFormData.append(
      "construction_interest",
      realStateData.construction_interest
    );
    realFormData.append("annual_expenditure", realStateData.annual_expenditure);
    realFormData.append(
      "annual_net_profit",
      Number(realStateData.annual_rental) -
        Number(realStateData.annual_expenditure)
    );
    realFormData.append("net_leasing", realStateData.net_leasing);
    realFormData.append("plusvalia", realStateData.plusvalia);
    realFormData.append("address_id", nftAddress);
    realFormData.append("zone_malls", JSON.stringify(malls.zone_malls));
    realFormData.append("zone_markets", JSON.stringify(supermarkets.zone_markets));
    realFormData.append("zone_parks", JSON.stringify(parks.zone_parks));
    realFormData.append("zone_subway",JSON.stringify(metrovia.zone_subway));
    // create project
    createNewRealState(realFormData)
      .then((res) => {
        console.log(res);
        cleanData();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setFeedbackInformativeData({
          open: true,
          text: "Error al crear el proyecto por favor intentelo nuevamente",
          success: false,
        });
      });
  };
  useEffect(() => {
    verifyFeaturedAvailable().then((res) => {
      res.data.lot < 6 && setFeaturedAvailable(true);
    });
    setUserRol(Number(JSON.parse(localStorage.getItem("userInfo")).rol));
  }, []);

  return (
    <div>
      {loading && (
        <div
          className="mx-auto flex fixed left-0 right-0 justify-center items-center h-full top-0 bottom-0
             z-50 bg-black/20"
        >
          <Loader size={60} />
        </div>
      )}
      <div className="border-b pb-7 flex justify-between items-center">
        <div>
          <h2 className="text-2xl text-purple-dark font-bold">
            Postea tu anuncio
          </h2>
          <p>
            Ingresa la información y demás datos correctamente para publicar tu
            anuncio con éxito
          </p>
        </div>
        {/** toggle button destacado */}
        {userRol !== 1 && (
          <div>
            <BtnToggleSwitch
              disabled={!featuredAvailable}
              text="Destacado"
              name="featured"
              onChange={(e) => setFeatured(e.target.checked)}
              value={featured}
            />
          </div>
        )}
      </div>
      {/** Algunos detalles */}
      <div className="mt-7">
        <h2 className="text-xl text-purple-dark font-bold mb-5">
          Incluye algunos detalles
        </h2>
        <div className="grid grid-cols-3 gap-5">
          <SelectWithoutType
            label="Pais"
            name="country"
            value={realStateData.country ?? ""}
            data={countriesData}
            onChange={(e) => handleOnChangeInputs(e)}
            disabled={userRol === 1}
          />
          <Select
            label="Ciudad"
            name="city"
            data={testCities}
            value={realStateData.city ?? ""}
            onChange={(e) => handleOnChangeInputs(e)}
            disabled={userRol === 1}
          />
          <Select
            label="Tipo"
            name="type"
            value={realStateData.type ?? ""}
            data={types}
            onChange={(e) => handleOnChangeInputs(e)}
            disabled={userRol === 1}
          />
        </div>
      </div>
      {/** Datos del proyecto */}
      <div className="mt-7">
        <h2 className="text-xl text-purple-dark font-bold mb-5">
          Datos del producto
        </h2>
        <div className="grid grid-cols-3 gap-5">
          <Input
            label="Nombre"
            name="name"
            value={realStateData.name ?? ""}
            onChange={(e) => handleOnChangeInputs(e)}
            disabled={contratCreated || userRol === 1}
            required
          />
          <Input
            type="number"
            label="Precio edificio"
            value={realStateData.building_price ?? ""}
            name="building_price"
            onChange={(e) => handleOnChangeInputs(e)}
            disabled={contratCreated || userRol === 1}
          />
          <Input
            type="number"
            label="Precio Token"
            name="token_price"
            value={realStateData.token_price ?? ""}
            onChange={(e) => handleOnChangeInputs(e)}
            disabled={contratCreated || userRol === 1}
          />
          <Input
            type="number"
            label="Tokens emitidos"
            value={realStateData.building_price / realStateData.token_price}
            name="tokens_emitted"
            onChange={(e) => handleOnChangeInputs(e)}
            disabled={true}
          />
          <Input
            type="number"
            label="Tokens disponibles"
            name="tokens_available"
            value={realStateData.building_price / realStateData.token_price}
            onChange={(e) => handleOnChangeInputs(e)}
            disabled={true}
          />
          <Input
            label="Dirección"
            name="address"
            value={realStateData.address ?? ""}
            onChange={(e) => handleOnChangeInputs(e)}
            disabled={userRol === 1}
          />
        </div>
      </div>
      {/** Algunos detalles */}
      <div className="mt-7">
        <h2 className="text-xl text-purple-dark font-bold">
          Fotos del producto
        </h2>
        <p>Sube 5 fotos. Aquellas saldrán en tu anuncio de Ebloqs</p>
        <p className="text-sm">Imagen principal del proyecto 342 x 256</p>
        <p className="text-sm">Imagen destacada del proyecto 636 x 324</p>
        <p className="text-sm">Imagen del proyecto 752 x 890</p>
        <div className="grid grid-cols-10 gap-5 mt-5">
          <div className="col-span-5 w-full">
            <UploadImage
              leyenda="Imagen principal 342 x 256"
              name="primary_img"
              value={realStateData.primary_img}
              onChange={(e) => handleOnChangeImages(e)}
              disabled={contratCreated || userRol === 1}
            />
          </div>
          <div className="col-span-5 w-full">
            <UploadImage
              name="featured_img"
              leyenda="Imagen destacada 636x324px"
              value={realStateData.featured_img}
              onChange={(e) => handleOnChangeImages(e)}
              disabled={userRol === 1}
            />
          </div>
          <div className="col-span-2">
            <UploadImage
              name="pic1"
              leyenda="Imagen del proyecto 752x890"
              value={realStateData.pic1}
              onChange={(e) => handleOnChangeImages(e)}
              disabled={contratCreated || userRol === 1}
            />
          </div>
          <div className="col-span-2">
            <UploadImage
              name="pic2"
              leyenda="Imagen del proyecto 752x890"
              value={realStateData.pic2}
              onChange={(e) => handleOnChangeImages(e)}
              disabled={userRol === 1}
            />
          </div>
          <div className="col-span-2">
            <UploadImage
              name="pic3"
              leyenda="Imagen del proyecto 752x890"
              value={realStateData.pic3}
              onChange={(e) => handleOnChangeImages(e)}
              disabled={userRol === 1}
            />
          </div>
          <div className="col-span-2">
            <UploadImage
              name="pic4"
              leyenda="Imagen del proyecto 752x890"
              value={realStateData.pic4}
              onChange={(e) => handleOnChangeImages(e)}
              disabled={userRol === 1}
            />
          </div>
          <div className="col-span-2">
            <UploadImage
              name="pic5"
              leyenda="Imagen del proyecto 752x890"
              value={realStateData.pic5}
              onChange={(e) => handleOnChangeImages(e)}
              disabled={userRol === 1}
            />
          </div>
        </div>
      </div>
      {/** Datos del proyecto */}
      <div className="mt-7">
        <h2 className="text-xl text-purple-dark font-bold mb-5">
          Datos del proyecto
        </h2>
        <div className="grid grid-cols-2 gap-5">
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-purple-semi-light rounded-md px-5 py-1 flex items-center">
              <Image src="/images/apartment.png" width={28} height={29} />
              <p className="ml-2">Tipo de proyecto</p>
            </div>
            <Input
              label="Edificio superficie (m2)"
              name="surface_building"
              value={realStateData.surface_building ?? ""}
              onChange={(e) => handleOnChangeInputs(e)}
              disabled={userRol === 1}
            />
            <Input
              label="No. departamentos"
              name="number_departaments"
              value={realStateData.number_departaments ?? ""}
              onChange={(e) => handleOnChangeInputs(e)}
              disabled={userRol === 1}
            />
            <Input
              label="Número amenidades"
              name="number_amenities"
              value={realStateData.number_amenities ?? ""}
              onChange={(e) => handleOnChangeInputs(e)}
              disabled={userRol === 1}
            />
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-purple-semi-light rounded-md px-5 py-1 flex items-center">
              <Image src="/images/validation.png" width={28} height={29} />
              <p className="ml-2">Validación</p>
            </div>
            <Input
              label="Fideicomiso"
              name="escrow"
              value={realStateData.escrow ?? ""}
              onChange={(e) => handleOnChangeInputs(e)}
              disabled={userRol === 1}
            />
            <Input
              label="Planos aprobados"
              name="approved_plans"
              value={realStateData.approved_plans ?? ""}
              onChange={(e) => handleOnChangeInputs(e)}
              disabled={userRol === 1}
            />
            <Input
              label="Lic. de construcción"
              name="construction_license"
              value={realStateData.construction_license ?? ""}
              onChange={(e) => handleOnChangeInputs(e)}
              disabled={userRol === 1}
            />
          </div>
        </div>
      </div>
      {/** Tokenomics del proyecto */}
      <div className="mt-7">
        <h2 className="text-xl text-purple-dark font-bold mb-5">
          Tokenomics del proyecto
        </h2>
        <div className="grid grid-cols-2 gap-5 items-start">
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-purple-semi-light rounded-md px-5 py-1 flex items-center">
              <Image src="/images/house.png" width={28} height={29} />
              <p className="ml-2">Alquiler</p>
            </div>
            <Input
              label="Renting anual"
              name="annual_rental"
              value={realStateData.annual_rental ?? ""}
              onChange={(e) => handleOnChangeInputs(e)}
              disabled={userRol === 1}
            />
            <Input
              label="Gasto anual"
              name="annual_expenditure"
              value={realStateData.annual_expenditure ?? ""}
              onChange={(e) => handleOnChangeInputs(e)}
              disabled={userRol === 1}
            />
            <Input
              label="Beneficio neto anual"
              name="annual_net_profit"
              value={
                realStateData.annual_rental && realStateData.annual_expenditure
                  ? realStateData.annual_rental -
                    realStateData.annual_expenditure
                  : ""
              }
              onChange={(e) => handleOnChangeInputs(e)}
              disabled={true}
            />
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-purple-semi-light rounded-md px-5 py-1 flex items-center">
              <Image src="/images/money.png" width={28} height={29} />
              <p className="ml-2">Rentabilidad</p>
            </div>
            <Input
              label="Interés construccion (1 año)"
              name="construction_interest"
              value={realStateData.construction_interest ?? ""}
              onChange={(e) => handleOnChangeInputs(e)}
              disabled={userRol === 1}
            />
            <Input
              label="Renting neto (2 años)"
              name="net_leasing"
              value={realStateData.net_leasing ?? ""}
              onChange={(e) => handleOnChangeInputs(e)}
              disabled={userRol === 1}
            />
            <Input
              label="Plusvalía (3 años)"
              name="plusvalia"
              value={realStateData.plusvalia ?? ""}
              onChange={(e) => handleOnChangeInputs(e)}
              disabled={userRol === 1}
            />
            <Input
              label="Neto (3 años)"
              name="net"
              value={
                realStateData.construction_interest &&
                realStateData.net_leasing &&
                realStateData.plusvalia
                  ? Number(realStateData.construction_interest) +
                    Number(realStateData.net_leasing) +
                    Number(realStateData.plusvalia)
                  : ""
              }
              onChange={(e) => handleOnChangeInputs(e)}
              disabled={true}
            />
          </div>
        </div>
      </div>
      {/**Description de la azona */}
      <div className="mt-7">
        <h2 className="text-xl text-purple-dark font-bold mb-5">
          Descripción de la zona
        </h2>
        <div className="grid grid-cols-2 gap-5 items-start">
          {/** 1 */}
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-purple-semi-light rounded-md px-5 py-1 flex items-center">
              <Image src="/images/apartment.png" width={28} height={29} />
              <p className="ml-2">Centros comerciales</p>
            </div>
            {malls?.zone_malls?.map((item, idx) => {
              return (
                <input
                  key={idx}
                  value={item}
                  onChange={(e) => handlAddMallOnChange(e, idx)}
                  className="border px-3 rounded h-12 focus-within:outline-none"
                  disabled={userRol === 1}
                />
              );
            })}
            <ButonAddAnother
              onClick={() => handleAddAnotherMall()}
              disabled={userRol === 1}
            />
          </div>
          {/** 2 */}
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-purple-semi-light rounded-md px-5 py-1 flex items-center">
              <Image src="/images/shop.png" width={28} height={29} />
              <p className="ml-2">Supermercados</p>
            </div>
            {supermarkets.zone_markets?.map((item, idx) => {
              return (
                <input
                  key={idx}
                  value={item}
                  onChange={(e) => handlAddMarketOnChange(e, idx)}
                  className="border px-3 rounded h-12 focus-within:outline-none"
                  disabled={userRol === 1}
                />
              );
            })}
            <ButonAddAnother
              onClick={() => handleAddAnotherZone()}
              disabled={userRol === 1}
            />
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-purple-semi-light rounded-md px-5 py-1 flex items-center">
              <Image src="/images/tree.png" width={28} height={29} />
              <p className="ml-2">Parques</p>
            </div>
            {parks.zone_parks?.map((item, idx) => {
              return (
                <input
                  onChange={(e) => handlAddParkOnChange(e, idx)}
                  value={item}
                  key={idx}
                  className="border px-3 rounded h-12 focus-within:outline-none"
                  disabled={userRol === 1}
                />
              );
            })}
            <ButonAddAnother
              onClick={() => handleAddAnotherPark()}
              disabled={userRol === 1}
            />
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-purple-semi-light rounded-md px-5 py-1 flex items-center">
              <Image src="/images/shop.png" width={28} height={29} />
              <p className="ml-2">Metrov&iacute;a</p>
            </div>
            {metrovia.zone_subway?.map((item, idx) => {
              return (
                <input
                  key={idx}
                  value={item}
                  onChange={(e) => handlAddSubwayOnChange(e, idx)}
                  className="border px-3 rounded h-12 focus-within:outline-none"
                  disabled={userRol === 1}
                />
              );
            })}
            <ButonAddAnother
              onClick={() => handleAddAnotherMetrovia()}
              disabled={userRol === 1}
            />
          </div>
        </div>
      </div>
      {/**Datos del constructor */}
      <div className="mt-7">
        <h2 className="text-xl text-purple-dark font-bold mb-5">
          Datos del constructor
        </h2>
        <p>Escribe algunos datos sobre el constructor</p>
        <textarea
          className="w-full border rounded p-5 focus-visible:outline-none h-32"
          value={realStateData.builder_data ?? ""}
          maxLength={450}
          name="builder_data"
          onChange={(e) => handleOnChangeInputs(e)}
          disabled={userRol === 1}
        />
      </div>
      <div className="w-64 mx-auto my-5">
        {userRol !== 1 &&
          (!contratCreated ? (
            <ButtonBlueGradient
              text="Crear contrato"
              onClick={(e) => handlCreateContrat(e)}
            />
          ) : (
            <ButtonBlueGradient
              text="Publicar"
              onClick={(e) => handlePublicRealState(e)}
            />
          ))}
      </div>
      {feedbackInformativeData.open && <InformativeFeedback />}
    </div>
  );
}
