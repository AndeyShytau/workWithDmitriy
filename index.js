// var userName = 'Vasiliy';
// var message = 'Hello';
// console.log(userName);
//
// showMessage = () => {
//     alert(message + ' ' + userName)
// };
// showMessage();

// var styles = ["Джаз", "Блюз"];
// styles[2] = "Рок-н-ролл";
// styles[1] = "Классика";
// alert(styles.shift());
// styles.unshift("Реп", "Регги");
// console.log(styles);

let currentUser = {
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

let userNews = [{
    text: 'news 1',
    picture: '',
    creationDate: '',
    comments: ['', '']
}, {
    text: 'news 2',
    picture: '',
    creationDate: '',
    comments: ['', '']
}];

let userMessages = [{
    senderName: '',
    senderID: 22,
    senderPhoto: '',
    text: '',
    sendDate: '',
}, {
    senderName: '',
    senderID: 23,
    senderPhoto: '',
    text: '',
    sendDate: '',
}];

let el1 = document.getElementById('contentContainer');
let el2 = document.getElementById('moreInfoButton');
let el3 = document.getElementsByClassName('newsSection');
let el4 = document.getElementById('moreInfoProfile');
let el5 = document.getElementById('news1');
let el6 = document.getElementById('sendNewsButton');
let newsArr = [];

el2.addEventListener("click", function () {
    if (el4.offsetHeight == 0) {
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
    })
    el5.value = "";
    console.log(newsArr);
})

// el2.removeEventListener("click", function () {
//     console.log("hhhhhhhhhh");
//     el4.style.height = '200px';
//     el2.textContent = 'свернуть';
// });