const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
const carouselBtnNext = document.getElementById('carousel-button-next');
const carouselBtnPrev = document.getElementById('carousel-button-prev');

carouselBtnNext.addEventListener('click', moveToNextSlide);
carouselBtnPrev.addEventListener("click", moveToPrevSlide);

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  slides[slidePosition].classList.add('carousel-item-visible');
}

function moveToPrevSlide() {
  console.log('move to previous slide');
}