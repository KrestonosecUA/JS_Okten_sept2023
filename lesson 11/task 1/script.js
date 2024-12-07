//#HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

// Контейнер для відображення корзин
const cartContainer = document.getElementById('cartContainer');

// Функція для отримання даних з API
async function fetchCarts() {
    try {
        // Отримуємо дані з API
        const response = await fetch('https://dummyjson.com/carts');
        if (!response.ok) {
            throw new Error('Не вдалося отримати дані з API');
        }
        const data = await response.json();

        // Відображаємо інформацію про кожну корзину
        renderCarts(data.carts);
    } catch (error) {
        console.error(error.message);
        cartContainer.textContent = 'Сталася помилка при завантаженні даних.';
    }
}

// Функція для відображення корзин
function renderCarts(carts) {
    carts.forEach(cart => {
        const cartDiv = document.createElement('div');
        cartDiv.style.border = '1px solid #ccc';
        cartDiv.style.margin = '10px';
        cartDiv.style.padding = '10px';

        // Виводимо всі поля корзини
        const cartDetails = `
            <p><strong>ID:</strong> ${cart.id}</p>
            <p><strong>User ID:</strong> ${cart.userId}</p>
            <p><strong>Total Products:</strong> ${cart.totalProducts}</p>
            <p><strong>Total Quantity:</strong> ${cart.totalQuantity}</p>
            <p><strong>Total:</strong> $${cart.total}</p>
            <p><strong>Discounted Total:</strong> $${cart.discountedTotal}</p>
            <p><strong>Products:</strong></p>
        `;

        cartDiv.innerHTML = cartDetails;

        // Створюємо список продуктів
        const productList = document.createElement('ul');
        cart.products.forEach(product => {
            const productItem = document.createElement('li');

            // Відображаємо інформацію про продукт
            productItem.innerHTML = `
                <p><strong>Title:</strong> ${product.title}</p>
                <p><strong>Price:</strong> $${product.price}</p>
                <p><strong>Quantity:</strong> ${product.quantity}</p>
                <p><strong>Total:</strong> $${product.total}</p>
                <p><strong>Discount Percentage:</strong> ${product.discountPercentage}%</p>
                <img src="${product.thumbnail}" alt="${product.title}" style="width: 100px; height: auto; margin-top: 5px;">
            `;

            productItem.style.marginBottom = '10px'; // Додаємо трохи відступу між продуктами
            productList.appendChild(productItem);
        });

        cartDiv.appendChild(productList);
        cartContainer.appendChild(cartDiv);
    });
}

// Завантаження даних при завантаженні сторінки
fetchCarts();
