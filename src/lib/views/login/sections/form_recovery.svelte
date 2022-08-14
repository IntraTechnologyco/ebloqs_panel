<script>
    import InputPrimary from '../../../components/input_primary.svelte';
    import Logotype from '../../../../assets/500.svg'
    import ButtonPrimary from '../../../components/button_primary.svelte';
    import { admin } from '../../../stores/auth.store';

    import { link } from 'svelte-routing'

    let isLoaded;
    let errorEmail;
    let errorPass;

    
    admin.isLoginLoad.subscribe(value => {
        isLoaded = value;
    })

    admin.errorEmail.subscribe(value => {
        errorEmail = value;
    })

    admin.errorPass.subscribe(value => {
        errorPass = value;
    })

    async function handleSubmit(e) {
        e.preventDefault();
        var emailIn = e.target.email.value;
        var password = e.target.password.value;
        var login = await admin.recoveryPass(emailIn, password);
        console.log(login)
    }
</script>

<div class="form-cont">
    <div class="logo-ctn">
        <img src={Logotype} alt="logo-app" />
    </div>
    <div class="formulario">
        <div class='form-inputs'>
            <h1 class="title-primary">Recupera tu contraseña</h1>
            <h3 class="pharagraph-primary">Ingresa tu email para verificar tu cuenta</h3>
            <br>
            <br>
            <form on:submit={handleSubmit}>
                <InputPrimary
                    placeholder= 'Email'
                    label= 'Email'
                    type='email'
                    name='email'
                    errorText={errorEmail}
                ></InputPrimary>
                <br>
                <InputPrimary
                    placeholder= 'Nueva Contraseña'
                    label= 'Nueva Contraseña'
                    type='password'
                    name='password'
                    errorText={errorPass}
                ></InputPrimary>
                <div class="ask-pass">
                    <a href="/login" use:link>Iniciar sesión nuevamente</a>
                </div>
                <br>
                <ButtonPrimary
                    text= 'Recuperar contraseña'
                    load={isLoaded}
                >
                </ButtonPrimary>
            </form>   
        </div>
    </div>
</div>
<style>

    .form-cont {
        flex: 1;
        height: calc(100vh - 0px);
        padding: 0px 40px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        transition: all .2s ease-in-out;
    }
    
    .logo-ctn {
        width: 100%;
        padding: 20px 0px;
        text-align: start;
        align-items: flex-start;
    }
    
    .formulario {
        height: 100%;
        width: 70%;
        max-width: 22rem;
        text-align: center;
        justify-content: space-between;
        display: flex;
        flex-direction: column;
    }

    .form-inputs {
        margin-top: 20%;
    }



    .ask-pass {
        text-align: end;
        margin: 10px 0px;
    }

    a {
        font-family: 'Archivo';
        font-style: normal;
        font-weight: 400;
        font-size: 0.9em;
        line-height: 18px;
        color: var(--principal-blue);
        text-decoration: none;
    }


    @media only screen and (max-width: 1000px) {
        .form-cont {
            flex: 2;
            transition: all .2s ease-in-out;
        }
    }
    
    @media only screen and (max-width: 700px) {
        .formulario {
            height: 100%;
            width: 95%;
            max-width: 22rem;
            text-align: center;
            justify-content: space-between;
            display: flex;
            flex-direction: column;
        }
    }
    
</style>