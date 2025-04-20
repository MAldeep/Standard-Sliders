const slides_container = document.querySelector(".slides");
const indicators = document.querySelectorAll(".slider-btns i");

indicators.forEach((indicator , index) =>{
    indicator.addEventListener('click', () =>{
        slides_container.style.transform = `translateX(-${index * 100}%)`
        indicators.forEach(ind => ind.classList.remove('active'));
        indicator.classList.add('active');
    });
});
