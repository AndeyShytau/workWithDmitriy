import {currentUser, currentUser as user} from "../../pages/main/constants.js";

export const editProfileForm = () => {
    const editForm = document.getElementById('editForm');
    const saveEditFormButton = document.getElementById('saveEditFormButton');
    const {
        id,
        avatar,
        gender,
        age,
        name,
        secondName,
        aboutMe,
        status,
        city,
        phoneNumber,
        telegram,
        instagram,
        twitter,
        friends,
        subscribers
    } = user;
    const [nameForm, secondNameForm, ageForm, statusForm, cityForm, phoneNumberForm, telegramForm, instagramForm, twitterForm, aboutMeForm] = editForm;

    nameForm.value = name;
    secondNameForm.value = secondName;
    ageForm.value = age;
    statusForm.value = status;
    cityForm.value = city;
    phoneNumberForm.value = phoneNumber;
    telegramForm.value = telegram;
    instagramForm.value = instagram;
    twitterForm.value = twitter;
    aboutMeForm.value = aboutMe;

    saveEditFormButton.onclick = () => {
        user.name = nameForm.value;
        user.surname = secondNameForm.value;
        user.age = ageForm.value;
        user.status = statusForm.value;
        user.city = cityForm.value;
        user.phone = phoneNumberForm.value;
        user.telegramm = telegramForm.value;
        user.instagramm = instagramForm.value;
        user.twitter = twitterForm.value;
        user.brif = aboutMeForm.value;
        console.log(user);
    }
}