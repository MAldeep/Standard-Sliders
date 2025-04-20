const card_slider = document.querySelector(".cards");
const cards = document.querySelectorAll(".card");
const previous_btn = document.getElementById("prev");
const next_btn = document.getElementById("next");
const cardWidth = cards[0].offsetWidth + 20;
let currentOffset = 0;

next_btn.addEventListener("click", () =>{
    const max_offset = -(cardWidth * (cards.length - 5));
    if(currentOffset > max_offset){
        currentOffset -= cardWidth;
        card_slider.style.transform = `translateX(${currentOffset}px)`;
    }
});
previous_btn.addEventListener('click', () => {
    if (currentOffset < 0) {
      currentOffset += cardWidth;
      card_slider.style.transform = `translateX(${currentOffset}px)`;
    }
  })
