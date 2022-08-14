import { baseUrl } from "./api.service";

async function getallUsers() {
    var response = await fetch(`${baseUrl}/user/all`,{ 
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });

    return response;
}


function exportCostService() {

    return {
        getallUsers
    }
}

export let constService = exportCostService();