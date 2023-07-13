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

let el1 = document.getElementsByClassName('basicContent');
let el2 = document.getElementsByClassName('moreProfileInfoButton');
let el3 = document.getElementsByClassName('newsSection');

el2.addEventListener("click", function() {
    alert("hhhhhhhhhh");
});