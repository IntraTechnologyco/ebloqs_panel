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
/** update rol */
export const updateUserRol=async(data)=>{
    return await axios.post(`${apiUrl}/admins/rol`,data,{
          headers: {
              Authorization : `Bearer ${localStorage.getItem("access_token")}`
              }
      })
}