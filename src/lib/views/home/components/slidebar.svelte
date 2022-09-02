<script>
import { nav } from '../../../stores/navbar.store';
import { fly } from 'svelte/transition';

    import Logowithe from '../../../../assets/blacklogo.svg'
    import OnlyLogo from '../../../../assets/onlylogo.svg'
    import CostumersIcon from '../../../../assets/usericon.svg'
    import ProyectIcon from '../../../../assets/proyectsicon.svg'
    import CryptoIcon from '../../../../assets/cryptoicon.svg'
    import FinanceIcon from '../../../../assets/financeicon.svg'
    import AuthIcon from '../../../../assets/authicon.svg'
    import LogoutIcon from '../../../../assets/logout.svg'
    import ItemMenu from './item_menu.svelte'
    import { admin } from '../../../stores/auth.store';

    let indexPage;
    let isOpen;

    nav.isOpenMenu.subscribe(v => {
        isOpen = v;
    })

    nav.indexPage.subscribe(value => {
        indexPage = value;
    })


</script>


<div class={ !isOpen ? "slideBar-ctn" : "slideBar-ctn-active"}>

    {#if isOpen}
        <img src={Logowithe} alt='logo-ebloqs' on:click={()=>{nav.selectIndex(0)}} out:fly='{{ x: -15 , duration: 40 }}'/>
        {:else}
        <img src={OnlyLogo} alt='logo-ebloqs' on:click={()=>{nav.selectIndex(0)}} in:fly='{{ y: 5 , delay: 300 }}'/>
    {/if}
    <div>
        <br>
        <ul>
           <ItemMenu
            icon={CostumersIcon}
            item='Customers'
            selectap={()=>{nav.selectIndex(1)}}
            slected={indexPage === 1 || indexPage === 6}
           />
           <ItemMenu
            icon={ProyectIcon}
            item='Proyects'
            slected={indexPage === 2}
            selectap={()=>{nav.selectIndex(2)}}
           />
           <ItemMenu
            icon={CryptoIcon}
            item='Tokens'
            selectap={()=>{nav.selectIndex(3)}}
            slected={indexPage === 3}
           />
           <ItemMenu
            icon={FinanceIcon}
            item='Finance'
            selectap={()=> nav.selectIndex(4)}
            slected={indexPage === 4}
           />
           <ItemMenu
            icon={AuthIcon}
            item='Authentication'
            selectap={()=>{nav.selectIndex(5)}}
            slected={indexPage === 5}
           />
        <div class="line"></div>
        <ItemMenu
            icon={LogoutIcon}
            item='Salir'
            selectap={()=>{admin.logout()}}
            slected={false}
           />
        </ul>
    </div>
</div>

<style>
    .slideBar-ctn {
        flex: 0;
        width: 3.4em;
        height: calc(100vh - 2em);
        background-color: var(--dark-blue);
        color: var(--withe-primary);
        padding: 1em 0.5em;
        transition: all .2s ease-in-out; 
        text-align: center;
    }
    
    .slideBar-ctn-active {
        height: calc(100vh - 2em);
        background-color: var(--dark-blue);
        flex: 1;
        color: var(--withe-primary);
        padding: 1em 1.5em;
        transition: all .2s ease-out; 
    }

    ul {
        list-style: none;
        margin: 0 auto;
        padding: 0;
    }

    .line {
        border: 1px solid #412F87;
        background-color: var(--withe-primary);
    }

</style>