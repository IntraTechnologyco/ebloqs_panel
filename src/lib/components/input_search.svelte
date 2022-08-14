<script>
    import SearchIcon from '../../assets/searchicon.svg'

    export let placeholder = '';
    export let name = '';
    export let type = '';
    export let errorText = '';
    export let onChangeFun;
</script>

<div class="input-ctn">
    <input 
        placeholder={placeholder}
        class="container__input" 
        name={name}
        id="{name}"
        type={type}
        on:input="{()=> {onChangeFun()}}"
    />
    <img src={SearchIcon} alt='icon-search' class="icon-search"/>
    <span class="err-span">{errorText}</span>
</div>


<style>
    .input-ctn {
        position: relative;
        margin: 0px 0px;
    }

    .container__input {
        width: calc(100% - 1.1em);
        height: 1.2em;
        border-radius: 5px;
        padding: 0.25em 0.5em;
        border: 1px solid #CDCCD1;
        font-size: 1em;
        font-family: 'Archivo';
        font-style: normal;
        font-weight: 400;
    }

    .err-span{
        position: absolute;
        left: 5px;
        font-size: 0.8em;
        color: #FF3D3E;
    }

    .icon-search {
        position: absolute;
        right: 5px;
        top: 5px;
    }
</style>