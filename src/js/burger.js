const burger =  document.getElementById('burger');
const burgerItemns = document.getElementById('header__itemns');

burger.addEventListener('click', function(){
  burger.classList.toggle('burger__active');
  burgerItemns.classList.toggle('header__itemns__active');
})