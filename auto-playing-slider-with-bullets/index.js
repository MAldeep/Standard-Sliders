const slider_container = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const bullet_indicators = document.querySelectorAll('.bullet-indicators i');
let current = 0;


// moving the slides 
function movingTheSlides (){
    current = current + 1;
    if(current >= slides.length){
        current = 0;
    }
    slider_container.style.transform = `translateX(-${current * 100}%)`;
    // updating the indicator
    bullet_indicators.forEach((bullet, i) => {
        bullet.classList.toggle('active', i === current);
    });
}
let autoPlaying = setInterval(movingTheSlides , 3000);

bullet_indicators.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        clearInterval(autoPlaying); // Pause on click
        current = index;
        slider_container.style.transform = `translateX(-${current * 100}%)`;

        bullet_indicators.forEach((b, i) => b.classList.toggle('active', i === index));

        autoPlaying = setInterval(movingTheSlides, 3000); // Resume autoplay
    });
});