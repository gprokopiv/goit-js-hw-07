


// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name-output. 
//  Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>


// const nameInputEl = document.querySelector('#name-input');
// console.log(nameInputEl);
// const nameOutputEl = document.querySelector('#name-output');
// console.log(nameOutputEl);

const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.output.textContent = event.currentTarget.value;
};









