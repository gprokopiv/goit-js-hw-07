// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let ingredientsEl = document.querySelector('#ingredients');

ingredients.map(function(ingredient) {
    const listEl = document.createElement('li');
    listEl.textContent = ingredient;
    ingredientsEl.append(listEl);
});
