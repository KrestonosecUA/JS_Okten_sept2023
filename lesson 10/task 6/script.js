//#Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const kgInput = document.getElementById('kgInput');
const lbsOutput = document.getElementById('lbsOutput');

// Додаємо обробник події "input" (спрацьовує при введенні даних)
kgInput.addEventListener('input', () => {
    const kg = parseFloat(kgInput.value); // Отримуємо значення з input
    if (isNaN(kg)) {
        lbsOutput.textContent = 0; // Якщо введено некоректне значення
    } else {
        const lbs = (kg * 2.20462).toFixed(2); // Конвертуємо в фунти (2.20462 фунта в 1 кг)
        lbsOutput.textContent = lbs; // Виводимо результат
    }
});

