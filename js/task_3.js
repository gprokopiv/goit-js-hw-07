// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesEl = document.querySelector('#gallery');
console.log(imagesEl);

let string = ``;

// const makeGallery = images.map(function(image) {
//   //  const pictureEl = document.createElement('li');

//   // pictureEl.classList.add('gallery')
//   // pictureEl.textContent = images.url;

//    string += `<li><img src="${image.url}" alt="${image.alt}" class="gallery">pictures</li>`;
//   return string;

// });

// // console.log(string)
// imagesEl.insertAdjacentHTML('afterbegin',string);

const makeGallery = function(pictures) {
const {url, alt} = pictures;
return `<li><img src="${url}" alt="${alt}" class="gallery">pictures</li>`;
}
const makePictureRowMarkUp = images.map(makeGallery).join('');
imagesEl.insertAdjacentHTML('afterbegin', makePictureRowMarkUp);

//    const pictureEl = document.createElement('li');
  // pictureEl.classList.add('.gallery')

// console.log(pictureEl);


// const makeGallery = ({url, alt} = images) => {
// return images.map(function(image) {
//      const pictureEl = document.createElement('li');
//   pictureEl.classList.add('.gallery')
//   pictureEl.textContent = images.url;
//   pictureEl.textContent = images.alt;
// return pictureEl;
// });
// }

// const elements = makeGallery(imagesEl);
// imagesEl.append(...elements);


// const makeGallery = ({url, alt} = images) => {
//      const pictureEl = document.createElement('li');
//   pictureEl.classList.add('.gallery')
//   pictureEl.textContent = images.url;
//   pictureEl.textContent = images.alt;
// return pictureEl;

// } 
// const elements = images.map(makeGallery);
// console.log(elements);
// imagesEl.append(...elements);

// imagesEl.insertAdjacentElement('beforebegin', `<li><img src="${image.url}" alt="${image.alt}" class="gallery">pictures</li>`);