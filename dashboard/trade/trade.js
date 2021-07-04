let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav');
let main = document.querySelector('.main');

function toggleMenu() {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
    main.classList.toggle('active');
}