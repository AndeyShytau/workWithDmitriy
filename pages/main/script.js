import {addNewsList} from "../../modules/addNews/news.js";
import {addUserInfo} from "../../modules/getUserInfo/addUserInfo.js";
import {checkAuth, getDateTime} from "../../helpers/helpers.js";
import {currentUser, userNews} from "./constants.js";
import {sendComment} from "../../modules/addNews/comments.js";
import {getTemplate} from "../../modules/getTemplate/getTemplate.js";
import {popUpWindow} from "../../modules/addNews/pop-up window.js";
import {getPageTitlesAndDescriptions} from "../constants.js";
import {GET_PROFILE_DATA,GET_USER_NEWS} from "../../api/constants.js";
import {getRequest} from "../../api/getters.js";
import {setUserNewsData} from "../../api/setters.js";

const NEWS_PICTURE = 'https://media.istockphoto.com/id/1249466085/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D1%8B%D1%85-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B5%D0%B9-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D1%8C-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8-%D0%BD%D0%B0-%D0%B3%D0%BB%D0%BE%D0%B1%D1%83%D1%81%D0%B5-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%8F%D1%88%D0%BD%D1%8B%D0%B9-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%BD%D0%B0.jpg?s=2048x2048&w=is&k=20&c=G81o0BVYoEabvmudxaYLhT15lmUGs5POWE5B1FneXnE=';
const HIDE_INFO = 'Cвернуть';
const SHOW_INFO = 'Показать больше';

const moreInfoButton = document.getElementById('moreInfoButton');
const newsArea = document.getElementById('newsArea');
const sendNewsButton = document.getElementById('sendNewsButton');
let isShowMoreInfo = false;

checkAuth();
getTemplate(getPageTitlesAndDescriptions.main);



getRequest(GET_USER_NEWS).then((resp)=> {
    localStorage.setItem('news', JSON.stringify(resp));
    addNewsList(resp,'newsListBlock' );

});
getRequest(GET_PROFILE_DATA).then((resp)=> addUserInfo(resp[0],'moreInfoProfile' ));
const toggleInfo = (e, operation, height) => {
    moreInfoButton.textContent = operation;
    e.target.nextElementSibling.style.height = height;
    isShowMoreInfo = !isShowMoreInfo
}

moreInfoButton.addEventListener("click", function (e) {
    !isShowMoreInfo
        ? toggleInfo(e, HIDE_INFO, 'auto')
        : toggleInfo(e, SHOW_INFO, '0');
});

sendNewsButton.addEventListener("click", function () {
    if (newsArea.value.length >= 1) {
        let infoToArr = newsArea.value.trim();
        const currentNews = JSON.parse(localStorage.getItem('news'));

        currentNews.push({
            text: infoToArr,
            picture: NEWS_PICTURE,
            creationDate: getDateTime(),
            comments: []
        });

        setUserNewsData(currentNews).then((result)=> {
            addNewsList(result, 'newsListBlock');
            localStorage.setItem('news', JSON.stringify(result))
        });

    } else {
        alert('Поле ввода новости не может быть пустым')
    }
    newsArea.value = "";
    addNewsList(userNews, 'newsListBlock');
});

// addUserInfo(currentUser, 'moreInfoProfile');
// addNewsList(userNews, 'newsListBlock');
sendComment(userNews);
popUpWindow();
