<script>
    import Banner from "./sections/banner.svelte";
    import FormLogin from "./sections/form_login.svelte";
    import BannerPng from '../../../assets/banner.png'


</script>

<div class="contain-login">
    <FormLogin></FormLogin>
    <Banner
        image={BannerPng}
    ></Banner>
</div>

<style>
    .contain-login {
        /* height: 100vh; */
        width: 100%;
        justify-content: space-between;
        display: flex;
        overflow: hidden;
    }
</style>