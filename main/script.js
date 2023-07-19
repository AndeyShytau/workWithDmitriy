import {addNewsList} from "../modules/addNews/news.js";
import { userNews, currentUser } from "./constants.js";
import {addUserInfo} from "../modules/getUserInfo/addUserInfo.js";

const moreInfoButton = document.getElementById('moreInfoButton');
const moreInfoProfile = document.getElementById('moreInfoProfile');
const newsArea = document.getElementById('newsArea');
const sendNewsButton = document.getElementById('sendNewsButton');

const newsArr = [];
let isShowMoreInfo = false;
moreInfoButton.addEventListener("click", function (e) {
    console.log(e);
    if (isShowMoreInfo === false) {
        e.target.nextElementSibling.style.height = 'auto';
        moreInfoButton.textContent = 'Cвернуть';
        isShowMoreInfo = !isShowMoreInfo;
    } else {
        e.target.nextElementSibling.style.height = '0px';
        moreInfoButton.textContent = 'Показать больше';
        isShowMoreInfo = !isShowMoreInfo;
    }

    console.log(typeof moreInfoProfile.offsetHeight);
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


addNewsList(userNews, 'newsListBlock');
addUserInfo(currentUser, moreInfoProfile);
