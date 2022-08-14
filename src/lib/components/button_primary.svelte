<script>
    export let text = '';
    export let load = false;
</script>

{#if load}
    <button class="loaded">
        Espere un momento
    </button>
{:else}
<button>
    {text}
</button>
{/if}


<style>
    button {
        width: 100%;
        background: conic-gradient(from 90.56deg at 51.42% 62.5%, #1B1B7C 0deg, #245FB1 98.17deg, #481CAE 275.62deg, #1616B6 343.12deg, #1B1B7C 360deg);
        border: none;
        border-radius: 5px;
        color: var(--withe-primary);
        font-weight: bold;
        font-size: 1rem;
        text-align: center;
        cursor: pointer;
        font-family: 'Archivo';
        padding: 0.8em 0em;
    }
    
    button:active {
        transform: translateY(2px);
    }

    .loaded {
        background: var(--light-purple2);
        color: #c1c0c5;
    }
</style>