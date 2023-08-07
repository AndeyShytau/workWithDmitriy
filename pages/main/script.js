import {addNewsList} from "../../modules/addNews/news.js";
import {addUserInfo} from "../../modules/getUserInfo/addUserInfo.js";
import {getRequests} from "../../api/getters.js";
import {GET_PROFILE_DATA, GET_USER_NEWS} from "../../api/constants.js";
import {setProfileData, setUserMessagesData, setUserNewsData} from "../../api/setters.js";
import {newUserMessages, newUserNews, newUserData} from "./constants.js";
import {checkAuth} from "../../helpers/helpers.js";

const moreInfoButton = document.getElementById('moreInfoButton');
const newsArea = document.getElementById('newsArea');
const sendNewsButton = document.getElementById('sendNewsButton');
const saveProfileChanges = document.getElementById('saveProfileChanges');

const newsArr = [];
let isShowMoreInfo = false;

checkAuth();

getRequests(GET_PROFILE_DATA).then((res) => addUserInfo(res[0], 'moreInfoProfile'));
getRequests(GET_USER_NEWS).then((res) => addNewsList(res, 'newsListBlock'));

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
    setProfileData(newUserData).then(response => {
        if (response.ok) {
            response.json().then(updatedData => {
                console.log('Обновленные данные:', updatedData);
            }).catch(error => {
                console.error('Ошибка при парсинге JSON:', error);
            });
        } else {
            console.error('Ошибка при запросе:', response.statusText);
        }
    }).catch(error => {
        console.error('Произошла ошибка:', error);
    });

    setUserNewsData(newUserNews).then(response => {
        if (response.ok) {
            response.json().then(updatedData => {
                console.log('Обновленные данные:', updatedData);
            }).catch(error => {
                console.error('Ошибка при парсинге JSON:', error);
            });
        } else {
            console.error('Ошибка при запросе:', response.statusText);
        }
    }).catch(error => {
        console.error('Произошла ошибка:', error);
    });

    setUserMessagesData(newUserMessages).then(response => {
        if (response.ok) {
            response.json().then(updatedData => {
                console.log('Обновленные данные:', updatedData);
            }).catch(error => {
                console.error('Ошибка при парсинге JSON:', error);
            });
        } else {
            console.error('Ошибка при запросе:', response.statusText);
        }
    }).catch(error => {
        console.error('Произошла ошибка:', error);
    });
}

