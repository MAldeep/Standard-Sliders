const slider_container = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const number_indicators = document.querySelectorAll('.numbers button');
let current = 0;

//moving the slide function
function movingTheSlide (){
    current ++;
    if(current >= slides.length){
        current = 0;
    }
    slider_container.style.transform = `translateX(-${current * 100}%)`;
    //handling the numbers
    number_indicators.forEach((num , i) =>{
        num.classList.toggle('active', i === current);
    });
}
let autoPlaying = setInterval(movingTheSlide , 3000);

// handling clicking the indicators
number_indicators.forEach((num , i) =>{
    num.addEventListener('click', () =>{
        clearInterval(autoPlaying);
        current = i ;
        slider_container.style.transform = `translateX(-${current * 100}%)`;
        number_indicators.forEach((n , index) =>{
            n.classList.toggle('active' , index === current);
        });
        autoPlaying = setInterval(movingTheSlide , 3000);
    });
});