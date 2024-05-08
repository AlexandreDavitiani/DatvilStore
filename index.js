document.addEventListener("DOMContentLoaded", function() {
  const body = document.querySelector('body');
  const checkbox = document.getElementById('checkbox');
  const burgerIcon = document.querySelector(".burger-icon");
  const mainMenu = document.querySelector(".main-menu");
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slides");

  let currentSlide = 0;
  const slideWidth = slides[0].clientWidth;
  const totalSlides = slides.length;

  function handleColor() {
    body.style.backgroundColor = checkbox.checked ? 'black' : '#F4E6DF';
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }

  function updateSlider() {
    const newPosition = -currentSlide * slideWidth;
    slider.style.transform = `translateX(${newPosition}px)`;
  }

  checkbox.addEventListener('change', handleColor);
  burgerIcon.addEventListener("click", function() {
    mainMenu.classList.toggle("active");
  });

  setInterval(nextSlide, 3200);
});
ч
