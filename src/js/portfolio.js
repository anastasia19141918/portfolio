const portfolioBtns = document.querySelector('.portfolio__buttons');
const portfolioImgs = document.querySelectorAll('.portfolio__img');
const portfolioButns = document.querySelectorAll('.portfolio__butn');

const seasons = ["winter", "spring", "summer", "autumn"];


portfolioBtns.addEventListener('click', changeImage);

function changeImage(event) {
  if (event.target.classList.contains('button')) {
    portfolioImgs.forEach(function(img,index){
      img.src = `./src/img/${event.target.dataset.season}/${index + 1}.jpg`;
    })
    changeClassActive(event.target);
    
  };
};

function changeClassActive(event) {
  portfolioButns.forEach(function(el){
    el.classList.remove('button_active');
  });
  event.classList.add('button_active');
};







