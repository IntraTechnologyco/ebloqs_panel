<script>
import Header from "./components/header.svelte";
import Slidebar from "./components/slidebar.svelte";
import Costumer from "../costumers/costumer.svelte";
import { nav } from "../../stores/navbar.store";
import Proyects from "../proyects/proyects.svelte";
import Crypto from "../crypto/crypto.svelte";
import Finance from "../finance/finance.svelte";
import Auth from "../authentication/auth.svelte";
import Feed from "./feed.svelte";
import ProfilePage from "../profiles/profile_page.svelte";

let indexPage;

nav.indexPage.subscribe(val =>{
    indexPage = val;
})

</script>

<div class="home-ctn">
    <Slidebar></Slidebar>
    <div class="conten-ctn">
        <Header></Header> 
        {#if indexPage == 0}
            <Feed/>
        {:else if indexPage == 1}
            <Costumer/>
        {:else if indexPage == 2}
            <Proyects/>
        {:else if indexPage == 3}
            <Crypto/> 
        {:else if indexPage == 4}
            <Finance/> 
        {:else if indexPage == 5}
            <Auth/>
        {:else if indexPage == 6}
            <ProfilePage/>
        {/if}
    </div>
</div>

<style>
    .home-ctn {
        display: flex;
        overflow: hidden;
    }

    .conten-ctn {
        flex: 8;
    }
</style>