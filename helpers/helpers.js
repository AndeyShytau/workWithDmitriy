export const getHomePath = () => {
    const currentUrl = window.location.href;
    const urlSegments = currentUrl.split('/');
    const rootPath = urlSegments.slice(0, 3).join('/');

    if (urlSegments.includes('workWithDmitriy')) {
        return `${rootPath}/workWithDmitriy`;
    }

    return rootPath;
}

export const checkAuth = () => {
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = `${getHomePath()}/pages/auth/index.html`;
    }
}

export const getDateTime = () => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    return `${date} ${time}`
};

export const hashTags = (text) => text.replace(/#[0-9A-Za-zА-Яа-яё]+/gi, `<span class="hashtag">$&</span>`);


export const badLanguage = (text) => text.replace(/[хуй\пизда\сука\блядь]+/gi, function (a) {
    if (a == "хуй") {
        return "х*й"
    } else if (a == "пизда") {
        return "п***а"
    } else if (a == "сука") {
        return "с**а"
    } else if (a == "блядь") {
        return "б***ь"
    } else {
        return a
    }
});

export const checkTheme = () => {
    const body = document.getElementsByTagName('body');
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const theme = JSON.parse(localStorage.getItem('theme'));

    if (theme) {
        body[0].style.background = theme.body;
        header.style.background = theme.header;
        footer.style.background = theme.footer;
    }
}