export const getRequests = (url) => fetch(url)
    .then(resp => resp.json());