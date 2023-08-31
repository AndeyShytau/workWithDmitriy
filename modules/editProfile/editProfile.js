import {currentUser as user} from "../../pages/main/constants.js";
import {getPageTitlesAndDescriptions} from "../../pages/constants.js";
import {getTemplate} from "../getTemplate/getTemplate.js";
import {checkTheme} from "../../helpers/helpers.js";
import {THEME_COLORS} from "./constants.js";

const body = document.getElementsByTagName('body');
const slideOneDescription = document.getElementById('slideOneDescription');
const editForm = document.getElementById('editForm');
const saveEditFormButton = document.getElementById('saveEditFormButton');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const themeCheckBox = document.getElementById('themeCheckBox');

getTemplate(getPageTitlesAndDescriptions.settings);

editForm[0].value = user.name;
editForm[1].value = user.surname;
editForm[2].value = user.surname1;
editForm[3].value = user.age;
editForm[4].value = user.status;
editForm[5].value = user.city;
editForm[6].value = user.phone;
editForm[7].value = user.telegramm;
editForm[8].value = user.instagramm;
editForm[9].value = user.twitter;
editForm[10].value = user.brif;

saveEditFormButton.onclick = () => {
    user.name = editForm[0].value;
    user.surname = editForm[1].value;
    user.surname1 = editForm[2].value;
    user.age = editForm[3].value;
    user.status = editForm[4].value;
    user.city = editForm[5].value;
    user.phone = editForm[6].value;
    user.telegramm = editForm[7].value;
    user.instagramm = editForm[8].value;
    user.twitter = editForm[9].value;
    user.brif = editForm[10].value;
    console.log(user);
}

const setTheme = (isChecked) => {
    slideOneDescription.innerHTML = isChecked ? THEME_COLORS.dark.title : THEME_COLORS.light.title;
    localStorage.setItem('theme', JSON.stringify(isChecked ? THEME_COLORS.dark : THEME_COLORS.light));
    checkTheme();
}

themeCheckBox.onclick = (e) => {
    if (e.target.checked) {
        setTheme(e.target.checked);
    } else {
        setTheme(e.target.checked);
    }
}

const x = localStorage.getItem('newsArray')

console.log(JSON.parse(x));