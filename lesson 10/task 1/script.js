//#sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".


let textElement = document.createElement('div');
let button = document.createElement('button');

textElement.id = 'text';
textElement.textContent = 'Цей елемент зникне при натисканні кнопки';
button.id = 'hideButton';
button.textContent = 'Сховати елемент';

document.body.appendChild(textElement);
document.body.appendChild(button);

/*
button.addEventListener('click', () => {
    textElement.style.display = 'none';
});
*/

button.onclick = function () {
    textElement.style.display = 'none';
}

