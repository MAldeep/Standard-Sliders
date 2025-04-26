const slider_container = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const dash_indicators = document.querySelectorAll('.dash-indicators i');
let current = 0;

// getting the next slide 
function movingTheSlide (){
    current ++;
    if(current >= slides.length){
        current = 0;
    }
    slider_container.style.transform = `translateX(-${current * 100}%)`;

    // updating the indicator 
    dash_indicators.forEach((dash , i) =>{
        dash.classList.toggle('active', i === current);
    });
}
let autoPlaying = setInterval(movingTheSlide , 3000);

// handling the indicators solely
dash_indicators.forEach((dash , i) =>{
    dash.addEventListener('click', () =>{
        clearInterval(autoPlaying);
        current = i;
        slider_container.style.transform = `translateX(-${current * 100}%)`;
        dash_indicators.forEach((d , index) =>{
            d.classList.toggle('active', index === current);
        });
        autoPlaying = setInterval(movingTheSlide , 3000)
    });
});