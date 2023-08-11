import {userNews} from "../../main/constants.js";
import {addNewsList} from "./news.js";

export const sendComment = (newsArray) => {
    const sendCommentsButton = document.getElementById('sendCommentsButton');
    const commentsTextArea = document.getElementById('commentsTextArea');
    const buttons = document.getElementsByClassName('sendCommentsButton');
    const wrapper = document.getElementById('newsListBlock');
    const newsElements = document.getElementsByClassName('newsListElement');
    console.log(newsElements);

    // newsElements.forEach((item) => {
    //    console.log(item);
    //  });
    for (let key in newsElements) {
        console.log(key);
    }

    console.log(Object.keys(newsElements));


    function handleClick(e) {


        if (e.target.classList.contains("sendCommentsButton")) {

            console.log(e.target.previousElementSibling.value);

            userNews[0].comments.push(e.target.previousElementSibling.value);

            console.log(userNews[0].comments)

            e.target.previousElementSibling.value = "";

            addNewsList(userNews, 'newsListBlock')

            console.log(e.target.parentElement.parentElement)
        }


    }

    wrapper.addEventListener('click', handleClick);


}
