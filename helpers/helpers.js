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