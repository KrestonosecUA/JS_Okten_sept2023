//#whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.

// Контейнер для відображення рецептів
const recipesContainer = document.getElementById('recipesContainer');

// Функція для отримання даних з API
async function fetchRecipes() {
    try {
        // Отримуємо дані з API
        const response = await fetch('https://dummyjson.com/recipes');
        if (!response.ok) {
            throw new Error('Не вдалося отримати дані з API');
        }
        const data = await response.json();

        // Відображаємо інформацію про всі рецепти
        renderRecipes(data.recipes);
    } catch (error) {
        console.error(error.message);
        recipesContainer.textContent = 'Сталася помилка при завантаженні даних.';
    }
}

// Функція для відображення рецептів
function renderRecipes(recipes) {
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.style.border = '1px solid #ccc';
        recipeCard.style.margin = '10px';
        recipeCard.style.padding = '15px';
        recipeCard.style.borderRadius = '8px';
        recipeCard.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';

        // Створюємо вміст картки
        const recipeContent = `
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}" alt="${recipe.name}" style="width: 100%; max-width: 400px; height: auto; border-radius: 8px; margin-bottom: 10px;">
            <p><strong>Rating:</strong> ${recipe.rating} (${recipe.reviewCount} reviews)</p>
            <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
            <p><strong>Meal Type:</strong> ${recipe.mealType.join(', ')}</p>
            <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
            <p><strong>Prep Time:</strong> ${recipe.prepTimeMinutes} minutes</p>
            <p><strong>Cook Time:</strong> ${recipe.cookTimeMinutes} minutes</p>
            <p><strong>Servings:</strong> ${recipe.servings}</p>
            <p><strong>Calories Per Serving:</strong> ${recipe.caloriesPerServing}</p>
            <p><strong>Tags:</strong> ${recipe.tags.join(', ')}</p>
            <p><strong>Ingredients:</strong></p>
        `;

        recipeCard.innerHTML = recipeContent;

        // Список інгредієнтів
        const ingredientsList = document.createElement('ul');
        recipe.ingredients.forEach(ingredient => {
            const listItem = document.createElement('li');
            listItem.textContent = ingredient;
            ingredientsList.appendChild(listItem);
        });
        recipeCard.appendChild(ingredientsList);

        // Список інструкцій
        const instructionsTitle = document.createElement('p');
        instructionsTitle.textContent = 'Instructions:';
        recipeCard.appendChild(instructionsTitle);

        const instructionsList = document.createElement('ol');
        recipe.instructions.forEach(instruction => {
            const instructionItem = document.createElement('li');
            instructionItem.textContent = instruction;
            instructionsList.appendChild(instructionItem);
        });
        recipeCard.appendChild(instructionsList);

        // Додаємо рецепт до контейнера
        recipesContainer.appendChild(recipeCard);
    });
}

// Завантаження даних при завантаженні сторінки
fetchRecipes();
