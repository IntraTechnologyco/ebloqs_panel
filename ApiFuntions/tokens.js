import axios from "axios"
import {apiUrl} from "../varGlobals"
/** get totalSupplyTokens */
export const getTotalSupplyTokens=()=>{
    return new Promise((resolve, reject) => {  
        axios.post(`${apiUrl}/wallet/totalSupply`,null,{
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
    });
}