import {REGISTRATION_NEW_USER} from "./constants.js";

export const registrationUser = (newData) => {
    try {
        return fetch(REGISTRATION_NEW_USER,
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