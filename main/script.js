import {addNewsList} from "../modules/addNews/news.js";
import {addUserInfo} from "../modules/getUserInfo/addUserInfo.js";
import {getRequests} from "../api/getters.js";
import {GET_PROFILE_DATA, GET_USER_MESSAGES, GET_USER_NEWS} from "../api/constants.js";
import {setProfileData, setUserMessagesData, setUserNewsData} from "../api/setters.js";
import {newUserMessages, newUserNews, newUserData} from "./constants.js";

const moreInfoButton = document.getElementById('moreInfoButton');
const newsArea = document.getElementById('newsArea');
const sendNewsButton = document.getElementById('sendNewsButton');
const saveProfileChanges = document.getElementById('saveProfileChanges');

const newsArr = [];
let isShowMoreInfo = false;

getRequests(GET_PROFILE_DATA).then((res) => addUserInfo(...res, 'moreInfoProfile'));
getRequests(GET_USER_NEWS).then((res) => addNewsList(res, 'newsListBlock'));
getRequests(GET_USER_MESSAGES).then((res) => console.log('messages', res));

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
    setProfileData(newUserData).then(r => console.log(r.statusText));
    setUserNewsData(newUserNews).then(r => console.log(r.statusText));
    setUserMessagesData(newUserMessages).then(r => console.log(r.statusText));
}

