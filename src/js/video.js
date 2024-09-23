const progressvolume = document.querySelector('.volume__progress');
const volumeBtn = document.querySelector('.volume');
const video = document.querySelector('.viewer');
const videoBtn = document.querySelector('.video__btn');
const playBtn = document.querySelector('.play');
const progressVideo = document.querySelector('.video__progress');

playBtn.addEventListener('click',toggleVideoStatus);
video.addEventListener('click', toggleVideoStatus);
videoBtn.addEventListener('click', toggleVideoStatus);

video.addEventListener('timeupdate', updateProgress);
progressVideo.addEventListener('click', setBar);
volumeBtn.addEventListener('click', volumeBtnPlay); 

progressvolume.addEventListener('input', function(e){
    const value = e.target.value;
    progressvolume.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #c8c8c8 ${value}%, #c8c8c8 100%)`;
    if(value === progressvolume.min) {
      video.volume = 0;
      volumeBtn.classList.toggle('volume__not-active');
    }
    else {
      volumeBtn.classList.remove('volume__not-active');
      video.volume = value / 100;
    }
  });

 function volumeBtnPlay () {
  
  if (!volumeBtn.classList.contains('volume__not-active')) {
    volumeBtn.classList.toggle('volume__not-active'); 
    video.volume = 0;
    
   } else {
    volumeBtn.classList.remove('volume__not-active');
    video.volume = 1;
    progressvolume.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 40%, #c8c8c8 40%, #c8c8c8 100%)`;
    progressvolume.value =  '40%';
   }
    
  
 };

 function toggleVideoStatus () {
  if(video.paused) {
    video.play();
    playBtn.classList.add('pause');
    videoBtn.classList.remove('video__btn');
  } else {
    video.pause();
    playBtn.classList.remove('pause');
    playBtn.classList.add('play');
  }
};

function updateProgress (e) {
  const progressBarPlay = (video.currentTime / video.duration) * 100;
  progressVideo.value = progressBarPlay;
  progressVideo.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${progressBarPlay}%, #c8c8c8 ${progressBarPlay}%, #c8c8c8 100%)`;
  
}

function setBar(e) {
  const width = this.clientWidth;
  const clickBarX = e.offsetX;
  const durationbar = video.duration;
  video.currentTime = (clickBarX / width) * durationbar;
};







