import {friendsArray} from "../../main/constants.js";

const messagesList = document.getElementById('messagesList');

export const getMessages = (friend, newMessage) => {
    const currentUser = friendsArray.find(function (item) {
        return Number(item.id) === Number(friend.id);
    });

    if (newMessage) {
        currentUser.messages.push(newMessage);
    }

    const listMessages = currentUser.messages.map((item) => {
        return `<div class="messages">${item}</div>`
    });

    messagesList.innerHTML = listMessages.join('')
}