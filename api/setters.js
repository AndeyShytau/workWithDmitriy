import {SET_NEWS_DATA} from "./constants.js";


export const setUserNewsData = (data) => {
    try {
        return fetch(SET_NEWS_DATA, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }).then((resp) => resp.json())
    }catch (error){
        console.error(error);
    }
}