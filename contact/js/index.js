const mobileView = document.querySelector('.mobile-menu');
const mobileMenu = document.querySelector('#nav');
// const closeNav = document.querySelector('#close-nav');

let visible = false;

mobileView.addEventListener('click', () => {
  if (!visible) {
    mobileMenu.classList.add('visible');
    visible = true;
    return;
  }
  visible = false;
  mobileMenu.classList.remove('visible');
  return;
});

// closeNav.addEventListener('click', () =>{
//     closeNav.style.display = 'none';
//     openNav.style.display = 'block';
// });
