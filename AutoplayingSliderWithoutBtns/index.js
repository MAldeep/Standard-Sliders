const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let current = 0;
function nextSlide (){
    current++;
    if(current >= slides.length){
        current = 0;
    }
    slider.style.transform = `translateX(-${current * 100}%)`;
}
let autoplaying = setInterval(nextSlide , 3000);

