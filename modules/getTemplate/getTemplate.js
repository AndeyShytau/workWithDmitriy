import {getHead} from "../getHead/getHead";
import {getHeader} from "../getHeader/getHeader";
import {getMenu} from "../getMenu/menu";
import {getFooter} from "../getFooter/getFooter";

export const getTemplate = () => {
    getHead();
    getHeader();
    getMenu();
    getFooter();
}