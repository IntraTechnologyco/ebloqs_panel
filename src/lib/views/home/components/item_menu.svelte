<script>
    import { nav } from '../../../stores/navbar.store';
    export let icon;
    export let item;
    export let slected;

    export let selectap;


    let isOpen;

    nav.isOpenMenu.subscribe(v => {
        isOpen = v;
    })


</script>


<li class={!slected ? "item-ctn" : "item-ctn-active"} on:click={selectap()}>
    <img src={icon} alt="icon-menu" class={!slected ? "icon-menu" : "icon-active"}/>
    {#if isOpen}
        <span>{item}</span> 
    {/if}
</li>


<style>
    .item-ctn {
        display: flex;
        justify-content: start;
        align-items: center;
        align-self: center;
        text-align: start;
        padding: 10px 8px;
        margin-bottom: 10px;
        border-radius: 5px;
    }

    .item-ctn:hover {
        background-color: rgba(255, 255, 255, 0.158);
        cursor: pointer;
    }

    .item-ctn-active {
        display: flex;
        justify-content: start;
        align-items: center;
        align-self: center;
        text-align: start;
        padding: 10px 8px;
        margin-bottom: 10px;
        border-radius: 10px;
        background-color: rgb(255, 255, 255);
        color: var(--dark-blue);
    }
    
    .item-ctn span {
        font-size: 0.9em;
        font-weight: 600;
        cursor: pointer;
    }
    
    .icon-active {
        width: 23px;
        height: 23px;
        padding: 0px 4px;
        filter: var(--filter-dark-blue);
    }   
     
    .icon-menu {
        width: 23px;
        height: 23px;
        padding: 0px 4px;
        filter: var(--filter-withe);
    }



</style>