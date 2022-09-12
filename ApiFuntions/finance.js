import axios from "axios"
import { apiUrl } from "../varGlobals"

export const getBalance=()=>{
    return new Promise((resolve,reject)=>{
        axios.get(`${apiUrl}/wallet/balance`,{
            headers: {
                Authorization : `Bearer ${localStorage.getItem("access_token")}`
                }
        })
        .then((res)=>{
            console.log(res)
           resolve(res);  
        })
        .catch((err)=>{
            console.log(err)
            reject(err);  
        })

    })
}