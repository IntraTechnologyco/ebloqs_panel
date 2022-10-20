import axios from "axios"
import {apiUrl} from "../varGlobals"
/** LOGIN */
export const loginAdmin=(data)=>{
    return new Promise((resolve, reject) => {  
        axios.post(`${apiUrl}/auth/admin/login`,data)
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
