export const currentUser = {
    id: 1,
    avatar: 'http://',
    gender: 'male',
    age: 18,
    name: 'Andrey',
    secondName: 'Shytau',
    aboutMe: 'text about me text about me text about me text about me text about metext about me',
    status: 'unmarred',
    city: 'minsk',
    phoneNumber: '+375293573759',
    telegram: '@Andrey_Shutoff',
    instagram: '',
    twitter: '',
    friends: [],
    subscribers: [],
};

export const friendsArray = [
    {
        id: 3,
        name: 'Max',
        ava: '../../icons/raccoon.jpg',
        messages: ['Привет', 'Как дела', 'я енот']
    },
    {
        id: 4,
        name: 'Lena',
        ava: 'https://static1-repo.aif.ru/1/3a/2266946/c/177aaa9b22e56530dddb1b9c1f7a09df.jpg',
        messages: ['Здарова', 'Чего смотришь', 'енотов не видел']
    },
    {
        id: 5,
        name: 'Ali',
        ava: 'https://static1-repo.aif.ru/1/65/2266947/c/3345e9b75bc54f97acc7c867f930737c.jpg',
        messages: ['хай', 'я енот you are not']
    },
    {
        id: 6,
        name: 'Max',
        ava: '../../icons/raccoon.jpg',
        messages: ['Приветствую', 'Ты как', 'а где все еноты']
    },
    {
        id: 7,
        name: 'Lena',
        ava: 'https://static1-repo.aif.ru/1/3a/2266946/c/177aaa9b22e56530dddb1b9c1f7a09df.jpg',
        messages: ['Добрый вечер', 'Я в поиске енота на сегодняшний вечер', 'Выпиваешь']
    },
    {
        id: 8,
        name: 'Ali',
        ava: 'https://static1-repo.aif.ru/1/65/2266947/c/3345e9b75bc54f97acc7c867f930737c.jpg',
        messages: ['И это снова я', 'Как дела', 'Я проездом из енотовиля']
    },
]

export const userNews = [
    {
        text: 'Andrey NEW Новость 1 Объект `HTMLFormElement` представляет форму в DOM и предоставляет ряд свойств и методов для работы с формой. Вот некоторые основные свойства и методы объекта `HTMLFormElement`:',
        picture: 'https://media.istockphoto.com/id/1249466085/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D1%8B%D1%85-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B5%D0%B9-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D1%8C-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8-%D0%BD%D0%B0-%D0%B3%D0%BB%D0%BE%D0%B1%D1%83%D1%81%D0%B5-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%8F%D1%88%D0%BD%D1%8B%D0%B9-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%BD%D0%B0.jpg?s=2048x2048&w=is&k=20&c=G81o0BVYoEabvmudxaYLhT15lmUGs5POWE5B1FneXnE=',
        creationDate: '27.07.2023',
        comments: []
    },
    {
        text: 'Andrey NEW Новость 2 Каждая форма на веб-странице представлена объектом HTMLFormElement в DOM Получить доступ к форме мы можем через уже знакомые:',
        picture: 'https://media.istockphoto.com/id/1249466085/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D1%8B%D1%85-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B5%D0%B9-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D1%8C-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8-%D0%BD%D0%B0-%D0%B3%D0%BB%D0%BE%D0%B1%D1%83%D1%81%D0%B5-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%8F%D1%88%D0%BD%D1%8B%D0%B9-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%BD%D0%B0.jpg?s=2048x2048&w=is&k=20&c=G81o0BVYoEabvmudxaYLhT15lmUGs5POWE5B1FneXnE=',
        creationDate: '29.07.2023',
        comments: []
    }
];

export const newUserMessages = [{
    senderName: 'Alex1',
    senderID: 22,
    senderPhoto: 'https://cs13.pikabu.ru/avatars/1873/x1873132-1972677953.png',
    text: "Hey, what's up?",
    sendDate: '23.07.2023',
}, {
    senderName: 'Victor',
    senderID: 23,
    senderPhoto: 'https://cs13.pikabu.ru/avatars/1873/x1873132-1972677953.png',
    text: 'Hello! Are you ok?',
    sendDate: '23.08.2023',
}];