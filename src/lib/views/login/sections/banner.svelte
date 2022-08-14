<script>
    export let image;
</script>
<div class="ban-cnt">
    <canvas class="overlay"></canvas>
    <img src={image} alt="banner" />
</div>

<style>

    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(37, 37, 74, 0) 0%, #25254A 100%);
    }
    
    .ban-cnt {
        position: relative;
        margin: 0;
        padding: 0;
        flex: 1;
        height: 100vh;
    }
    
    img {
        height: 100%;
        width: 100%;
        margin: 0;
        object-fit: cover;
    }

    @media only screen and (max-width: 700px) {
        .ban-cnt {
            flex: 0;
            transition: all .2s ease-in-out;
        }
    }
</style>