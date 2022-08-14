<script>
    export let placeholder = '';
    export let label = '';
    export let name = '';
    export let type = '';
    export let errorText = '';
</script>

<div class="input-ctn">
    <input 
        placeholder={placeholder}
        class="container__input" 
        name={name}
        type={type}
    />
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="container__label">{label}</label>
    <span class="err-span">{errorText}</span>
</div>


<style>
    .input-ctn {
        position: relative;
        margin: 10px 0px;
    }

    .container__input {
        width: calc(100% - 1.1em);
        height: 2em;
        border-radius: 5px;
        padding: 0.25em 0.5em;
        border: 1px solid #CDCCD1;
        font-size: 1em;
        font-family: 'Archivo';
        font-style: normal;
        font-weight: 400;
    }

    .container__input:not(:placeholder-shown) + .container__label {
        background: #fff;
        transform: translate(0, -70%);
        opacity: 1;
        border: none;
    }

    .container__label {
        left: 3px;
        position: absolute;
        top: -12px;
        font-family: 'Archivo';
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        color: var(--dark-blue);
        line-height: 18px;
        /* Hide it by default */
        opacity: 0;
        transition: all 200ms;
    }

    .err-span{
        position: absolute;
        left: 5px;
        font-size: 0.8em;
        color: #FF3D3E;
    }
</style>