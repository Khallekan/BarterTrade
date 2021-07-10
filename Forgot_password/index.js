const email = document.getElementById('email-pass');
const form = document.getElementById('continue');
const errorText = document.querySelector('.error-text');

const handleFormSubmit = async (e) => {
  e.preventDefault();
  // const url = 'https://bartertradeapi.herokuapp.com/auth/users/reset_password/';
  // const params = {
  //   email: email.value,
  // };
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(params),
  // };

  // try {
  //   const resp = await fetch(url, options);
  //   const data = await resp.json();
  // } catch (error) {
  //   throw new Error(error);
  // }
};

form.addEventListener('submit', handleFormSubmit);
