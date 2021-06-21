const mobileBtn = document.getElementById('mobile-menu');
const mobileMenu = document.getElementById('nav');

const moveWidth = mobileMenu.style.left;

console.log(moveWidth, mobileMenu);

let mobileMenuVisible = false;

mobileBtn.addEventListener('click', () => {
  if (!mobileMenuVisible) {
    mobileMenuVisible = true;
    mobileMenu.style.display = `flex`;
    return;
  }
  mobileMenuVisible = false;
  return (mobileMenu.style.display = 'none');
});
