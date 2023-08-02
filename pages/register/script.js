import {registrationUser} from "../../api/register.js";

const registerButton = document.getElementById('registerButton');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const repeatPasswordInput = document.getElementById('repeatPassword');
const emailInput = document.getElementById('email');

const registerData = {
    login: null,
    password: null,
    email: null,
};

registerButton.onclick = (e) => {
    e.preventDefault();

    registerData.login = loginInput.value;
    registerData.password = passwordInput.value;
    registerData.email = emailInput.value;

    registrationUser(registerData).then((r) => console.log(r.ok));
};