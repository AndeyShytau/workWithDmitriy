import {friendsArray} from "../../main/constants.js";
import{currentUser as myPage} from "../../main/constants.js";

const messagesList = document.getElementById('messagesList');

export const getMessages = (friend, newMessage) => {
    const currentUser = friendsArray.find(function (item) {
        return Number(item.id) === Number(friend.id);
    });

    if (newMessage) {
        currentUser.messages.push({
            idFrom: myPage.id,
            message: newMessage
        });
    }

    const listMessages = currentUser.messages.map((item) => {
        if (item.idFrom === myPage.id) {
            return `<div class="messages my_messages "><span>${item.message}</span></div>`
        } else {
            return `<div class="messages"><span>${item.message}</span></div>`
        }

    });

    messagesList.innerHTML = listMessages.join('')

}