import i18Obj from "./translate.js";

const headerButn = document.querySelector('.header__buttons');
const langs = document.querySelectorAll('[data-i18]');
const butnsLangs = document.querySelectorAll('.header__butn');


headerButn.addEventListener('click', getTranslate);

function getTranslate(el) {
  if(el.target.classList.contains('header__butn')) {

    if (el.target.innerText === 'ru') {
     langs.forEach(function(el){
        el.textContent = i18Obj['ru'][el.dataset.i18]; 
      })
    }
    else if ((el.target.innerText === 'en')) {
      langs.forEach(function(el){
        el.textContent = i18Obj['en'][el.dataset.i18]; 
      })
    } 
    activeBtnsLangs (el.target);
  }
};

function activeBtnsLangs (element) {
  butnsLangs.forEach(function(el){
    el.classList.remove('header__butn_active');
  });
  element.classList.add('header__butn_active');
}


