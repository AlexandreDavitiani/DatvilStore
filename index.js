const body = document.querySelector('body');
const btn = document.getElementById('btn');

function handleColor() {
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = '#F4E6DF';
    } else {
        body.style.backgroundColor = 'black';
    }
}

btn.addEventListener('click', handleColor);



document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slides");

  let currentSlide = 0;
  const slideWidth = slides[0].clientWidth;
  const totalSlides = slides.length;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }

  function updateSlider() {
    const newPosition = -currentSlide * slideWidth;
    slider.style.transform = `translateX(${newPosition}px)`;
  }

  setInterval(nextSlide, 3200);
});
