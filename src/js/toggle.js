const toggle = document.querySelector('.header__toggle');
const body =  document.querySelector('.body');
const portfolioDg = document.querySelector('.portfolio-dg');
const contact = document.querySelector('.contact');

const title = document.querySelectorAll('.light-theme');

const iconIinst = document.querySelector('.icon__social_inst');
const iconFb = document.querySelector('.icon__social_fb');
const iconPinterest = document.querySelector('.icon__social_pinterest');
const portfolioButns = document.querySelectorAll('.portfolio__butn');

toggle.addEventListener('click', toggleImg);

function toggleImg () {
  toggle.classList.toggle('header__toggle_dark');
  body.classList.toggle('body__light-theme');
  portfolioDg.classList.toggle('portfolio-dg_light-theme');
  contact.classList.toggle('portfolio-dg_light-theme');
   
  title.forEach(function(el){
    el.classList.toggle('light-theme__active');
  });

  iconIinst.classList.toggle('icon__social__inst_light');
  iconFb.classList.toggle('icon__social__fb_light');
  iconPinterest.classList.toggle('icon__social__pinterest_light');

  portfolioButns.forEach(function(el){
    el.classList.toggle('portfolio__butn__active');
  })
};