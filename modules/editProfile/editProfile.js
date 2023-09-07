import {currentUser, currentUser as user} from "../../pages/main/constants.js";
import {getTemplate} from "../getTemplate/getTemplate.js";
import {getPageTitlesAndDescriptions} from "../../pages/constants.js";
import {colorPanel} from "./colorPanel.js";
import {checkTheme} from "../../helpers/helpers.js";
import {THEME_COLORS} from "./constants.js";
import {editProfileForm} from "./editProfileForm.js";



const header = document.getElementById('header');
const footer = document.getElementById('footer');
const themeCheckBox = document.getElementById('themeCheckBox');
const slideOneDescription = document.getElementById('slideOneDescription');

getTemplate(getPageTitlesAndDescriptions.settings);
editProfileForm();
colorPanel(footer, header);


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

// addEventListener('click', function (e) {
//     console.log(e)
// })

// const objEntries = Object.entries(editForm);
// console.log(objEntries);
//
//
// for (let key in editForm) {
//     console.log(key);
// }

// for (let i = 0; i < editForm.length; i++) {
//     console.log(editForm[i])
// }

