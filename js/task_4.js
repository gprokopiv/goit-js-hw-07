// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>


const counterValue = {
    value: 0,
    increment() {
        this.value +=1;
    },
    decrement(){
        this.value -=1;
    },
};

const counterEL = document.querySelector('#counter');
const valueEL = document.querySelector('#value');

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');


decrementBtn.addEventListener('click', function(event) {
    console.log("click on the button decr");

    counterValue.decrement();
    valueEL.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', function(event) {
    console.log("click on the button incr");
   
    counterValue.increment();
    valueEL.textContent = counterValue.value;

});

console.log(decrementBtn);
console.log(incrementBtn);



















