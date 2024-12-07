//#2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1

const count = localStorage.getItem('count') ?? 0; //отримує дані зі сховища

let number = document.getElementById('number-text');

const newCount = (Number(count) + 1).toString();

number.innerText = newCount;

localStorage.setItem('count', newCount); //записує дані у сховище
