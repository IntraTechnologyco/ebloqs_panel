import { baseUrl } from "./api.service";

async function loginWithEmailandPassword(email, password) {
    var request = JSON.stringify({
        email: email,
        password: password,
    })

    var response = await fetch(`${baseUrl}/auth/admin`,{ 
        method: 'POST',
        body: request,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });

    return response;
}

async function recoveryPassword(email, password) {
    var request = JSON.stringify({
        email: email,
        password: password,
    })

    var response = await fetch(`${baseUrl}/user/recovery`,{ 
        method: 'POST',
        body: request,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });

    return response;
}

function authService() {
    return {
        loginWithEmailandPassword,
        recoveryPassword
    }
}

export const service = authService();