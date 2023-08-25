export const date = new Date().toLocaleDateString();
export const time = new Date().toLocaleTimeString();
export const dateAndTime = (date, time) => {
    return `${date} ${time}`
};

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

export const userNews = [
    {
        text: 'Andrey NEW Новость 1 Объект `HTMLFormElement` представляет форму в DOM и предоставляет ряд свойств и методов для работы с формой. Вот некоторые основные свойства и методы объекта `HTMLFormElement`:',
        picture: 'https://media.istockphoto.com/id/1249466085/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D1%8B%D1%85-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B5%D0%B9-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D1%8C-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8-%D0%BD%D0%B0-%D0%B3%D0%BB%D0%BE%D0%B1%D1%83%D1%81%D0%B5-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%8F%D1%88%D0%BD%D1%8B%D0%B9-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%BD%D0%B0.jpg?s=2048x2048&w=is&k=20&c=G81o0BVYoEabvmudxaYLhT15lmUGs5POWE5B1FneXnE=',
        creationDate: '27.07.2023',
        comments: ['wow', 'cool', 'super']
    },
    {
        text: 'Andrey NEW Новость 2 Каждая форма на веб-странице представлена объектом HTMLFormElement в DOM Получить доступ к форме мы можем через уже знакомые:',
        picture: 'https://media.istockphoto.com/id/1249466085/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D1%8B%D1%85-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B5%D0%B9-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D1%8C-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8-%D0%BD%D0%B0-%D0%B3%D0%BB%D0%BE%D0%B1%D1%83%D1%81%D0%B5-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%8F%D1%88%D0%BD%D1%8B%D0%B9-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%BD%D0%B0.jpg?s=2048x2048&w=is&k=20&c=G81o0BVYoEabvmudxaYLhT15lmUGs5POWE5B1FneXnE=',
        creationDate: '29.07.2023',
        comments: ['not bad', 'you know', 'this is amazing', 'lol']
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