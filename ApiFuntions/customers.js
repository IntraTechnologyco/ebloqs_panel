import axios from "axios"
import { apiUrl } from "../varGlobals"

/** GET CUSTOMERS BY LASTNAME */
export const getCustomersByLastname=(letter)=>{
    return new Promise((resolve, reject) => {  
        axios.post(`${apiUrl}/clients/search/${letter}`,{
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
/** GET ALL CUSTOMERS */
export const getAllCustomers=()=>{
    return new Promise((resolve, reject) => {  
        axios.get(`${apiUrl}/user/all`,{
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