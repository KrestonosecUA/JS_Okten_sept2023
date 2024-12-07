//#NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

// Створюємо масив із 100 об'єктів
const array = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    value: `Об'єкт ${index + 1}`
}));

let currentPage = 0; // Поточна сторінка
const itemsPerPage = 10; // Кількість об'єктів на сторінці

// Елементи кнопок та контейнера
const container = document.getElementById('container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Функція для відображення об'єктів на поточній сторінці
function renderPage(page) {
    // Очищаємо контейнер
    container.innerHTML = '';

    // Розраховуємо початковий та кінцевий індекс для об'єктів
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;

    // Додаємо об'єкти на сторінку
    array.slice(start, end).forEach(item => {
        const div = document.createElement('div');
        div.textContent = `ID: ${item.id}, Значення: ${item.value}`;
        container.appendChild(div);
    });

    // Вимикаємо кнопки, якщо це перша або остання сторінка
    prevButton.disabled = page === 0;
    nextButton.disabled = end >= array.length;
}

// Обробники подій для кнопок
prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage -= 1;
        renderPage(currentPage);
    }
});

nextButton.addEventListener('click', () => {
    if ((currentPage + 1) * itemsPerPage < array.length) {
        currentPage += 1;
        renderPage(currentPage);
    }
});

// Відображаємо першу сторінку при завантаженні
renderPage(currentPage);