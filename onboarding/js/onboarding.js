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
  currentDot.classList.remove('active');
  targetDot.classList.add('active');
  targetSlide.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.style.transform = `translateX(-${targetSlide.style.left})`;
};

carouselNav.addEventListener('click', (e) => {
  const targetDot = e.target.closest('button');
  if (!targetDot) return;
  const currentDot = carouselNav.querySelector('.active');
  const currentIndex = carouselNavArr.findIndex((dot) => dot === currentDot);
  const currentSlide = slides[currentIndex];
  const targetIndex = carouselNavArr.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  console.log(targetSlide);
  setCarousel(currentDot, targetDot, currentSlide, targetSlide);
  return;
});
