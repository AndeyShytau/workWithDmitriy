
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

export const maxHeightOfNews = () => {
    const newsCollection = document.getElementsByClassName("newsText");
    const arrayFromCollection = Array.from(newsCollection);
    const wrapper = document.getElementById('newsListBlock');

    arrayFromCollection.map((item) => {
        if (item.textContent.length > 150) {
            item.style.height = '92px';
            item.classList.add('newsText1');
        }

    })

    function handleClick(e){
        if(e.target.classList.contains("newsText1")){
            e.target.style.height = "auto";
            e.target.classList.remove('newsText1');
        }

    }
    wrapper.addEventListener('click', handleClick);
}