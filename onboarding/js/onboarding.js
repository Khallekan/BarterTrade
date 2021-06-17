const carouselContainer = document.querySelector('.carousel-container');
const slides = Array.from(carouselContainer.children),
  slideWidth = slides[0].getBoundingClientRect().width;
const carouselNav = document.querySelector('.carousel-nav');
const carouselNavArr = Array.from(carouselNav.children);

const setSlidePositon = (slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
  return;
};

slides.forEach(setSlidePositon);

const setCarousel = (currentDot, targetDot, currentSlide, targetSlide) => {
  carouselContainer.style.transform = `translateX(-${targetSlide.style.left})`;
  // currentSlide.classList.remove('active');
  // currentSlide.classList.add('inactive');
  // targetSlide.classList.add('active');
  // targetSlide.classList.remove('inactive');
  currentDot.classList.remove('active');
  targetDot.classList.add('active');
};

carouselNav.addEventListener('click', (e) => {
  const targetDot = e.target.closest('button');
  if (!targetDot) return;
  const currentDot = carouselNav.querySelector('.active');
  const currentSlide = carouselContainer.querySelector('.active');
  const targetIndex = carouselNavArr.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  setCarousel(currentDot, targetDot, currentSlide, targetSlide);
  // console.log(targetSlide);
  return;
});

// console.log(slideWidth);
