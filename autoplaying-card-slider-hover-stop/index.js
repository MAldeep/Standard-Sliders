document.addEventListener("DOMContentLoaded", () => {
  const SliderContainer = document.querySelector(".slider");
  const slider = document.querySelector(".cards");
  const cards = document.querySelectorAll(".card");
  const CardWidth = cards[0].offsetWidth;
  const gap = 30;
  const ScrollStep = CardWidth + gap;
  let current = 0;
  let intervalOn;

  cards.forEach(card => {
    const clone = card.cloneNode(true);
    slider.appendChild(clone);
  });

  function slidingOn (){
    intervalOn = setInterval(() => {
        current += ScrollStep;
    
        if (current >= slider.scrollWidth / 2) {
          slider.scrollTo({ left: 0, behavior: "auto" });
          current = 0;
        } else {
          slider.scrollBy({ left: ScrollStep, behavior: "smooth" });
        }
      }, 3000);
  };
  slidingOn();
  function slidingOff (){
    clearInterval(intervalOn);
  };

  SliderContainer.addEventListener('mouseenter', slidingOff);
  SliderContainer.addEventListener('mouseleave', slidingOn);
});
