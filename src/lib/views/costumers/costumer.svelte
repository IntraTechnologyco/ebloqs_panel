<script>

import { onMount } from "svelte";
import { fly } from 'svelte/transition';
import { elasticOut } from 'svelte/easing';
import { costStore } from "../../stores/costumers.store";
import InputSearch from "../../components/input_search.svelte";
import CostumerItemlist from "../home/components/costumer_itemlist.svelte";



let listCostumersAPI;
let listCostumersFILTERAPI;

let filteText = '';
costStore.listCostumers.subscribe(n => {
    listCostumersAPI = n;
});

costStore.listFilterCostumers.subscribe(va => {
    listCostumersFILTERAPI = va;
});

async function onChangeDetector() {
    filteText = document.querySelector('input').value;
    await costStore.filterCostumers(filteText);

    console.log(listCostumersFILTERAPI.length)
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
            {#if filteText.length <= 0}
                {#each listCostumersAPI as api}
                    <CostumerItemlist
                        title={api['title'].toUpperCase()}
                        users={api['emails']}
                        
                    />
                {/each}
                {:else}
                {#each listCostumersFILTERAPI as api2}
                    <CostumerItemlist
                        title={api2['title'].toUpperCase()}
                        users={api2['emails']}
                    />
                {/each}
            
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