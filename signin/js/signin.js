const signInBtn = document.querySelector('.sign-in-btn');
const signInForm = document.querySelector('.sign-in-form');
const email = document.querySelector('#email');
const password = document.querySelector('#pass');
const terms = document.querySelector('#terms');

const togglePassword = document.querySelector('.togglePassword');

const showPass = document.querySelector('.fa-eye-slash')
signInForm.addEventListener('input', (e) =>{
    e.preventDefault();
    if(email.value.length > 0 &&
      password.value.length >= 8) {
          signInBtn.removeAttribute('disabled');
          signInBtn.style.opacity = 1;
      } else {
          signInBtn.setAttribute('disabled', 'disabled');
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
