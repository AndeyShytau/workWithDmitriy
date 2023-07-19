import {addNewsList} from "../modules/addNews/news.js";
import { userNews } from "./constants.js";

const currentUser = {
    id: 1,
    gender: 'male',
    age: 33,
    name: 'andrey',
    surname: 'shytau',
    surname1: 'valerevich',
    brif: '',
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

const moreInfoButton = document.getElementById('moreInfoButton');
const moreInfoProfile = document.getElementById('moreInfoProfile');
const newsArea = document.getElementById('newsArea');
const sendNewsButton = document.getElementById('sendNewsButton');

const newsArr = [];
let isShowMoreInfo = false;
moreInfoButton.addEventListener("click", function (e) {
    console.log(e);
    if (isShowMoreInfo === false) {
        e.nextElementSibling.style.height = '200px';
        moreInfoButton.textContent = 'Cвернуть';
        isShowMoreInfo = !isShowMoreInfo;
    } else {
        e.nextElementSibling.style.height = '0px';
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


const showMoreInfo = (user, block ) => {
    const userInfo = `

    `
}

showMoreInfo(currentUser, moreInfoProfile);
addNewsList(userNews, 'newsListBlock');
