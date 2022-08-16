<script>
    export let title;
    export let users = [];
    
    export let searchAllTitle;
</script>

<div class="item-list-cost">
    <div class="title-item" on:click="{searchAllTitle()}">
        <h4>
            {title}
        </h4>
    </div>
    <div class="list_user">
        <ul>
            {#each users as use}
                <li>{use['name'].charAt(0).toUpperCase() + use['name'].slice(1)}</li>
            {/each}
        </ul>
    </div>
    <div class="line">

    </div>
</div>

<style>

    .item-list-cost{
        padding: 0.3em 0em;
    }

    .title-item {
        padding: 0.1em 2em;
        background-color: var(--light-purple2);
        border-radius: 5px;
    }
    
    .title-item h4 {
        margin: 0;
        font-family: 'Archivo';
        font-style: normal;
        font-weight: 600;
        font-size: 0.8;
        line-height: 20px;
        color: var(--dark-blue);
    }

    .list_user ul{
        list-style: none;
        margin: 0;
        padding: 0em 2em;
    }

    .list_user li{
        list-style: none;
        margin: 0;
        padding: .4em 0em;
    }

    .line {
        height: 1px;
        width: 100%;
        background-color: var(--light-purple);
    }
</style>