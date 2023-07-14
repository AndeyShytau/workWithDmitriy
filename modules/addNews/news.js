export const addNewsList = (newsArray, blockId) => {
    const blockForListNews = document.getElementById(blockId);

    const listNews = newsArray.map((item) => {
        const comments = item.comments.map((comment) => {
            return `<div>${comment}</div>`
        })

        return `<div class="newsListElement">
        <img src=${item.picture} alt="" class="newsImg"/>
        <div class="newsCreationDate">${item.creationDate}</div>
        <div class="newsText">${item.text}</div>
        <div class="newsCommnetsBlock">
            <div class="newsCommentsLabel">Комментарии</div>
            <div class="newsComment">${comments.join('')}</div>
        </div>
    </div>`
    });

    return blockForListNews.innerHTML = listNews.join('');
}