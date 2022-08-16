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


async function search(text) {
    var response = await fetch(`${baseUrl}/clients/search/${text}`,{ 
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    
    return response;

}


function exportCostService() {

    return {
        getallUsers,
        search
    }
}

export let constService = exportCostService();