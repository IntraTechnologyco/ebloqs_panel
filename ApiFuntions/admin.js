import axios from "axios";
import { apiUrl } from "../varGlobals";

/**  REGISTER NEW ADMIN USER */
export const registerNewAdminUser=async(data)=>{
      return await axios.post(`${apiUrl}/auth/admin/register`,data,{
            headers: {
                Authorization : `Bearer ${localStorage.getItem("access_token")}`
                }
        })
}
/**  GET ALL ADMIN USERS */
export const getAdminUsers=async()=>{
    return await axios.get(`${apiUrl}/admins/users`,{
          headers: {
              Authorization : `Bearer ${localStorage.getItem("access_token")}`
              }
      })
}
/** UPDATE ADMIN USER */
export const updateAdminUser=async(data)=>{
    return await axios.post(`${apiUrl}/admins/update`,data,{
          headers: {
              Authorization : `Bearer ${localStorage.getItem("access_token")}`
              }
      })
}
/** DELETE ADMIN USER */
export const deleteAdminUser=async(id)=>{
      return await axios.post(`${apiUrl}/admins/delete`,{id},{
            headers: {
                Authorization : `Bearer ${localStorage.getItem("access_token")}`
                }
        })
}
/** CHANGE ADMIN USER STATUS */
export const changeAdminUserStatus=async(id)=>{
      return await axios.post(`${apiUrl}/admins/status`,{id},{
            headers: {
                Authorization : `Bearer ${localStorage.getItem("access_token")}`
                }
        })
}