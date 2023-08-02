import {auth} from "../../api/auth.js";

const login = document.getElementById('login');
const password = document.getElementById('password');
const authButton = document.getElementById('authButton');

const authData = {
    login: null,
    password: null,
}

const redirectPath = window.location.href.split('/').reduce((acc, item) => {
    if (item === 'pages') {
        acc.toggleFinderElement = false;
    }
    if (acc.toggleFinderElement) {
        acc.pathSegments.push(item);
    }
    return acc;
}, { toggleFinderElement: true, pathSegments: [] }).pathSegments.join('/');

authButton.onclick = (e) => {
    e.preventDefault();
    authData.login = login.value;
    authData.password = password.value;

    if (login.value && password.value) {
        auth(authData).then((r) => {
            if (r.ok) {
                window.location.href = redirectPath;
            } else {
                alert('Данные введены неверно');
            }
        });
    }
}