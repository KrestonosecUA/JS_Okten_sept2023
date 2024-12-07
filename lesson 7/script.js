//#XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];

users.push(
    new User(1, 'Natalia', 'Pokotilo', 'natalia123@gmail.com', '+380987667543'),
    new User(2, 'Oleksandr', 'Lazarets', 'sanya_f@gmail.com', '+380677967946'),
    new User(3, 'Mykuta', 'Pogorilets', 'm_m23@ukr.net', '+380984545455'),
    new User(5, 'Mary', 'Lopachuk', 'mariya_pp@gmail.com', '+380978649541'),
    new User(7, 'Ivan', 'Ivanchyk', 'vanya@gmail.com', '+380677967342'),
    new User(6, 'Kolya', 'Petrenko', 'kkkfffppp@gmail.com', '+380677945366'),
    new User(4, 'Nataliya', 'Letsyk', 'nata456@gmail.com', '+380686767677'),
    new User(8, 'Mariya', 'Kopets', 'mary_k@ukr.net', '+380981212122'),
    new User(9, 'Yuriy', 'Nazarenko', 'yura34@gmail.com', '+380677967343'),
    new User(10, 'Larusa', 'Vitkovets', '123_lara_123@gmail.com', '+380986756453')
);

console.log(users);

//#2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUsers = users.filter(function (user) {
    if (user.id % 2 === 0) {
        return true;
    }
});

console.log(filterUsers);

//#pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUsers = users.sort((a, b) => a.id - b.id);

console.log(sortUsers);

//#nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'Natalia', 'Pokotilo', 'natalia123@gmail.com', '+380987667543', ['egg', 'banana']),
    new Client(2, 'Oleksandr', 'Lazarets', 'sanya_f@gmail.com', '+380677967946', ['cherry', 'banana', 'ananas']),
    new Client(3, 'Mykuta', 'Pogorilets', 'm_m23@ukr.net', '+380984545455', ['cherry']),
    new Client(5, 'Mary', 'Lopachuk', 'mariya_pp@gmail.com', '+380978649541', ['sheese', 'broad', 'fish', 'meat']),
    new Client(7, 'Ivan', 'Ivanchyk', 'vanya@gmail.com', '+380677967342', ['fish']),
    new Client(6, 'Kolya', 'Petrenko', 'kkkfffppp@gmail.com', '+380677945366', ['egg', 'cherry', 'banana']),
    new Client(4, 'Nataliya', 'Letsyk', 'nata456@gmail.com', '+380686767677', ['jam', 'broad']),
    new Client(8, 'Mariya', 'Kopets', 'mary_k@ukr.net', '+380981212122', ['jam', 'egg']),
    new Client(9, 'Yuriy', 'Nazarenko', 'yura34@gmail.com', '+380677967343', ['kokos']),
    new Client(10, 'Larusa', 'Vitkovets', '123_lara_123@gmail.com', '+380986756453', ['kokos', 'ananas', 'banana'])
];

console.log(clients);

//#8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClients = clients.sort((a, b) => a.order.length - b.order.length);

console.log(sortClients);

//#vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    }

    this.info = function() {
        console.log('Model - ', this.model);
        console.log('Producer - ', this.producer);
        console.log('Year - ', this.year);
        console.log('MaxSpeed - ', this.maxSpeed);
        console.log('Volume - ', this.volume);
        //for (const key in this) {
        //    if (typeof this[key] === 'function') continue;
        //    console.log(`${key} - ${this[key]}`);
        //}
    }

    this.increaseMaxSpeed = function(newSpeed) {
        console.log('\nЗміна швидкості на ', newSpeed, ' км');
        this.maxSpeed = this.maxSpeed + newSpeed;
    }

    this.changeYear = function(newValue) {
        console.log('\nЗміна року випуску на ', newValue);
        this.year = newValue;
    }

    this.addDriver = function(driver) {
        this.driver = driver;
        myCar.info();
        console.log('Driver - ', this.driver);
    }

}

let myCar = new Car('Focus 2', 'Ford', 2009, 210, 1.6);

console.log(myCar);

myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(20);
myCar.changeYear(2013);
myCar.info();

let myDriver = {
    name: 'Oleksandr',
    age: 32,
    license: 'BK9409EX'
}

myCar.addDriver(myDriver);

//#5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    }
    info() {
        console.log('Model - ', this.model);
        console.log('Producer - ', this.producer);
        console.log('Year - ', this.year);
        console.log('MaxSpeed - ', this.maxSpeed);
        console.log('Volume - ', this.volume);
        //for (const key in this) {
        //    if (typeof this[key] === 'function') continue;
        //    console.log(`${key} - ${this[key]}`);
        //}
    }
    increaseMaxSpeed(newSpeed) {
        console.log('\nЗміна швидкості на ', newSpeed, ' км');
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    changeYear(newValue) {
        console.log('\nЗміна року випуску на ', newValue);
        this.year = newValue;
    }
    addDriver(driver) {
        this.driver = driver;
        myCar.info();
        console.log('Driver - ', this.driver);
    }

}

let myCar2 = new Car2('Focus 2', 'Ford', 2009, 210, 1.6);

console.log(myCar2);

myCar2.drive();
myCar2.info();
myCar2.increaseMaxSpeed(20);
myCar2.changeYear(2013);
myCar2.info();

let myDriver2 = {
    name: 'Oleksandr',
    age: 32,
    license: 'BK123'
}

myCar2.addDriver(myDriver2);

//#zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let cinderellas = [
    new Cinderella('Anna', 18, 38),
    new Cinderella('Vanya', 22, 42),
    new Cinderella('Maya', 26, 40),
    new Cinderella('Ivanna', 43, 39),
    new Cinderella('Anna', 34, 38),
    new Cinderella('Inna', 24, 40),
    new Cinderella('Mariya', 29, 39),
    new Cinderella('Diana', 16, 34),
    new Cinderella('Mariya', 38, 38),
    new Cinderella('Karina', 22, 37),
];

let prince = new Prince('Maxym', 32, 38);

for (let i in cinderellas) {
    if (cinderellas[i].footSize === prince.shoe) {
        console.log(cinderellas[i]);
    }
}

console.log(cinderellas.find((cinderella) => cinderella.footSize === prince.shoe));

//#gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (callback) {
    const yourArray = this;
    for (const i of yourArray) {
        callback(i);
    }
};

[23, -11, 17].myForEach((x) => console.log(x))

Array.prototype.myFilter = function (predicate) {
    const arr = [];
    for (const i of this) {
        if (predicate(i)) {
            arr.push(i)
        }
    }
}

let users2 = [
    {id: 1, name: 'Максим', age: 32, status: false},
    {id: 2, name: 'Віктор', age: 23, status: true},
    {id: 3, name: 'Олександр', age: 40, status: true},
    {id: 4, name: 'Олександр', age: 33, status: false},
    {id: 5, name: 'Вікторія', age: 32, status: false},
    {id: 6, name: 'Олена', age: 25, status: true},
    {id: 7, name: 'Марія', age: 21, status: false},
    {id: 8, name: 'Максим', age: 32, status: true},
    {id: 9, name: 'Віктор', age: 35, status: false},
    {id: 10, name: 'Леонід', age: 30, status: true},
];

const res = users2.myFilter((user) => user.status)

console.log(res)