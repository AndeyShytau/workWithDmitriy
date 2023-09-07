import {checkAuth} from "../../helpers/helpers.js";
import {getTemplate} from "../../modules/getTemplate/getTemplate.js";
import {getPageTitlesAndDescriptions} from "../constants.js";

checkAuth();
getTemplate(getPageTitlesAndDescriptions.messages);