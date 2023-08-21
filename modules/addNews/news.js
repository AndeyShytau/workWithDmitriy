import {userNews} from "../../main/constants.js";

const lengthOfNews = userNews[0].text.length;
console.log(lengthOfNews);

export const addNewsList = (newsArray, blockId) => {
    const blockForListNews = document.getElementById(blockId);

    const listNews = newsArray?.map((item) => {
        const comments = item.comments.map((comment) => {
            return `<div>${comment}</div>`
        })

        return `<div class="newsListElement">
        <img src=${item.picture} alt="" class="newsImg"/>
        <div class="newsCreationDate">${item.creationDate}</div>
        <div class="newsText" id="newsText">${item.text}</div>
        
        <div class="newsCommenetsBlock">
        
        <label for="commentsTextArea">add comment</label>
        <textarea id="commentsTextArea" class="newsTextArea" rows="1"></textarea>
        <button id="sendCommentsButton"  class="moreProfileInfoButton sendCommentsButton"  >Оставить комментарий</button>
       
            <div class="newsCommentsLabel">Комментарии</div>
            
            <div class="newsComment">${comments.join('')}</div>
        </div>
    </div>`
    });

     blockForListNews.innerHTML = listNews.join('');

}

