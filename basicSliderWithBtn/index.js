const slides = document.querySelectorAll(".slide");
const previous_btn = document.getElementById("prev");
const next_btn = document.getElementById("next");
let current = 0;

function showSlide(para) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === para) {
      slide.classList.add("active");
    }
  });
}
next_btn.addEventListener("click", () =>{
    current = (current + 1) % slides.length;
    showSlide(current);
});
previous_btn.addEventListener("click", () =>{
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});