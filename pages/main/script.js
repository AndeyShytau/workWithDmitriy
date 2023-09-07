import {addNewsList} from "../../modules/addNews/news.js";
import {addUserInfo} from "../../modules/getUserInfo/addUserInfo.js";
import {getRequests} from "../../api/getters.js";
import {GET_PROFILE_DATA, GET_USER_NEWS} from "../../api/constants.js";
import {checkAuth, checkTheme, getDateTime} from "../../helpers/helpers.js";
import {currentUser, userNews} from "./constants.js";
import {sendComment} from "../../modules/addNews/comments.js";
import {getTemplate} from "../../modules/getTemplate/getTemplate.js";
import {popUpWindow} from "../../modules/addNews/pop-up window.js";
import {getPageTitlesAndDescriptions} from "../constants.js";

const NEWS_PICTURE = 'https://media.istockphoto.com/id/1249466085/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D1%8B%D1%85-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B5%D0%B9-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D1%8C-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8-%D0%BD%D0%B0-%D0%B3%D0%BB%D0%BE%D0%B1%D1%83%D1%81%D0%B5-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%8F%D1%88%D0%BD%D1%8B%D0%B9-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%BD%D0%B0.jpg?s=2048x2048&w=is&k=20&c=G81o0BVYoEabvmudxaYLhT15lmUGs5POWE5B1FneXnE=';

const moreInfoButton = document.getElementById('moreInfoButton');
const newsArea = document.getElementById('newsArea');
const sendNewsButton = document.getElementById('sendNewsButton');
let isShowMoreInfo = false;

checkAuth();
getTemplate(getPageTitlesAndDescriptions.main);


getRequests(GET_PROFILE_DATA).then((res) => addUserInfo(res[0], 'moreInfoProfile'));
getRequests(GET_USER_NEWS).then((res) => {
    addNewsList(res, 'newsListBlock');
    localStorage.setItem('newsArray', JSON.stringify(res));
});

const hideInfo = (e) => {
    moreInfoButton.textContent = 'Cвернуть';
    e.target.nextElementSibling.style.height = 'auto';
    isShowMoreInfo = !isShowMoreInfo
}

const showInfo = (e) => {
    moreInfoButton.textContent = 'Показать больше';
    e.target.nextElementSibling.style.height = '0px';
    isShowMoreInfo = !isShowMoreInfo
}

moreInfoButton.addEventListener("click", function (e) {
    !isShowMoreInfo ? hideInfo(e) : showInfo(e);
});

sendNewsButton.addEventListener("click", function () {
    if (newsArea.value.length >= 1) {
        let infoToArr = newsArea.value.trim();
        userNews.push({
            text: infoToArr,
            picture: NEWS_PICTURE,
            creationDate: getDateTime(),
            comments: []
        });

    } else {
        alert('Поле ввода новости не может быть пустым')
    }
    newsArea.value = "";
    addNewsList(userNews, 'newsListBlock');
});

addUserInfo(currentUser, 'moreInfoProfile');
addNewsList(userNews, 'newsListBlock');
sendComment(userNews);
popUpWindow();
