import {getTemplate} from "../../modules/getTemplate/getTemplate.js";
import {getPageTitlesAndDescriptions} from "../constants.js";
import {getMessageLayout, manageActiveFriend} from "./modules/getMessagesLayout.js";
import {getMessages} from "./modules/getMessages.js";

getTemplate(getPageTitlesAndDescriptions.messages);

getMessageLayout();
getMessages(manageActiveFriend.currentFriend);