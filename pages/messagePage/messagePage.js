import {checkAuth} from "../../helpers/helpers.js";
import {getTemplate} from "../../modules/getTemplate/getTemplate.js";
import {getPageTitlesAndDescriptions} from "../constants.js";
import {friendsArray} from "../main/constants.js";

// checkAuth();
getTemplate(getPageTitlesAndDescriptions.messages);

const addFriendList = (arr, blockId) => {
    const blockForListFriends = document.getElementById(blockId);
    const listFriends = arr.map((item) => {
        // console.log(item.messages)
        return `<li id="${item.id}" class="friendsList"><img src=${item.ava} alt="photo">${item.name}<span>${item.id}</span></li>`
    })
    blockForListFriends.innerHTML = listFriends.join('');
}

const addMessages = (findObj) => {
    const messagesList = document.getElementById('messagesList');

    const listMessages = findObj.messages.map((item) => {
        return `<div class="messages">${item}</div>`
    })
    messagesList.innerHTML = listMessages.join('')
}


let foundObject

const addClassActiveFriend = () => {
    const borderOfFunction = document.getElementById('friendsList');
    const arrFromFriends = document.getElementsByClassName('friendsList')
    let idToLookFor

    function handleClick(e) {
        if (e.target.classList.contains("friendsList")) {
            Array.from(arrFromFriends).map((item) => {
                // console.log(item)
                item.classList.remove('activeFriend');
                idToLookFor = e.target.id;
                // console.log(idToLookFor)
            })
            e.target.classList.add('activeFriend');


            foundObject = friendsArray.find(function (item) {
                return item.id == idToLookFor;
            });
            console.log(foundObject)
            addMessages(foundObject);

            pushMessage(foundObject.messages)

        }
    }

    borderOfFunction.addEventListener('click', handleClick);

}


const pushMessage = (arrayWithPersonMessages) => {
    const sendMessage = document.getElementById('sendMessage');
    const sendMessageArea = document.getElementById('sendMessageArea');

    sendMessage.addEventListener('click', function (e) {
        if (sendMessageArea.value.length >= 1) {
            arrayWithPersonMessages.push(sendMessageArea.value);
            sendMessageArea.value = '';
        }

    })

}



addClassActiveFriend()


addFriendList(friendsArray, 'friendsList')

// addEventListener('click', function (e) {
//     console.log(e)
// })

// $('.friendsList').click(function (event) {
//     $('.friendsList').removeClass("activeFriend");
//     $(this).addClass("activeFriend");
// });

