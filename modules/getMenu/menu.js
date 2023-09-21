export const getMenu = () =>{
    let sideBar = document.getElementById('sideBar');

    sideBar.innerHTML = `
        <ul>
            <li>
                <img src="../../icons/user.svg" alt="user">
                <a href="index.html">Моя страница</a>
            </li>
            <li>
                <img src="../../icons/news.svg" alt="user">
                <a href="">Новости</a>
            </li>
            <li>
                <img src="../../icons/messages.svg" alt="user">
                <a href="">Мессенджер</a>
            </li>
            <li>
                <img src="../../icons/friends.svg" alt="user">
                <a href="">Друзья</a>
            </li>
            <li>
                <img src="../../icons/settings.svg" alt="user">
                <a href="index1.html">Настройки</a>
            </li>
        </ul>
    `

}