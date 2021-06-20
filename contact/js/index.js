const mobileView = document.querySelector('.mobile-nav');
const openNav = document.querySelector('#open-nav');
const closeNav = document.querySelector('#close-nav');


openNav.addEventListener('click', () =>{
    mobileView.classList.add('visible');
    openNav.style.display = 'none';
    closeNav.style.display = 'block';
});

closeNav.addEventListener('click', () =>{
    mobileView.classList.remove('visible');
    closeNav.style.display = 'none';
    openNav.style.display = 'block';
});