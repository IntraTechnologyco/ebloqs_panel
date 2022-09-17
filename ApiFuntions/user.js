import axios from "axios"
import { apiUrl } from "../varGlobals"

/** GET USER DATA BY USER ID */
export const getUserDataByUserId=(userId)=>{
    return new Promise((resolve, reject) => {  
        axios.get(`${apiUrl}/user/dataOfUser/${userId}`,{
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
/** CHANGE USER STATUS */
export const changeUserStatus=(data)=>{
    return new Promise((resolve, reject) => {  
        axios.post(`${apiUrl}/user/status`,data,{
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
