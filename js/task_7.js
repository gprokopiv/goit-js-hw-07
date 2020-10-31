// Напиши скрипт, который реагирует на изменение
//  значения input#font-size-control (событие input)
//   и изменяет инлайн-стиль span#text обновляя 
//   свойство font-size. В результате при перетаскивании
//    ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const inputFontRef = document.querySelector('#font-size-control');
console.log(inputFontRef);
const inputTextRef = document.querySelector('#text');
console.log(inputTextRef);

inputFontRef.addEventListener('input', onInputChange);
function onInputChange(event) {
    console.log(event.currentTarget.value);
    inputTextRef.style.fontSize = event.currentTarget.value +'px';
}



