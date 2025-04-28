const SliderContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const PrevBtn = document.querySelector('.left');
const NextBtn = document.querySelector('.right');
const CardWidth = slides[0].offsetWidth + 30;
let currentOffset = 0;

NextBtn.addEventListener("click", ()=>{
    const MaxOffset = -(CardWidth * (slides.length - 3));
    if(currentOffset > MaxOffset){
        currentOffset -= CardWidth;
        SliderContainer.style.transform = `translateX(${currentOffset}px)`;
    }
});
PrevBtn.addEventListener('click', () =>{
    if(currentOffset < 0){
        currentOffset += CardWidth;
        SliderContainer.style.transform = `translateX(${currentOffset}px)`;
    }
});