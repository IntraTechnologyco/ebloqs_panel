import axios from "axios"
import {apiUrl} from "../varGlobals"
/** get totalSupplyTokens */
export const getTotalSupplyTokens=()=>{

    const response = axios.post(`${apiUrl}/wallet/totalSupply`,null,{
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