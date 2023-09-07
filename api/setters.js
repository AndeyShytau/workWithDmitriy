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
    } catch (error){
        console.error(error);
    }
}

export const setProfileData = (newData) => {
    try {
        return fetch(SET_PROFILE_DATA,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(newData)
            });
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}


export const setUserMessagesData = (newData) => {
    try {
        return fetch(SET_MESSAGES_DATA, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newData)
        });
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
};
