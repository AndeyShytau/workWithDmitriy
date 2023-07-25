import {addNewsList} from "../modules/addNews/news.js";
import {currentUser } from "./constants.js";
import {addUserInfo} from "../modules/getUserInfo/addUserInfo.js";
import {getRequests} from "../api/getters.js";
import {PROFILE_DATA, USER_MESSAGES, USER_NEWS} from "../api/constants.js";

const moreInfoButton = document.getElementById('moreInfoButton');
const newsArea = document.getElementById('newsArea');
const sendNewsButton = document.getElementById('sendNewsButton');
const saveProfileChanges = document.getElementById('saveProfileChanges');
const setNewAge = document.getElementById('setNewAge');

const newsArr = [];
let isShowMoreInfo = false;

getRequests(PROFILE_DATA).then((res) => addUserInfo(...res, 'moreInfoProfile'));
getRequests(USER_NEWS).then((res) => addNewsList(res, 'newsListBlock'));
getRequests(USER_MESSAGES).then((res) => console.log('messages', res));

moreInfoButton.addEventListener("click", function (e) {
    if (isShowMoreInfo === false) {
        e.target.nextElementSibling.style.height = 'auto';
        moreInfoButton.textContent = 'Cвернуть';
        isShowMoreInfo = !isShowMoreInfo;
    } else {
        e.target.nextElementSibling.style.height = '0px';
        moreInfoButton.textContent = 'Показать больше';
        isShowMoreInfo = !isShowMoreInfo;
    }
});


sendNewsButton.addEventListener("click", function () {
    let infoToArr = newsArea.value.trim();
    newsArr.push({
        id: newsArr.length,
        text: infoToArr,
    });
    newsArea.value = "";
    console.log(newsArr);
});

saveProfileChanges.onclick = () => {
    currentUser.age = Number(setNewAge.value);
    addUserInfo(currentUser, 'moreInfoProfile');
}
