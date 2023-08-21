export const getMenu = () =>{
    let sideBar = document.getElementById('sideBar');

    sideBar.innerHTML = `
        <ul>
            <li><a href="../index.html">Моя страница</a></li>
            <li><a href="">Новости</a></li>
            <li><a href="">Мессенджер</a></li>
            <li><a href="">Друзья</a></li>
            <li><a href="">Сообщества</a></li>
            <li><a href="../index1.html">Настройки</a></li>
        </ul>
    `

}