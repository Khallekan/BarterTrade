const signInBtn = document.querySelector('.sign-in-btn');
const signInForm = document.querySelector('.sign-in-form');
const email = document.querySelector('#email');
const password = document.querySelector('#pass');
const terms = document.querySelector('#terms');

const togglePassword = document.querySelector('.togglePassword');
const showPass = document.querySelector('.fa-eye-slash');

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const handleFormValidation = (e) => {
  e.preventDefault();
  if (validateEmail(email.value) > 0 && password.value.length >= 8) {
    signInBtn.removeAttribute('disabled');
    signInBtn.style.opacity = 1;
  } else {
    signInBtn.style.opacity = 0.5;
    signInBtn.setAttribute('disabled', 'disabled');
  }
};

signInForm.addEventListener('input', handleFormValidation);

const handleTogglePass = (e) => {
  if (togglePassword.value.length > 0) {
    showPass.style.display = 'block';
    return;
  }
  showPass.style.display = 'none';
  return;
};

togglePassword.addEventListener('keyup', handleTogglePass);

const handleShowPass = () => {
  const type =
    password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
};

showPass.addEventListener('click', handleShowPass);
