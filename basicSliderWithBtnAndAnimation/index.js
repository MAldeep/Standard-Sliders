const slides = document.querySelector(".slides");
const total_slides = document.querySelectorAll(".slide").length;
const previous_btn = document.getElementById("prev");
const next_btn = document.getElementById("next");
let currentIndex = 0;

function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
next_btn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % total_slides;
  updateSlide();
});

previous_btn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + total_slides) % total_slides;
  updateSlide();
});
