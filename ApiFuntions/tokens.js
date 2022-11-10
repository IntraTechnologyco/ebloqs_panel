import axios from "axios"
import {apiUrl, apiUrlBlockchain} from "../varGlobals"
/** get totalSupplyTokens */
export const getTotalSupplyTokens=()=>{

    const response = axios.get(`${apiUrlBlockchain}/token/Available`,{
        headers: {
            Authorization : `Bearer ${localStorage.getItem("access_token")}`
            }
    })
    return response
}
export const updateTokenPreventa=(data)=>{

    const response = axios.post(`${apiUrl}/tokens/update`,data,{
        headers: {
            Authorization : `Bearer ${localStorage.getItem("access_token")}`
            }
    })
    return response
}
export const getTokenData=async()=>{
    
   const response= await axios.get(`${apiUrl}/tokens/get`,{
        headers: {
            Authorization : `Bearer ${localStorage.getItem("access_token")}`
            }
    })
    return response.data
}