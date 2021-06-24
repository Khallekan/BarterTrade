const mobileBtn = document.getElementById('mobile-menu');
const mobileMenu = document.getElementById('nav');

const moveWidth = mobileMenu.style.left;

let mobileMenuVisible = false;

mobileBtn.addEventListener('click', () => {
  if (!mobileMenuVisible) {
    mobileMenuVisible = true;
    mobileMenu.classList.add('visible');
    return;
  }
  mobileMenuVisible = false;
  return mobileMenu.classList.remove('visible');
});
