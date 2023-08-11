import {addNewsList} from "./news.js";

export const sendComment = (newsArray) => {
    const wrapper = document.getElementById('newsListBlock');
    const newsElements = document.getElementsByClassName('newsListElement');
    console.log(newsElements);

    for (let key in newsElements) {
        console.log(key);
    }

    console.log(Object.keys(newsElements));


    function handleClick(e) {
        if (e.target.classList.contains("sendCommentsButton")) {
            const textValue = e.target.parentElement.previousElementSibling.textContent;

            newsArray.map((item) => {
                if (item.text === textValue) {
                    return {...item, comments: item.comments.push(e.target.previousElementSibling.value)}
                }
            });

            addNewsList(newsArray, 'newsListBlock')
        }


    }

    wrapper.addEventListener('click', handleClick);
}
