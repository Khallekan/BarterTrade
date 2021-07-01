const signInBtn = document.querySelector('.sign-in-btn');
const signInForm = document.querySelector('.sign-in-form');
const email = document.querySelector('#email');
const password = document.querySelector('#pass');
const terms = document.querySelector('#terms');

const togglePassword = document.querySelector('.togglePassword');
const showPass = document.querySelector('.fa-eye-slash');

const validateEmail = (input) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let inputParent = input.parentNode;
    if (!re.test(input.value)) {
      let inputError = input.parentNode.querySelector('span');
      inputParent.classList.add('error');
      inputError.innerHTML = `Enter a valid email address`;
      return false;
    }
    inputParent.classList.remove('error');
    return true;
  },
  handlePassword = (input) => {
    let inputParent = input.parentNode;
    if (input.value.length < 8) {
      inputError = inputParent.querySelector('span');
      inputParent.classList.add('error');
      inputError.innerHTML = `must be 8 or more characters long`;
      return false;
    }
    inputParent.classList.remove('error');
    return true;
  };

const handleFormValidation = (e) => {
  e.preventDefault();
  if (validateEmail(email) > 0 && handlePassword(password)) {
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

const handleFormSubmit = async (e) => {
  e.preventDefault();
  const emailValue = email.value,
    passwordValue = password.value;

  const createJwtParamData = {
      email: emailValue,
      password: passwordValue,
    },
    createJwtOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createJwtParamData),
    },
    createJwtUrl = `https://bartertradeapi.herokuapp.com/auth/jwt/create/`;
  try {
    const createJwtResp = await fetch(createJwtUrl, createJwtOptions);
    const createJwtData = await createJwtResp.json();
  } catch (error) {
    throw new Error(error);
  }
};

const formSubmitEventListener = signInForm.addEventListener(
  'submit',
  handleFormSubmit
);
