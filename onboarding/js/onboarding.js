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

const setCarousel = (
  currentDot,
  targetDot,
  currentSlide,
  targetSlide,
  targetIndex
) => {
  if (targetIndex === slides.length - 1) clear();
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
  setCarousel(currentDot, targetDot, currentSlide, targetSlide, targetIndex);
  return;
});

let changeAutomatically = setInterval(() => {
  let targetIndex;
  const currentDot = carouselNav.querySelector('.active');
  const currentIndex = carouselNavArr.findIndex((dot) => dot === currentDot);
  const currentSlide = slides[currentIndex];
  targetIndex = currentIndex + 1;
  if (targetIndex > slides.length - 1) targetIndex = 0;
  if (targetIndex < 0) targetIndex = slides.length - 1;
  const targetDot = carouselNavArr[targetIndex];
  const targetSlide = slides[targetIndex];
  setCarousel(currentDot, targetDot, currentSlide, targetSlide, targetIndex);
}, 4000);

const clear = () => {
  clearInterval(changeAutomatically);
};

const something = document.getElementById('something');

something.addEventListener('click', () => {
  console.log('click');
});
