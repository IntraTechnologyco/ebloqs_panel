<script>
        import Banner from "./sections/banner.svelte";
        import FormLogin from "./sections/form_login.svelte";
        import FormRecovery from "./sections/form_recovery.svelte";
        import BannerPng from '../../../assets/banner2.png'

</script>

<div>
    <div class="contain-recovery">
        <Banner
            image={BannerPng}
        ></Banner>
        <FormRecovery/>
    </div>
</div>


<style>
    .contain-recovery {
        /* height: 100vh; */
        width: 100%;
        justify-content: space-between;
        display: flex;
        overflow: hidden;
    }
</style>