const signUpBtn = document.querySelector('.sign-up-btn');
const signUpForm = document.querySelector('.sign-up-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#pass');
const terms = document.querySelector('#terms');

const togglePassword = document.querySelector('.togglePassword');

const showPass = document.querySelector('.fa-eye-slash')
signUpForm.addEventListener('input', (e) =>{
    e.preventDefault();
    if(name.value.length > 0 && 
      name.value.length > 0 &&
      email.value.length > 0 &&
      password.value.length >= 8) {
          signUpBtn.removeAttribute('disabled');
          signUpBtn.style.opacity = 1;
      } else {
          signUpBtn.setAttribute('disabled', 'disabled');
      }
})

togglePassword.addEventListener('click', function (e) {
    showPass.style.display = 'block'
    // toggle the type attribute
 });

 showPass.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
 });
