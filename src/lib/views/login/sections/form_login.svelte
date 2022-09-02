<script>
    import InputPrimary from '../../../components/input_primary.svelte';
    import Logotype from '../../../../assets/500.svg'
    import CheckBtn from '../../../components/check_btn.svelte';
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
        var login = await admin.login(emailIn, password);
        console.log(await login.body)
    }
</script>

<div class="form-cont">
    <div class="logo-ctn">
        <img src={Logotype} alt="logo-app" />
    </div>
    <div class="formulario">
        <div class='form-inputs'>
            <h1 class="title-primary">Bienvenido a Ebloqs</h1>
            <h3 class="pharagraph-primary">Ingresa tus datos para acceder a Ebloqs</h3>
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
                    placeholder= 'Contraseña'
                    label= 'Contraseña'
                    type='password'
                    name='password'
                    errorText={errorPass}
                ></InputPrimary>
                <div class="ask-pass">
                    <a href="/recovery" use:link>¿Olvidaste tu contraseña?</a>
                </div>
                <div class="ask-pass">
                    <CheckBtn></CheckBtn>
                </div>
                <br>
                <ButtonPrimary
                    text= 'Iniciar sesión'
                    load={isLoaded}
                >
                </ButtonPrimary>
            </form>   
        </div>
        <div class="signin">
            <p>¿No tienes cuenta?</p>
            <a href="/signin">Registrate</a>
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

    .signin{
        display: flex;
        justify-content: center;
        align-self: center;
        align-items: center;
        margin-bottom: 30px;
    }

    .signin p{
        font-family: 'Archivo';
        font-style: normal;
        font-weight: 400;
        font-size: 0.9em;
        line-height: 18px;
        color: var(--dark-blue);
        margin: 0px 10px;
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