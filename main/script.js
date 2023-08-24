import {addNewsList, hashTags, maxHeightOfNews} from "../modules/addNews/news.js";
import {addUserInfo} from "../modules/getUserInfo/addUserInfo.js";
import {getRequests} from "../api/getters.js";
import {GET_PROFILE_DATA, GET_USER_MESSAGES, GET_USER_NEWS} from "../api/constants.js";
import {setProfileData, setUserMessagesData, setUserNewsData} from "../api/setters.js";
import {newUserMessages, newUserNews, newUserData, currentUser, userNews, date,} from "./constants.js";
import {sendComment} from "../modules/addNews/comments.js";
import {getFooter} from "../modules/getFooter/getFooter.js";
import {getMenu} from "../modules/getMenu/menu.js";
import {getHeader} from "../modules/getHeader/getHeader.js";
import {getHead} from "../modules/getHead/getHead.js"

const moreInfoButton = document.getElementById('moreInfoButton');
const newsArea = document.getElementById('newsArea');
const sendNewsButton = document.getElementById('sendNewsButton');
let isShowMoreInfo = false;

const getTemplate = () => {
    getHead();
    getHeader();
    getMenu();
    getFooter();
}
getTemplate();

// getRequests(GET_PROFILE_DATA).then((res) => addUserInfo(...res, 'moreInfoProfile'));
// getRequests(GET_USER_NEWS).then((res) => addNewsList(res, 'newsListBlock'));
// getRequests(GET_USER_MESSAGES).then((res) => console.log('messages', res));

moreInfoButton.addEventListener("click", function (e) {
    if (isShowMoreInfo === false) {
        e.target.nextElementSibling.style.height = 'auto';
        moreInfoButton.textContent = 'Cвернуть';
        isShowMoreInfo = !isShowMoreInfo;
        console.log(moreInfoButton)
    } else {
        e.target.nextElementSibling.style.height = '0px';
        moreInfoButton.textContent = 'Показать больше';
        isShowMoreInfo = !isShowMoreInfo;
    }
});

sendNewsButton.addEventListener("click", function () {
    let infoToArr = newsArea.value.trim();
    userNews.push({
        text: infoToArr,
        picture: 'https://media.istockphoto.com/id/1249466085/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D1%8B%D1%85-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B5%D0%B9-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D1%8C-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8-%D0%BD%D0%B0-%D0%B3%D0%BB%D0%BE%D0%B1%D1%83%D1%81%D0%B5-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%8F%D1%88%D0%BD%D1%8B%D0%B9-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%BD%D0%B0.jpg?s=2048x2048&w=is&k=20&c=G81o0BVYoEabvmudxaYLhT15lmUGs5POWE5B1FneXnE=',
        creationDate: date,
        comments: []
    });
    newsArea.value = "";
    addNewsList(userNews, 'newsListBlock');
    hashTags(userNews);
    console.log(userNews)
});

// saveProfileChanges.onclick = () => {
//     setProfileData(newUserData).then(r => console.log(r.statusText));
//     setUserNewsData(newUserNews).then(r => console.log(r.statusText));
//     setUserMessagesData(newUserMessages).then(r => console.log(r.statusText));
// }

addUserInfo(currentUser, 'moreInfoProfile');
addNewsList(userNews, 'newsListBlock');
sendComment(userNews);
hashTags(userNews);

document.addEventListener('click', e => console.log(e))





