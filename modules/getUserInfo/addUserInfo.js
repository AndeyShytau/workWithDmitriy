export const addUserInfo = (user, container) => {

    container.innerHTML = `
    <div>
       <span>Возраст: ${user.age}</span>
       <span>Семейное положение: ${user.status}</span>
    </div>
    <div>
       <p>Контактные данные</p>
       <img src="./img/position.png" alt=""/>
       <span>${user.city}</span>
       <br>
       <img src="./img/tr.png" alt=""/>
       <a href="tel:${user.phone}">${user.phone}</a>
       <br>
       <img src="./img/telega.png" alt=""/>
       <a href="">${user.telegramm}</a>
       <br>
        <img src="./img/telega.png" alt=""/>
        <a href="">${user.twitter}</a>
        <br>
        <img src="./img/telega.png" alt=""/>
        <a href="">${user.instagramm}</a>
        <div>
               <p>О себе</p>
                ${user.brif}
        </div>
    </div>
    
    `
}


