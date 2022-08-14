<script>
import { nav } from '../../../stores/navbar.store';

    import MenuIcon from '../../../../assets/menuicon.svg'
    import ProfileEje from '../../../../assets/profile1.png'
    import InputSearch from '../../../components/input_search.svelte';
    
    let page2;

    nav.indexPage.subscribe(val =>{
        page2 = val ;
    })

</script>

<div class="header-ctn">
    <img src={MenuIcon} alt='logo-ebloqs' on:click="{()=>{nav.isOpen()}}"/>
    <div class="actions-head">
        {#if page2 !== 1}
            <InputSearch
                placeholder='Cliente'
                name='cliente'
                type='email'
            ></InputSearch>
        {/if}
        <img src={ProfileEje} class="profile-img" alt="profile-user"/>
        <span>Hola, Aldo</span>
    </div>
</div>

<style>
    .header-ctn{
        flex: 2;
        background-color: var(--light-purple3);
        border: none;
        border-bottom: 1px solid #EAE4FC;
        padding: 1em 40px;
        display: flex;
        justify-content: space-between;
    }

    .actions-head {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .profile-img {
        width: 35px;
        height: 35px;
        padding: 0px 10px;
    }




</style>