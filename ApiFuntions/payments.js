import axios from "axios"
import { apiUrl } from "../varGlobals"

export const getPayments=async()=>{
    const response = await axios.get(`${apiUrl}/transactions/getAll`,{
        headers: {
            Authorization : `Bearer ${localStorage.getItem("access_token")}`
        }})
        return response
}