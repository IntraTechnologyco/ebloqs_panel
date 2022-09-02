<script>
    import ParamoeVI from '../../../../assets/paramore.mp4'
</script>

<div class="post-ctn">
    <!-- svelte-ignore a11y-media-has-caption -->
    <div class="item-post">
        <video 
            src={ParamoeVI}
            width="100%"
            controls/>
        <h2 class="title-post">Bienvenidos a la plataforma de administración ebloqs®, si por primera vez visitas la Plataforma, sigue este video para realizar una explanación global de administración</h2>
    </div>
</div>

<style>
    .post-ctn{
        max-width: 50em;
        width: 70%;
        margin-top: 2em;
    }

    .title-post {
        font-family: 'Archivo';
        font-weight: 400;
        font-size: 1.2em;
        color: var(--dark-blue);
        text-align: start;
    }
</style>