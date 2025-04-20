const slide_container = document.querySelector(".slides");
const indicators = document.querySelectorAll(".slider-btns i");

indicators.forEach((indicator , index) =>{
    indicator.addEventListener('click', () =>{
        slide_container.style.transform = `translateX(-${index * 100}%)`;

        // Update active indicator
        indicators.forEach(ind => ind.classList.remove('active'));
        indicator.classList.add('active');
    });
});
