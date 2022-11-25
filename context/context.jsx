import { createContext, useState, useContext } from "react";

const Context = createContext("");
export const useCtx = () => useContext(Context);
export const CtxProvider = ({ children }) => {
  // realState
  const [realStateData, setRealStateData] = useState({});
  const [ nftAddress, setNftAddress ] = useState("")
  const [ malls, setMalls ] = useState({zone_malls:[]})
  const [ parks, setParks ] = useState({zone_parks:[]})
  const [ metrovia, setMetrovia ] = useState({zone_subway:[]})
  const [ supermarkets, setSupermarkets ] = useState({zone_markets:[]})
  const [ contratCreated, setContratCreated ] = useState(false)
  const [ featured, setFeatured ] = useState(false)
  // feedback modal 
  const [ feedbackInformativeData, setFeedbackInformativeData ] = useState({ open:false, text:"", success: true })



  return (
    //@ts-ignore
    <Context.Provider value={{ realStateData, setRealStateData, nftAddress, setNftAddress, malls, setMalls, parks, setParks, metrovia, setMetrovia, supermarkets, setSupermarkets, contratCreated, setContratCreated, featured, setFeatured, feedbackInformativeData, setFeedbackInformativeData }}>
      {children}
    </Context.Provider>
  );
};