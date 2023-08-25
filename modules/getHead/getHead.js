 export const getHead = () => {
    let head = document.getElementById('head');

    head.innerHTML += `
    <link rel="stylesheet" type="text/css" href="../../main/style.css">
    <link rel="stylesheet" type="text/css" href="/modules/addNews/style.css">
    <link rel="stylesheet" type="text/css" href="/modules/getUserInfo/style.css">
    <link rel="stylesheet" type="text/css" href="/modules/getFooter/footer.css">
    <link rel="stylesheet" type="text/css" href="/modules/getMenu/menu.css">
    <link rel="stylesheet" type="text/css" href="/modules/getHeader/header.css">
    <link rel="stylesheet" type="text/css" href="/modules/editProfile/editProfile.css">`
}

