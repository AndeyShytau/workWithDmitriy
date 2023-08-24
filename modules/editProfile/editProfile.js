import {currentUser as user} from "../../main/constants.js";
import {getHead} from "../getHead/getHead.js";
import {getHeader} from "../getHeader/getHeader.js";
import {getMenu} from "../getMenu/menu.js";
import {getFooter} from "../getFooter/getFooter.js";

const body = document.getElementsByTagName('body');
const slideOneDescription = document.getElementById('slideOneDescription');
const getTemplate = () => {
    getHead();
    getHeader();
    getMenu();
    getFooter();
}
getTemplate();

const editForm = document.getElementById('editForm');
const saveEditFormButton = document.getElementById('saveEditFormButton');

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

saveEditFormButton.onclick = (e) => {
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

// editProfileButton.addEventListener("click", function (e) {
//     e.target.nextElementSibling.style.right = '50px';
//     e.target.textContent = 'Закончить редактирование';
// });
//
// closeEditForm.addEventListener("click", function (e) {
//     editProfileInfo.style.right = '-650px';
//     editProfileButton.textContent = 'Редактировать профиль';
// });


// export const editProfile = (user) => {
//     getLayout();
// }

themeCheckBox.onclick = (e) => {
    if (e.target.checked) {
        body[0].style.background = "#5C6898";
        slideOneDescription.innerHTML = "Включена тёмная тема";
        getTemplate();
    } else {
        body[0].style.background = "aliceblue";
        slideOneDescription.innerHTML = "Включена светлая тема";
        getTemplate();
    }
};
