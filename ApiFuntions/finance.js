import axios from "axios"
import { apiUrl } from "../varGlobals"

export const getBalance=async()=>{
     const response = await axios.post(`${apiUrl}/wallet/balance`,null,{
            headers: {
                Authorization : `Bearer ${localStorage.getItem("access_token")}`
                }
        })
        return response
}