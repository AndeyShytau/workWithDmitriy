/*var userName = 'Vasiliy';
var message = 'Hello';
console.log(userName);

showMessage = () => {
alert(message+' '+userName)
};
showMessage();

var styles = ["Джаз", "Блюз"];
styles[2] = "Рок-н-ролл";
styles[1] = "Классика";
alert(styles.shift());
styles.unshift("Реп", "Регги");
console.log(styles);*/

const logoElem = document.getElementById("someButton");
console.log(logoElem);
const alertFunc = () => {
    console.log("sdvsd")
}
logoElem.onclick = alertFunc;

