let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(n) {
    showSlide(currentSlide + n);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

let currentIndex22 = 0;
const visibleItems = 3; 
const autoScrollInterval = 2000;

function updateCarousel() {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const itemWidth = items[0].clientWidth;

  carousel.style.transform = `translateX(-${currentIndex22 * itemWidth}px)`;
}

function moveSlide(direction) {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  if (direction === -1) {
    currentIndex22--;
  } else {
    currentIndex22++;
  }

  if (currentIndex22 >= totalItems - visibleItems + 1) {
    currentIndex22 = 0;
  } else if (currentIndex22 < 0) {
    currentIndex22 = totalItems - visibleItems;
  }

  updateCarousel();
}

updateCarousel();

setInterval(() => {
  moveSlide(1); 
}, autoScrollInterval);
