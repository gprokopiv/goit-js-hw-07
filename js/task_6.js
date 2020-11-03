// Задание 6
// Напиши скрипт, который бы при потере фокуса на 
// инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputRef = document.querySelector('#validation-input');
console.log(inputRef);

inputRef.addEventListener('focus', onInputFocus);
inputRef.addEventListener('blur', onInputBlur);

function onInputFocus(){
    console.log('input on the focus');
   
}

function onInputBlur(){
    console.log('input on the blur');

    if(inputRef.value.length == inputRef.getAttribute('data-length')) {
        this.classList.remove('invalid');
        this.classList.add('valid');

        } else {
       
          this.classList.remove('valid');
          this.classList.add('invalid');
    }
    console.log(inputRef.value.length);

}

