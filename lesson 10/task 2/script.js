//#j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form = document.createElement('form');
let age = document.createElement('input');
let button = document.createElement('button');
let message = document.createElement('div');

form.classList.add('form');
age.classList.add('age');
button.classList.add('button');
message.classList.add('message');

age.placeholder = 'Введіть свій вік';
button.innerText = 'Перевірити вік';

form.append(age, button);
document.body.appendChild(form);
document.body.appendChild(message);

button.addEventListener('click', (event) => {
    event.preventDefault();
    let my_age = Number(age.value);

    if (isNaN(my_age) || my_age === 0) {
        message.innerText = 'Будь ласка, введіть коректний вік.';
        message.style.color = 'red';
    } else if (my_age < 18) {
        message.innerText = 'Вам ще немає 18 років.';
        message.style.color = 'orange';
    } else {
        message.innerText = 'Ваш вік підтверджено!';
        message.style.color = 'green';
    }
});