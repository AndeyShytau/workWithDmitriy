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
       <a href="tel:${user.phoneNumber}">${user.phoneNumber}</a>
       <br>
       <img src="modules/getUserInfo/img/telega.png" alt=""/>
       <a href="">${user.telegram}</a>
       <br>
        <img src="modules/getUserInfo/img/telega.png" alt=""/>
        <a href="">${user.twitter}</a>
        <br>
        <img src="modules/getUserInfo/img/telega.png" alt=""/>
        <a href="">${user.instagram}</a>
        <div>
               <p>О себе</p>
                ${user.aboutMe}
        </div>
    </div>
    `
}


