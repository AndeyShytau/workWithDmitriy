import {auth} from "../../api/auth.js";

const login = document.getElementById('login');
const password = document.getElementById('password');
const authButton = document.getElementById('authButton');

const authData = {
    login,
    password
}

authButton.onclick = (e) => {
    e.preventDefault();
    authData.login = login.value;
    authData.password = login.password;

    if (login.value && password.value) {
        auth(authData).then((r) => r);
    }
}