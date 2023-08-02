import {AUTH} from "./constants.js";

export const auth = (newData) => {
    try {
        return fetch(AUTH,
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