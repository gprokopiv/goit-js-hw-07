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


const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'that is a heading:)))';
// console.log(titleEl);


const imageEl = document.createElement('img');
imageEl.src = "";
imageEl.alt = '';
imageEl.width = 640;
//console.log('imageEl',imageEl);
//document.body.appendChild(imageEl);


// create and add a new item on the menu
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'private room';
navLinkEl.href = '/profile';


navItemEl.appendChild(navLinkEl);
console.log(navLinkEl);















