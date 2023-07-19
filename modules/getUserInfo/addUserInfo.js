export const addUserInfo = (user, container) => {
    const moreInfoProfile = document.getElementById(container);
    moreInfoProfile.innerHTML = `
    <div>
       <span>Возраст: ${user.age}</span>
       <span>Семейное положение: ${user.status}</span>
    </div>
    <div>
       <p>Контактные данные</p>
       <img src="modules/getUserInfo/img/position.png" alt=""/>
       <span>${user.city}</span>
       <br>
       <img src="modules/getUserInfo/img/tr.png" alt=""/>
       <a href="tel:${user.phone}">${user.phone}</a>
       <br>
       <img src="modules/getUserInfo/img/telega.png" alt=""/>
       <a href="">${user.telegramm}</a>
       <br>
        <img src="modules/getUserInfo/img/telega.png" alt=""/>
        <a href="">${user.twitter}</a>
        <br>
        <img src="modules/getUserInfo/img/telega.png" alt=""/>
        <a href="">${user.instagramm}</a>
        <div>
               <p>О себе</p>
                ${user.brif}
        </div>
    </div>
    `
}


