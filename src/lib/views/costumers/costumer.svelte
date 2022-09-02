<script>

import { onMount } from "svelte";
import { fly } from 'svelte/transition';
import { elasticOut } from 'svelte/easing';
import { costStore } from "../../stores/costumers.store";
import InputSearch from "../../components/input_search.svelte";
import CostumerItemlist from "./components/costumer_itemlist.svelte";



let listCostumersAPI;
let listCostumersFILTERAPI;

let isLoading = false;

costStore.isLoading.subscribe(n => isLoading = n)

let filteText = '';
costStore.listCostumers.subscribe(n => {
    listCostumersAPI = n;
});

costStore.listFilterCostumers.subscribe(va => {
    listCostumersFILTERAPI = va;
});

async function onChangeDetector() {
    filteText = document.querySelector('input').value.toLowerCase();
    if(filteText.length != 0) {
        await costStore.filterCostumers(filteText);
    } else {
        listCostumersFILTERAPI = [];
    }

}

async function searchWithTitles(title) {
    await costStore.filterCostumers(title);
    document.querySelector('input').value = title;
}


onMount(()=> {
    costStore.getCostumer();
})

</script>
<div class="costumer-ctn">
    <div class="costumer_panel">
        <div class="panel_head" in:fly='{{ y: 3 , delay: 200 }}'>
            <h1 class="title-primary">Clientes</h1>
            <!-- svelte-ignore missing-declaration -->
            <InputSearch
                placeholder='Cliente'
                name='cliente'
                type='email'
                onChangeFun={()=>{onChangeDetector()}}
            ></InputSearch>
        </div>
        <div class="panel_list" in:fly='{{ y: 3 , delay: 400 }}'>
            {#if isLoading}
                <h4>Cargando clientes</h4>
                {:else}
                {#if listCostumersFILTERAPI.length == 0}
                    {#each listCostumersAPI as api}
                        <CostumerItemlist
                            title={api['title'].toUpperCase()}
                            users={api['names']}
                            searchAllTitle= {() => {searchWithTitles(api['title'])}}
                        />
                    {/each}
                    {:else}
                    {#each listCostumersFILTERAPI as api2}
                        <CostumerItemlist
                            title={api2['title'].toUpperCase()}
                            users={api2['names']}
                            searchAllTitle= {() => {searchWithTitles(api2['title'])}}
                        />
                    {/each}
                
                {/if}

            {/if}
        </div>
    </div>
</div>

<style>

    .costumer-ctn {
        height: calc(100vh - 4.5em);
        width: 100%;
        margin: 0;
        justify-content: center;
        align-self: center;
        text-align: center;
        overflow: scroll;
        display: flex;

    }

    .costumer_panel{
        width: 80%;
        max-width: 42em;
    }


    .panel_head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px;
    }

    .panel_list{
        max-height: calc(100vh - 30%);
        background: #FFFFFF;
        border: 1px solid #EAE4FC;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
        padding: 20px 30px;
        text-align: left;
        overflow: scroll;
        scroll-behavior: smooth;
    }

</style>