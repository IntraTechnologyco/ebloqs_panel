import { navigate } from "svelte-routing";
import { writable } from "svelte/store";
import { service } from "../services/auth.service";


let isLoginLoad = writable(false);
let errorEmail = writable('');
let errorPass = writable('');



async function login(email, password) {
    isLoginLoad.update(n => n = true);
    if(email.length == 0) {
        isLoginLoad.update(n => n = false);
        errorPass.update(n => n = '');
        errorEmail.update(n => n = 'Escribe un correo válido');
    } else if(password.length == 0) {
        isLoginLoad.update(n => n = false);
        errorEmail.update(n => n = '');
        errorPass.update(n => n = 'Escribe una contraseña válida');
    } else {
        var respon = await service.loginWithEmailandPassword(email, password);
        console.log(respon.status);
        if(respon.status == 201) {
            var jsonResp = await respon.json();
            isLoginLoad.update(n => n = false);
            errorEmail.update(n => n = '');
            errorPass.update(n => n = '');
            localStorage.setItem('accessToken', jsonResp['access_token'])
            navigate('/', { replace: true });
        } else if (respon.status == 302) {
            var jsonResp = await respon.json();
            isLoginLoad.update(n => n = false);
            errorEmail.update(n => n = 'Usuario no registrado');
            errorPass.update(n => n = '');
            console.log(jsonResp);
        } else if (respon.status == 301) {
            isLoginLoad.update(n => n = false);
            errorEmail.update(n => n = '');
            errorPass.update(n => n = 'Contraseña incorrecta');

        }
        return respon;
    }
}


async function logout() {
    localStorage.removeItem('accessToken');
    navigate('/login', { replace: true });
}

async function recoveryPass(email, password) {
    isLoginLoad.update(n => n = true);
    if(email.length == 0) {
        isLoginLoad.update(n => n = false);
        errorPass.update(n => n = '');
        errorEmail.update(n => n = 'Escribe un correo válido');
    } else if(password.length == 0) {
        isLoginLoad.update(n => n = false);
        errorEmail.update(n => n = '');
        errorPass.update(n => n = 'Escribe una contraseña válida');
    } else {
        var respon = await service.recoveryPassword(email, password);
        console.log(respon.status);
        if(respon.status == 201) {
            var jsonResp = await respon.json();
            isLoginLoad.update(n => n = false);
            errorEmail.update(n => n = '');
            errorPass.update(n => n = '');
            navigate('/login', { replace: true });
        } else if (respon.status == 302) {
            var jsonResp = await respon.json();
            isLoginLoad.update(n => n = false);
            errorEmail.update(n => n = 'Usuario no registrado');
            errorPass.update(n => n = '');
            console.log(jsonResp);
        } else if (respon.status == 301) {
            isLoginLoad.update(n => n = false);
            errorEmail.update(n => n = '');
            errorPass.update(n => n = 'Contraseña incorrecta');

        }
        return respon;
    }
}


function authAdmin() {
    return {
        isLoginLoad,
        errorEmail,
        errorPass,
        login,
        logout,
        recoveryPass
    }
}

export const admin = authAdmin();