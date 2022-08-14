import { writable } from "svelte/store";
import { constService } from "../services/costumers.service";

let listCostumers = writable([]);
let listFilterCostumers = writable([]);
let allCostumers;

async function getCostumer() {
    const response = await constService.getallUsers();

    if(response.status == 200) {
        const list = await response.json();
        allCostumers = list;
        let newListTitle = list.map((e) => {
            return e['email'][0].toLowerCase()
        })
        let newListEmails = list.map((e) => {
            return e['email'];
        })


        let listWithOutDuplicate = newListTitle.sort().filter((value, index) => {
            return newListTitle.indexOf(value) === index;
        })
        const costumersList = listWithOutDuplicate.map((e) => {
            let data = {
                title: e,
                emails: newListEmails.filter((r) => r[0] === e) 
            }
            
            return data;
        })

        listCostumers.update(n => n = costumersList)
    }
}

async function filterCostumers(searchText) {
    listFilterCostumers.update(va => va = []);
    const newFilter = allCostumers.filter((v) =>{
        var re = v['email'].includes(searchText);

        // console.log(v['email'].localeCompare(searchText))
        return re;
        
        
    })
    let newListTitle = newFilter.map((e) => {
        return e['email'][0].toLowerCase()
    })
    let newListEmails = newFilter.map((e) => {
        return e['email'];
    })

    let listWithOutDuplicate = newListTitle.sort().filter((value, index) => {
        return newListTitle.indexOf(value) === index;
    })

    const costumersFilterList = listWithOutDuplicate.map((e) => {
        let data = {
            title: e,
            emails: newListEmails.filter((r) => r[0] === e) 
        }
        
        return data;
    })
    listFilterCostumers.update(va => va = costumersFilterList);
}


function exportCostStore() {
    return {
        getCostumer,
        listCostumers,
        listFilterCostumers,
        filterCostumers,
    }
}

export let costStore = exportCostStore()