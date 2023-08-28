import {hashTags} from "../../helpers/helpers.js";

 export const newsByHashTag = (newsArray, blockId, targetElement) => {
    const blockForListNews = document.getElementById(blockId);

    const listNews = newsArray?.map((item) => {
        const markingText = hashTags(item.text);
        if(item.text.includes(targetElement.textContent)){
            return `<div class="newsListElement">
                     <img src=${item.picture} alt="" class="newsImg"/>
                     <div class="newsCreationDate">${item.creationDate}</div>
                     <div class="newsText" id="newsText">${markingText}</div>
          
                </div>`
        }
    });

    blockForListNews.innerHTML = listNews.join('');

}
