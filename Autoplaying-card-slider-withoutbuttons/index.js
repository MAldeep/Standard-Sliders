document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".cards");
    const cards = document.querySelectorAll(".card");
    const gap = 20;
    const cardWidth = cards[0].offsetWidth;
    const scrollStep = cardWidth + gap;
  
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      slider.appendChild(clone);
    });
  
    let currentScroll = 0;
  
    setInterval(() => {
      currentScroll += scrollStep;
  
      if (currentScroll >= slider.scrollWidth / 2) {
        slider.scrollTo({ left: 0, behavior: "auto" });
        currentScroll = 0;
      } else {
        slider.scrollBy({ left: scrollStep, behavior: "smooth" });
      }
    }, 3000); 
  });
  