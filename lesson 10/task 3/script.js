//#ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та
// вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let myForm = document.createElement('form');

let name = document.createElement('input');
let surname = document.createElement('input');
let age = document.createElement('input');
let message = document.createElement('div');

let button = document.createElement('button');

myForm.classList.add('form');
name.classList.add('name');
surname.classList.add('surname');
age.classList.add('age');
message.classList.add('div');

name.placeholder = 'Введіть своє ім\'я';
surname.placeholder = 'Введіть своє прізвище';
age.placeholder = 'Введіть свій вік';

button.innerText = 'SAVE';

myForm.append(name, surname, age, button);
document.body.appendChild(myForm);
document.body.appendChild(message);

button.addEventListener('click', (event) => {
    event.preventDefault();

    message.innerText = `${name.value} ${surname.value} ${age.value}`;

    name.value = '';
    surname.value = '';
    age.value = '';

})
