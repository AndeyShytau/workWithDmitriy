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

const inputs = [loginInput, passwordInput, repeatPasswordInput, emailInput];

registerButton.onclick = (e) => {
    e.preventDefault();

    registerData.login = loginInput.value;
    registerData.password = repeatPasswordInput.value === passwordInput.value ? passwordInput.value : null;
    registerData.email = emailInput.value;

    if (registerData.password) {
        registrationUser(registerData).then((r) => console.log(r.ok));
    } else {
        inputs.map((item) => {
            item.value = '';
            if (item.id === 'password' || item.id === 'repeatPassword') {
                item.style.border = '1px solid red';
            }
        });
        alert('Пароли должны совпадать');
    }
};