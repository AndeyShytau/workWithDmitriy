import {GET_USER_NEWS} from "../../api/constants.js";
import {newsByHashTag} from "./newsByHashTag.js";

export const popUpWindow = ()=>{
    const modal = document.querySelector('#modal');

    const wrapper = document.getElementById('newsListBlock');

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
    function handleClick(e) {
        if (e.target.classList.contains("hashtag")) {
            modal.style.display = 'block';
            getRequests(GET_USER_NEWS).then((res) => newsByHashTag(res, 'modal-content', e.target));
        }

    }

    wrapper.addEventListener('click', handleClick);
}

