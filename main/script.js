import {addNewsList} from "../modules/addNews/news.js";
import { userNews } from "./constants.js";

const el2 = document.getElementById('moreInfoButton');
const el4 = document.getElementById('moreInfoProfile');
const el5 = document.getElementById('news1');
const el6 = document.getElementById('sendNewsButton');

const newsArr = [];

el2.addEventListener("click", function () {
    if (el4.offsetHeight === 0) {
        el4.style.height = '200px';
        el2.textContent = 'Cвернуть';
    } else {
        el4.style.height = '0px';
        el2.textContent = 'Показать больше';
    }

    console.log(typeof el4.offsetHeight);
});


el6.addEventListener("click", function () {
    let infoToArr = el5.value.trim();
    newsArr.push({
        id: newsArr.length,
        text: infoToArr,
    });
    el5.value = "";
    console.log(newsArr);
});


addNewsList(userNews, 'newsListBlock');
