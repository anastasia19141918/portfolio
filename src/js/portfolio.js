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
    preloadSummerImages();
  };
};

function changeClassActive(event) {
  portfolioButns.forEach(function(el){
    el.classList.remove('button_active');
  });
  event.classList.add('button_active');
};

function preloadSummerImages() {
  for (let i = 0; i <= 6; i++){
    const img = new Image();
    seasons.forEach(function(el, index){
      img.src = `./src/img/${el}/${i}.jpg`;
    });
  }
};

/*
img.src = `./assets/img/summer/${i}.jpg`;
*/





