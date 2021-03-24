(function () {

  const slides = document.querySelectorAll('.fade-slider__item');
  let index = 0;

  setInterval(function () {
    slides[index].classList.remove('fade-slider__item--visible');
    index++;
    if (index > (slides.length - 1)) {
      index = 0;
    } slides[index].classList.add('fade-slider__item--visible');
  }, 3000)

}())