//створюємо змінні елементів

const keyValueInput = document.getElementById("key_value_input");
const buttonAdd = document.getElementById('button_add');
const keyValueList = document.getElementById("key_value_list");
const buttonSortByKey = document.getElementById('button_sort_key');
const buttonSortByValue = document.getElementById('button_sort_value');
const buttonDelete = document.getElementById('button_delete');

//створюємо масив із парами "Name=Value", які вводитимемо в інпут
let pairs = [];

// Додаємо пару "Name=Value" до списку
buttonAdd.addEventListener('click', () => {
    addPairs()
    updateList();
    keyValueInput.value = "";
});

keyValueInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        addPairs()
        updateList();
        keyValueInput.value = "";
    }
});


// Функція формування пари

function addPairs() {
    //прибираємо лищні пробіли
    const input = keyValueInput.value.trim();

    /*
    const regex = /^([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)$/;
    if (!regex.test(input)) {
        alert("Invalid format. Use 'Name=Value' ");
        return;
    }
    const [_, key, value] = input.match(regex);


     */
    const parts = input.split("=");
    if (parts.length !== 2) {
        alert("Invalid format. Use 'Name=Value' ");
        return null;
    }
    const key = parts[0].trim(); // Очищаємо пробіли навколо ключа
    const value = parts[1].trim(); // Очищаємо пробіли навколо значення

    const isValidKey = /^[a-zA-Z0-9А-Яа-я]+$/.test(key); // Перевірка форммату
    const isValidValue = /^[a-zA-Z0-9А-Яа-я]+$/.test(value); // Перевірка форммату

    if (!isValidKey || !isValidValue) {
        alert("Invalid input. Both name and value must be with letters and numbers.");
        return null;
    }

    pairs.push({ key, value });
}

// Оновлює текстове поле зі списком пар
function updateList() {
    //keyValueList.value = pairs.map((pair, index) => `${index + 1}. ${pair.key}=${pair.value}`).join("\n");

    let listString = "";

    for (let i = 0; i < pairs.length; i++) {
        listString += `${i + 1}. ${pairs[i].key}=${pairs[i].value}\n`;
    }

    keyValueList.value = listString.trim(); // Видаляємо зайвий перенос у кінці
}

// Сортуємо по ключам і значеннях
buttonSortByKey.addEventListener('click', () => {
    pairs.sort((a, b) => a.key.localeCompare(b.key));
    updateList();
});

buttonSortByValue.addEventListener('click', () => {
    pairs.sort((a, b) => a.value.localeCompare(b.value));
    updateList();
});

// Очищаємо поле
buttonDelete.addEventListener('click', () => {
    pairs = [];
    keyValueList.value = "";
});
