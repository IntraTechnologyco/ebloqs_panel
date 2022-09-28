import axios from "axios"
import { apiUrl } from "../varGlobals"

export const getPayments=async()=>{
    const response = await axios.get(`${apiUrl}/transactions/getAll`,{
        headers: {
            Authorization : `Bearer ${localStorage.getItem("access_token")}`
        }})
        return response
}

export const updateTransactionStatus=async(data)=>{
    const response = await axios.post(`${apiUrl}/transactions/status`,data,{
        headers: {
            Authorization : `Bearer ${localStorage.getItem("access_token")}`
        }})
        console.log(response)
        return response
}