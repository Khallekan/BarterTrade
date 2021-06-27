const signUpBtn = document.querySelector('.sign-up-btn');
const signUpForm = document.querySelector('.sign-up-form');
const userName = document.querySelector('#name');
const email = document.querySelector('#email');
const terms = document.querySelector('#terms');
const form = document.getElementById('form');

const password = Array.from(document.getElementsByClassName('togglePassword'));
const showPass = Array.from(document.getElementsByClassName('fa-eye-slash'));

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const checkInputValidity = () => {
  if (
    userName.value.length > 0 &&
    validateEmail(email.value) > 0 &&
    password[0].value.length >= 8 &&
    password[1].value.length >= 8 &&
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

const handleFormSubmit = async (e) => {
  e.preventDefault();
  const data = {
    name: userName.value,
    email: email.value,
    password: password[0].value,
    re_password: password[1].value,
  };
  const url = 'https://bartertradeapi.herokuapp.com/api/auth/users/';
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  try {
    const createUserResp = await fetch(url, options);
    const createUserRespData = await createUserResp.json();
    const { email, id, name } = await createUserRespData;

    // const jwtData = {
    //   email: `${email}`,
    //   password: `${data.re_password}`,
    // };
    // const jwtOptions = {
    //   method: 'POST',
    //   header: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(jwtData),
    // };
    // const createJwt = await fetch(
    //   `https://bartertradeapi.herokuapp.com/api/auth/jwt/create`,
    //   jwtOptions
    // );
    // const createJwtResp = await createJwt.json();

    // console.log(createJwtResp);

    const respDataObj = {
      uid: id,
      token: email,
    };
    const activationUrl =
      'https://bartertradeapi.herokuapp.com/api/auth/users/activation/';
    const activationOption = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(respDataObj),
    };
    const activateResp = await fetch(activationUrl, activationOption);
    console.log(await activateResp);
    const activateData = await activateResp.json();
    console.log(await activateData);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const formEventListener = form.addEventListener('submit', handleFormSubmit);
