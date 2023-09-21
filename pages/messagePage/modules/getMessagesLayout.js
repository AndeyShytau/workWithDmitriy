import {friendsArray} from "../../main/constants.js";
import {handleMessageClick} from "./handleMessageCllick.js";
import {getMessages} from "./getMessages.js";
import {defaultActiveUserIndex} from "../constants.js";

export const manageActiveFriend = {
    currentFriend: friendsArray[defaultActiveUserIndex] || null,
    prevFriend: null
};

const friendsList = document.getElementById('friendsList');
const sendMessageButton = document.getElementById('sendMessage');
const sendMessageArea = document.getElementById('sendMessageArea');


friendsList.addEventListener('click', (e) => {
    handleMessageClick(e);
    getMessages(manageActiveFriend.currentFriend);
});

sendMessageButton.addEventListener(
    'click',
    () => {
        getMessages(manageActiveFriend.currentFriend, sendMessageArea.value);
        sendMessageArea.value = '';
    }
);

export const getMessageLayout = () => {
    const listFriends = friendsArray.map((item, index) => {
        return `
            <li
            id=${item.id}
            class="friendsList ${Number(index) === defaultActiveUserIndex && "activeFriend"}"
            >
                <img src=${item.ava} alt="photo">
                    <span>${item.name}</span>
                    <span>${item.id}</span>
            </li>`
    });

    friendsList.innerHTML = listFriends.join('');
}