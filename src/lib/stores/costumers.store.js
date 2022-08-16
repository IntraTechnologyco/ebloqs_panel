import { writable } from "svelte/store";
import { constService } from "../services/costumers.service";

let listCostumers = writable([]);
let listFilterCostumers = writable([]);
let allCostumers;

let isLoading = writable(true);

async function getCostumer() {
    isLoading.update(va => va = true);
    const response = await constService.getallUsers();
    if(response.status == 200) {
        const list = await response.json();
        listCostumers.update(m => m = list);
        isLoading.update(va => va = false);
    }
}

async function filterCostumers(searchText) {
    listFilterCostumers.update(va => va = []);
    isLoading.update(va => va = true);
    const response = await constService.search(searchText);
    
    if(response.status == 201) {
        const listConstumersFilters = await response.json();
        listFilterCostumers.update(va => va = listConstumersFilters);
        isLoading.update(va => va = false);
    }
}


function exportCostStore() {
    return {
        getCostumer,
        listCostumers,
        listFilterCostumers,
        filterCostumers,
        isLoading
    }
}

export let costStore = exportCostStore()