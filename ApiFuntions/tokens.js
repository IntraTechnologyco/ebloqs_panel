import axios from "axios"
import {apiUrl, apiUrlBlockchain} from "../varGlobals"
/** get totalSupplyTokens */
export const getTotalSupplyTokens=()=>{

    const response = axios.get(`${apiUrlBlockchain}/token/TotalSupply`,{
        headers: {
            Authorization : `Bearer ${localStorage.getItem("access_token")}`,
            referrerPolicy: "unsafe_url"
            }
    })
    return response
}
//get tokens availables
export const getAvailableTokens=()=>{

    const response = axios.get(`${apiUrlBlockchain}/token/Available`,{
        headers: {
            Authorization : `Bearer ${localStorage.getItem("access_token")}`,
            referrerPolicy: "unsafe_url"
            }
    })
    return response
}
//update tokens availables
export const updateTokenPreventa=(data)=>{

    const response = axios.post(`${apiUrl}/tokens/update`,data,{
        headers: {
            Authorization : `Bearer ${localStorage.getItem("access_token")}`
            }
    })
    return response
}
//get token data
export const getTokenData=async()=>{
    
   const response= await axios.get(`${apiUrl}/tokens/get`,{
        headers: {
            Authorization : `Bearer ${localStorage.getItem("access_token")}`
            }
    })
    return response.data
}