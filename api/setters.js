import {SET_MESSAGES_DATA, SET_NEWS_DATA, SET_PROFILE_DATA} from "./constants.js";

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


export const setUserNewsData = (newData) => {
    try {
        return fetch(SET_NEWS_DATA, {
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
