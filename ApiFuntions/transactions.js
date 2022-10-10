import axios from "axios"
import { apiUrl } from "../varGlobals"

export const getPayments=async()=>{
    const response = await axios.get(`${apiUrl}/transactions/getAll`,{
        headers: {
            Authorization : `Bearer ${localStorage.getItem("access_token")}`
        }})
        return response
}
// GET TRASACTIONS BY TYPE
export const getTransactionsByType=async(type)=>{
    const response = await axios.post(`${apiUrl}/transactions/type`,{type},{
        headers: {
            Authorization : `Bearer ${localStorage.getItem("access_token")}`
        }})
        return response
}
// GET TRASACTIONS BALANCES
export const getTransactionBalances=async()=>{
    const response = await axios.get(`${apiUrl}/transactions/balances`,{
           headers: {
               Authorization : `Bearer ${localStorage.getItem("access_token")}`
               }
       })
       return response
}

export const updateTransactionStatus=async(data)=>{
    const response = await axios.post(`${apiUrl}/transactions/status`,data,{
        headers: {
            Authorization : `Bearer ${localStorage.getItem("access_token")}`
        }})
        console.log(response)
        return response
}

//PAID OUT TRANSFER TO BLOCKCHAIN
export const confirmBlockchainTransfer=async(to,amount)=>{
    const response = await axios.post(`$https://ebloqs-hub-blockchain.herokuapp.com/api/token/Transfer?to=${to}&amount=${amount}`,null,{
        headers: {
            Authorization : `Bearer ${localStorage.getItem("access_token")}`
        }})
        console.log(response)
        return response
}