import {SET_MESSAGES_DATA, SET_NEWS_DATA, SET_PROFILE_DATA} from "./constants.js";

export const setProfileData = async (newData) => {
    try {
        await fetch(SET_PROFILE_DATA, {
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



export const setUserNewsData = async (newData) => {
    try {
        const response = await fetch(SET_NEWS_DATA, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newData)
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
};


export const setUserMessagesData = async (newData) => {
    try {
        const response = await fetch(SET_MESSAGES_DATA, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newData)
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
};
