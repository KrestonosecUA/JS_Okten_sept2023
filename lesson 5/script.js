//#I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let squareRectangle = (a, b) =>  a * b;

let result1 = squareRectangle(5, 8)
console.log('Площа прямокутника:', result1)

//#ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

let squareCircle = (r) => Math.PI * r * r;

let result2 = squareCircle(10);
console.log('Площа круга:', result2);

//#Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let squareCilindre = (h, r) => 2 * Math.PI * r * (h + r);

let result3 = squareCilindre(5, 2);
console.log('Площа повної поверхні циліндра:', result3);

//#SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

let elementsOfArray = (array) => {
    for (const i of array) {
        console.log(i);
    }
}

animals = ['cat', 'dog', 'horse', 'pig', 'chicken'];
elementsOfArray(animals);

//#59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let addParagraph = (p) => document.write(`<p class="paragraph">${p}</p>`);


addParagraph('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
addParagraph('Другий параграф');

//#hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let addList = (list_item) => {
    document.write(`<ul class="list_hw6">`);
    for (let i = 1; i <= 3; i++) {
        document.write(`<li>${i} ${list_item}</li>`);
    }
    document.write(`</ul>`);
}

addList('Елемент списку');

//#0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let addList2 = (list_item, k) =>{
    document.write(`<ul class="list_hw7">`);
    for (let i = 1; i <= k; i++) {
        document.write(`<li>${i} ${list_item}</li>`);
    }
    document.write(`</ul>`);
}

addList2('Елемент списку', 7);

//#gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let addListOfArray = (array) => {
    document.write(`<ul class="list_hw8">`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}
let cars = ['Ford', 'Mercedes', 'BMW', 'Opel', 'Tesla', 'Renault', 'Volkswagen'];
addListOfArray(cars);

//#bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let addObjectOfArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        document.write(`
        <div class="users">
            <p class="users_info">${array[i].id} ${array[i].name} ${array[i].age}</p>  
        </div>`);
    }
}
let users = [
    {id: 1, name: 'Максим', age: 32},
    {id: 2, name: 'Віктор', age: 23},
    {id: 3, name: 'Олександр', age: 40},
    {id: 4, name: 'Олександр', age: 33},
    {id: 5, name: 'Вікторія', age: 32},
    {id: 6, name: 'Олена', age: 25},
    {id: 7, name: 'Марія', age: 21},
    {id: 8, name: 'Максим', age: 32},
    {id: 9, name: 'Віктор', age: 35},
    {id: 10, name: 'Леонід', age: 30},
];

addObjectOfArray(users);

//#pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let minElementOfArray = (array) => {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
}
let numbers = [];

for (let i = 0; i < 20; i++) {
    numbers.push(Math.round(Math.random() * 100));
}
console.log(numbers);

let rezult4 = minElementOfArray(numbers)
console.log(rezult4);

//#EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let sum = (arr) =>{
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        s = s + arr[i];
    }

    return s;
}
let elements = [];

for (let i = 0; i < 5; i++) {
    elements.push(Math.round(Math.random() * 10));
}
console.log(elements);
console.log(sum(elements));

num = [1, 2, 10];
console.log(num);
console.log(sum(num));

//#kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr,index1,index2) => {
    let n = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = n;

    return arr;
}
let elem = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(elem);
console.log(swap(elem, 2, 7));

//#mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            let res = (sumUAH / currencyValues[i].value).toFixed(2);

            return exchangeCurrency + ' ' + res;
        }
    }
}

let currencies = [
    {currency: 'USD', value: 37.23},
    {currency: 'EUR', value: 40.50},
    {currency: 'PLN', value: 9.03},
    {currency: 'GBP', value: 45.30},
    {currency: 'CHF', value: 41.25},
];

let sumUAH = 10000;

let exchangeCurrency = 'PLN';

console.log(exchange(sumUAH,currencies,exchangeCurrency));

console.log('2 варіант задачі: ');
let exchange2 = (UAH,currencyValues,exchangeCurrency) => {
    let res = (sumUAH / exchangeCurrency).toFixed(2);

    return currencyValues + ' ' + res;
}

for (let i = 0; i < currencies.length; i++) {
    console.log(exchange2(sumUAH, currencies[i].currency, currencies[i].value));
}
