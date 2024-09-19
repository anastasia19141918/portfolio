const arrayClasses = [
  ['hero__title', 
    'hero__text', 
    'header__butn_dash', 
    'header__butn', 
    'title', 
    'skills__title', 
    'skills__text', 
    'price__title', 
    'price__text',
    'contact__title',
    'footer__itemn',
    'footer__copyright',
    'footer__year',
    'footer__git'
  ]
];

const toggle = document.querySelector('.header__toggle');
const body =  document.querySelector('.body');

toggle.addEventListener('click', toggleImg);

function toggleImg () {
  toggle.classList.toggle('header__toggle_dark');
  body.classList.toggle('body__light-theme');
   arrayClasses[0].forEach(function(el){
    //el.classList.toggle('light-theme');
    
  })
  
};