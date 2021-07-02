const signUpBtn = document.querySelector('.sign-up-btn');
const signUpForm = document.querySelector('.sign-up-form');
const userName = document.querySelector('#name');
const email = document.querySelector('#email');
const terms = document.querySelector('#terms');
const form = document.getElementById('form');

const password = Array.from(document.getElementsByClassName('togglePassword'));
const showPass = Array.from(document.getElementsByClassName('fa-eye-slash'));

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
  checkUserNameError = (input) => {
    let inputParent = input.parentNode;
    if (input.value.length === 0) {
      let inputError = inputParent.querySelector('span');
      inputError.innerHTML = `Enter a username`;
      inputParent.classList.add('error');
      return false;
    }
    inputParent.classList.remove('error');
    return true;
  },
  checkUserPasswordError = (input1, input2) => {
    let input1Parent = input1.parentNode,
      input2Parent = input2.parentNode,
      input1Error = input1Parent.querySelector('span'),
      input2Error = input2Parent.querySelector('span');

    if (input1.value.length < 8) {
      input1Parent.classList.add('error');
      input1Error.innerHTML = `must be 8 or more characters long`;
    } else {
      input1Parent.classList.remove('error');
    }
    if (input2.value !== input1.value || input2.value.length < 8) {
      input2Parent.classList.add('error');
      input2Error.innerHTML = `Not the same as password`;
      return false;
    }
    if (input2.value === input1.value && input2.value.length > 8) {
      input2Parent.classList.remove('error');
    }
    return true;
  };

const checkInputValidity = () => {
  if (
    checkUserNameError(userName) &&
    checkUserPasswordError(password[0], password[1]) &&
    validateEmail(email) &&
    terms.checked
  ) {
    return true;
  }
  return false;
};

const handleFormValidation = (e) => {
  e.preventDefault();
  if (checkInputValidity()) {
    signUpBtn.removeAttribute('disabled');
    signUpBtn.style.opacity = 1;
  } else {
    signUpBtn.setAttribute('disabled', 'disabled');
    signUpBtn.style.opacity = 0.5;
  }
};

signUpForm.addEventListener('input', handleFormValidation);

password.forEach((item, index) => {
  item.addEventListener('keyup', () => {
    let itemLength = item.value.length;
    if (itemLength > 0) {
      showPass[index].style.display = `block`;
      return;
    }
    showPass[index].style.display = 'none';
    return;
  });
});

showPass.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    //toggle the type attribute
    let pwd = password[index];
    const type = pwd.getAttribute('type') === 'password' ? 'text' : 'password';
    pwd.setAttribute('type', type);
    return;
  });
});

const setErrorText = (input, errorText) => {
  let inputParent = input.parentNode;
  let inputError = inputParent.querySelector('span');
  inputError.innerHTML = `${errorText}`;
  inputParent.classList.add('error');
  return;
};

const handleFormSubmit = async (e) => {
  e.preventDefault();
  const userNameValue = userName.value,
    emailValue = email.value,
    passwordValue = password[1].value,
    url = `https://bartertradeapi.herokuapp.com/auth/users/`;
  const paramData = {
    username: userNameValue,
    email: emailValue,
    password: passwordValue,
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(paramData),
  };
  try {
    const resp = await fetch(url, options);
    const data = await resp.json();
    if (Array.isArray(data.email)) {
      setErrorText(email, data.email[0]);
    }
    if (Array.isArray(data.password)) {
      setErrorText(password[0], data.password[0]);
    }
    if (Array.isArray(data.username)) {
      setErrorText(userName, data.username[0]);
    }
    if (resp.status < 299) {
      window.location.replace('../signin/signin.html');
    }
  } catch (error) {
    throw new Error(error);
  }
};
const formEventListener = form.addEventListener('submit', handleFormSubmit);
