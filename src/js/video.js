const progress = document.querySelectorAll('.progress');

progress.forEach(function(el){
  el.addEventListener('input', function(){
    const value = this.value;
    this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #c8c8c8 ${value}%, #c8c8c8 100%)`;
  })
})


