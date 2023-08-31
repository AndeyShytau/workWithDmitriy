import {getHead} from "../getHead/getHead.js";
import {getHeader} from "../getHeader/getHeader.js";
import {getMenu} from "../getMenu/menu.js";
import {getFooter} from "../getFooter/getFooter.js";

export const getTemplate = (params) => {
    getHead(params);
    getHeader();
    getMenu();
    getFooter();
}