const refreshToken =
  localStorage.getItem('zuribartertrade') ||
  sessionStorage.getItem('zuribartertrade');

const fetchAndRedirect = async () => {
  const validUrl = 'https://bartertradeapi.herokuapp.com/auth/jwt/verify/',
    refreshUrl = 'https://bartertradeapi.herokuapp.com/auth/jwt/refresh/';
  const validParams = {
      token: refreshToken,
    },
    validOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validParams),
    };

  const validResp = await fetch(validUrl, validOptions);
  if (validResp.status >= 300) {
    return;
  }
  if (validResp.status < 300) {
    window.location.replace('../dashboard/dashboard.html');
  }
};

if (refreshToken !== null) {
  fetchAndRedirect();
}
