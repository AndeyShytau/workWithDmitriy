import {manageActiveFriend} from "./getMessagesLayout.js";

export const handleMessageClick = (e) => {
    manageActiveFriend.currentFriend = e.target;

    if (manageActiveFriend.prevFriend === null) {
        manageActiveFriend.prevFriend = manageActiveFriend.currentFriend;
    }

    if (manageActiveFriend.prevFriend !== manageActiveFriend.currentFriend) {
        manageActiveFriend.prevFriend.classList.remove('activeFriend');
    }

    manageActiveFriend.currentFriend.classList.add('activeFriend');
    manageActiveFriend.prevFriend = manageActiveFriend.currentFriend;
}