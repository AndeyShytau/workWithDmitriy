export const colorPanel = (footer, header) => {
    const colorButton = document.getElementById('colorButton');
    let isColorButton = true;
    colorButton.addEventListener('click', function (e) {
        if(isColorButton === true){
            e.target.nextElementSibling.style.height = '340px';
            e.target.textContent = 'Закрыть панель';
            isColorButton = !isColorButton;
        }else{
            e.target.nextElementSibling.style.height = '0px';
            e.target.textContent = 'Открыть панель';
            isColorButton = !isColorButton;
        }
    });
    const colorPicker = new iro.ColorPicker(".colorPicker", {
        // width: 280,
        color: "#5C6898",
    });
    colorPicker.on(["color:init", "color:change"], function (color) {
        const hex = colorPicker.color.hexString;
        footer.style.backgroundColor = hex;
        header.style.backgroundColor = hex;
    });
}