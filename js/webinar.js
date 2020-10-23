const magicBtn = document.querySelector('js-magic-btn');

//const imageEl = document.querySelector('.hero__image');
// console.log("imageEl", imageEl);
// console.log(imageEl.src);
// imageEl.src = 
// '';
// imageEl.alt = 'it is new pic';
// imageEl.getAttribute('src');


const heroTitleEl = document.querySelector('.hero__title');
// console.log("heroTitleEl", heroTitleEl);
// console.log("heroTitleEl".textContent);
 heroTitleEl.textContent = 'i replaced the title';


 const titleEl = document.querySelector('.title');
 console.log(titleEl.textContent);
 console.log(titleEl.innerHTML);

// const actions = document.querySelectorAll('.js-actions button');
// console.log(actions[1].dataset.action);

// console.log(actions[2].getAttribute('data-action'));




//  magicBtn.addEventListener('click', () => {
//      const inpulEl = document.querySelector('.js-input');
//      console.log(inpulEl.value);
//      inpulEl.value = 'Let us see what it can do';
//  });



 const currentPageUrl = '/contacts';
 const linkEl = document.querySelector(
     `.site-nav__lik[href='${currentPageUrl}']`
     );
//console.log(linkEl);
//linkEl.classList.add('.site-nav__link--current');

// const navEl = document.querySelector('.site-nav');
// console.log(navEl.classList);
// navEl.classList.add('supper-pooper');
// // navEl.classList.remove('supper-pooper');
// navEl.classList.replace('supper-pooper', 'funny-bunny');
// console.log(navEl.classList.contains('supper-pooper'));
const navEl = document.querySelector('.site-nav')
const firstNavItem = navEl.firstElementChild;
// console.log(firstNavItem);
// console.log(navEl.children[2] );

///Creating the document


//const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'that is a heading:)))';
// console.log(titleEl);


const imageEl = document.createElement('img');
imageEl.src = "";
imageEl.alt = '';
imageEl.width = 640;
//console.log('imageEl',imageEl);
//document.body.appendChild(imageEl);


const heroEl = document.querySelector('.hero');
heroEl.append(titleEl, imageEl);

// create and add a new item on the menu
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'private room';
navLinkEl.href = '/profile';


navItemEl.appendChild(navLinkEl);
console.log(navLinkEl);

//const navEl = document.querySelector('.site-nav');
navEl.appendChild(navItemEl)


const colorPickerOptions = [
    {label: 'red', color: '#fff'},
    {label: 'blue', color: '#fff'},

];
const colorPickerContainerEl = document.querySelector('.js-color-picker');
const elements = colorPickerOptions.map(option => {
    const buttonEl = document.createElement('button');
    buttonEl.type = 'button';
    buttonEl.classList.add('color-picker__option');
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;
    return buttonEl;
});


console.log(elements);
colorPickerContainerEl.append(...elements);

const product = {
    name: 'ggggg',
    description: 'lorem',
    price: 200, 
    available: true,
    onsale: true,
};
  
// const productEl = document.createElement('article');
//     productEl.classList.add('product');

// const nameEl = document.createElement('h2');
//     nameEl.textContent = product.name;
//     nameEl.classList.add('product__name');

// const descEl = document.createElement('p');
//     descEl.textContent = product.description;
//     descEl.classList.add('product__desc');

// const priceEl = document.createElement('p');
//     priceEl.textContent =  `Price: ${product.price} per credit`;
//     priceEl.classList.add('product__price');

// productEl.append(nameEl, descEl, priceEl);
// console.log(productEl);

console.log(product);

const makeProductCard = ({ name, description, price } = product) => {
    const productEl = document.createElement('article');
    productEl.classList.add('product');

const nameEl = document.createElement('h2');
    nameEl.textContent = name;
    nameEl.classList.add('product__name');

const descEl = document.createElement('p');
    descEl.textContent = description;
    descEl.classList.add('product__desc');

const priceEl = document.createElement('p');
    priceEl.textContent =  `Price: ${price} per credit`;
    priceEl.classList.add('product__price');

productEl.append(nameEl, descEl, priceEl);
return productEl;
}

console.log(makeProductCard(product));

const makeTransactionTableRowMarkup = transaction = {
    const  { name, amount, currency } = transaction;
    return `
    <tr>
        <td>$(name)</td>
        <td>$(amount)</td>
        <td>$(currency)</td>
</tr>
    `;
    
}





























