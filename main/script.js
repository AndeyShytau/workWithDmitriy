import {addNewsList} from "../modules/addNews/news.js";
import {addUserInfo} from "../modules/getUserInfo/addUserInfo.js";
import {getRequests} from "../api/getters.js";
import {GET_PROFILE_DATA, GET_USER_MESSAGES, GET_USER_NEWS} from "../api/constants.js";
import {setProfileData} from "../api/setters.js";

const moreInfoButton = document.getElementById('moreInfoButton');
const newsArea = document.getElementById('newsArea');
const sendNewsButton = document.getElementById('sendNewsButton');
const saveProfileChanges = document.getElementById('saveProfileChanges');
const setNewAge = document.getElementById('setNewAge');

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

const newUserdata = {
    id: 1,
    gender: 'male',
    age: 10,
    name: 'Andrey',
    surname: 'Shytau',
    surname1: 'Valerevich',
    brif: 'text about me',
    status: 'unmarred',
    city: 'minsk',
    phone: '+375293573759',
    telegramm: '@Andrey_Shutoff',
    instagramm: '',
    twitter: '',
    classmates: [],
    friends: [],
    subscribers: [],
};

saveProfileChanges.onclick = () => setProfileData(newUserdata);


