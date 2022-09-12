import axios from "axios"
import {apiUrl} from "../varGlobals"
/** LOGIN */
export const loginAdmin=(data)=>{
    return new Promise((resolve, reject) => {  
        axios.post(`${apiUrl}/auth/admin`,data)
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
/** SIGNUP */
export const signupAdmin=(data,callBack)=>{
    axios.post(`${apiUrl}/auth/register`,data)
    .then((res)=>{
        console.log(res)
       return callBack(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}