//#RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage
// та додає в нього об'єкт сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName, objToAdd) {
    // Отримуємо масив з localStorage
    let storedArray = localStorage.getItem(arrayName);

    // Якщо масив ще не існує, створюємо новий
    if (!storedArray) {
        storedArray = [];
    } else {
        // Якщо існує, перетворюємо його зі строки в масив
        storedArray = JSON.parse(storedArray);
    }

    // Додаємо новий об'єкт до масиву
    storedArray.push(objToAdd);

    // Зберігаємо оновлений масив назад у localStorage
    localStorage.setItem(arrayName, JSON.stringify(storedArray));
}

addToLocalStorage('sessions', {name: 'hello'})
