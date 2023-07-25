import {SET_PROFILE_DATA} from "./constants.js";

export const setProfileData = async (newData) => {
    try {
        let response = await fetch(SET_PROFILE_DATA, {
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