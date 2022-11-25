import axios from "axios";
import { apiUrl, apiUrlBlockchain } from "../varGlobals";

//create new smart contract
export const createContrat = async (data) => {
  const response = await axios.post(`${apiUrlBlockchain}/nft/mint`, data);
  return response;
};
//create new real state project
export const createNewRealState = async (data) => {
  const response = await axios.post(`${apiUrl}/proyects/new`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
  return response;
};
//verify if fueatured is available
export const verifyFeaturedAvailable = async () => {
  const response = await axios.get(`${apiUrl}/proyects/featured/lot`,{
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
  return response;
};
