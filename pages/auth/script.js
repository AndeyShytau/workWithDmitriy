import {auth} from "../../api/auth.js";

const login = document.getElementById('login');
const password = document.getElementById('password');
const authButton = document.getElementById('authButton');

const authData = {
    login: null,
    password: null,
}

authButton.onclick = (e) => {
    e.preventDefault();
    authData.login = login.value;
    authData.password = password.value;

    if (login.value && password.value) {
        auth(authData).then((r) => console.log(r.ok));
    }
}