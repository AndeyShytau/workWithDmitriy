import {auth} from "../../api/auth.js";
import {getHomePath} from "../../helpers/helpers.js";

const login = document.getElementById('login');
const password = document.getElementById('password');
const authButton = document.getElementById('authButton');
const preloader = document.getElementById('preloader');
const registerFormContainer = document.getElementById('registerFormContainer');
const registerLink = document.getElementById('registerLink');

const authData = {
    login: null,
    password: null,
}

const preloaderData = {
    body: registerFormContainer,
    preloader
}

const showPreloader = ({ body, preloader }, status) => {
    body.style.display = status ? 'none' : 'block';
    preloader.style.display = status ? 'flex' : 'none';
}


authButton.onclick = (e) => {
    e.preventDefault();
    authData.login = login.value;
    authData.password = password.value;

    if (login.value && password.value) {
        showPreloader(preloaderData, true);
        auth(authData).then((r) => {
            if (r.ok) {
                return r.json().then((res) => {
                    localStorage.setItem('token', res.token);
                    setTimeout(() => {
                        window.location.href = getHomePath();
                    }, 1000);
                })
            } else {
                showPreloader(preloaderData, false);
                alert('Данные введены неверно или что-то пошло не так');
            }
        });
    } else {
        alert('Вы не ввели данные');
    }
}

registerLink.onclick = () => window.location.href = window.location.href.replace('auth', 'register');