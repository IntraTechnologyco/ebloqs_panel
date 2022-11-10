import axios from "axios"
import { apiUrl, apiUrlBlockchain } from "../varGlobals"

export const createContrat=async(data)=>{
    const response = await axios.post(`${apiUrlBlockchain}/nft/mint`,data)
    return response
}
export const createNewRealState=async(data)=>{
    const response = await axios.post(`${apiUrl}/proyects/new`,data,{
        headers: {
            Authorization : `Bearer ${localStorage.getItem("access_token")}`
        }})
    return response
}