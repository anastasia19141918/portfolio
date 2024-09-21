const burger = document.getElementById('burger');
const burgerItemns = document.querySelector('.header__navigation');
const itemns = document.querySelector('.header__itemns');



burger.addEventListener('click', function(){
  burger.classList.toggle('burger__active');
  burgerItemns.classList.toggle('header__itemns__active');
});

burgerItemns.addEventListener('click', function(){
  burger.classList.remove('burger__active');
  burgerItemns.classList.remove('header__itemns__active');
});

document.addEventListener('click', function(e){
  let click = e.composedPath().includes(burger);
  if (!click) {
    burger.classList.remove('burger__active');
    burgerItemns.classList.remove('header__itemns__active');
  }
})