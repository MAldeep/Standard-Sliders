const SlidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const ArrowNext = document.querySelector('.right');
const ArrowPrev = document.querySelector('.left');
let current = 0;

ArrowNext.addEventListener('click', () => {
    current++;
    if(current < slides.length){
        SlidesContainer.style.transform = `translateX(-${current * 100}%)`;
    }
});
ArrowPrev.addEventListener('click', () =>{
    current--;
    if(current < slides.length ){
        SlidesContainer.style.transform = `translateX(-${current * 100}%)`;
    }
});