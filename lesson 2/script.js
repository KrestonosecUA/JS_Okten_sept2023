//Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let objects = [4, 6, 2,'hello', 'white', true, 3.14, 'okten', [11, 2, 3], -45];
console.log(objects);
console.log(objects[0]);
console.log(objects[1]);
console.log(objects[2]);
console.log(objects[3]);
console.log(objects[4]);
console.log(objects[5]);
console.log(objects[6]);
console.log(objects[7]);
console.log(objects[8]);
console.log(objects[9]);

//#LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Володар Перснів. Частина перша: Братство Персня',
    pageCount: 704,
    genre: 'фентезі'
};
let book2 = {
    title: 'Нові Темні Віки. Книга 1. Колонія',
    pageCount: 904,
    genre: 'фантастика'
};
let book3 = {
    title: 'Довбуш. Гідність або забуття',
    pageCount: 240,
    genre: 'історичний роман'
};
console.log(book1);
console.log(book2);
console.log(book3);

//#sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'Географія 10 клас',
    pageCount: 192,
    genre: 'навчальний',
    authors: [
        {name: 'Віталій Безуглий', age: 48},
        {name: 'Галина Лисичарова', age: 42}
    ]
};
let book5 = {
    title: 'Алгебра 10 клас',
    pageCount: 400,
    genre: 'навчальний',
    authors: [
        {name: 'Анатолій Мерзляк', age: 44},
        {name: 'Дмитро Номіровський', age: 52},
        {name: 'Віталій Полонський', age: 49},
        {name: 'Михайло Якір', age: 45}
    ]
};
let book6 = {
    title: 'Відьмак. Останнє бажання. Книга 1',
    pageCount: 288,
    genre: 'фентезі',
    authors: [
        {name: 'Анджей Сапковський', age: 73 }
    ]
};
console.log(book4);
console.log(book5);
console.log(book6);

//#jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Ivan', username: 'vanya123', password: '123123'},
    {name: 'Olga', username: 'kitness', password: 'qwerty'},
    {name: 'Mariya', username: 'milashka', password: 'masha1999'},
    {name: 'Ivan', username: 'IvanPetroxich2', password: 'derby23@'},
    {name: 'Bogdan', username: 'bodyaHost', password: 'bodya_pik'},
    {name: 'Vitaliy', username: 'vitalka345', password: 'qwe123'},
    {name: 'Olga', username: 'Lopachuk', password: 'trend45'},
    {name: 'Vasyl', username: 'metronom7', password: 'ktc2012'},
    {name: 'Maksym', username: 'krestonosecUA', password: 'romashka'},
    {name: 'Alisa', username: 'raketa56', password: '123456543'},
];
console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);

//#coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде
// одновимірний масив з 21 значенням вичключаємо одразу

let temperature = [
    {day: 1, temp: {morning: 8, day: 12, evening: 9} },
    {day: 2, temp: {morning: 8, day: 12, evening: 9} },
    {day: 3, temp: {morning: 8, day: 12, evening: 9} },
    {day: 4, temp: {morning: 8, day: 12, evening: 9} },
    {day: 5, temp: {morning: 8, day: 12, evening: 9} },
    {day: 6, temp: {morning: 8, day: 12, evening: 9} },
    {day: 7, temp: {morning: 8, day: 12, evening: 9} },
];

console.log(temperature);

//Логічні розгалуження:
//
// #bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('Введи довільне числове значення:');

if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

//#3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = Math.floor(Math.random() * (59 - 0 + 1) + 0);
console.log('Час:', time);

if (time >= 0 && time < 15) {
    console.log('1 частина години');
} else if (time >= 15 && time < 30) {
    console.log('2 частина години');
} else if (time >= 30 && time < 45) {
    console.log('3 частина години');
} else if (time >= 45 && time <= 59) {
    console.log('4 частина години');
} else {
    console.log('Невірно введені дані!');
}

//#UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = Math.floor(Math.random() * (31 - 1 + 1) + 1);
console.log('День номер:', day);

if (day >= 1 && day <= 10) {
    console.log('1 декада');
} else if (day > 10 && day <= 20) {
    console.log('2 декада');
} else if (day > 20 && day <= 31) {
    console.log('3 декада');
} else {
    console.log('Невірно введені дані!');
}

//#KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let day_week = +prompt('Введи номер дня тижня: ');

switch (day_week) {
    case 1:
        console.log('Monday: OktenSchool');
        break;
    case 2:
        console.log('Tuesday: English');
        break;
    case 3:
        console.log('Wednesday: OktenSchool, Gym');
        break;
    case 4:
        console.log('Thursday: English, Pool');
        break;
    case 5:
        console.log('Friday: Cinema');
        break;
    case 6:
        console.log('Saturday: Housework, Gym');
        break;
    case 7:
        console.log('Sunday: Relax');
        break;
    default:
        console.log('Невірно введені дані');
}

//#uwsz1RnTQJ1
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let a = +prompt('Введи перше число: ');
let b = +prompt('Введи друге число: ');
console.log('a = ', a, 'b = ', b)

if (a > b) {
    console.log('Більше число буде:', a);
} else if (a < b) {
    console.log('Більше число буде: ', b);
} else {
    console.log('Числа рівні');
}

//#iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
//  тобто ті, які приводиться до false, а це 0 null undefined і тд).

let y = prompt('y = ');

if (y === false || y === 0 || y === '' || y === undefined || y == null) {
    y = 'default';
}
console.log(y)

//#awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
// його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5]['monthDuration'] > 5) {
    console.log('Супер');
}