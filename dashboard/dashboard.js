let dashboardBtn = document.querySelector('#dashboard-btn');
let dashboardPage = document.querySelector('#dashboard');
let tradeBtn = document.querySelector('#trade-btn');
let tradePage = document.querySelector('#trade');
let wishlistBtn = document.querySelector('#wishlist-btn');
let wishlistPage = document.querySelector('#wishlist');
let historyBtn = document.querySelector('#history-btn');
let historyPage = document.querySelector('#history');
let settingsBtn = document.querySelector('#settings-btn');
let settingsPage = document.querySelector('#settings');
let logoutBtn = document.getElementById('logout');
let refreshToken = localStorage.getItem('zuribartertrade');

// CHECK IF USER IS VERIFIED AND ACCEPT OR REJECT LOGIN
const checkRefreshValidity = async () => {
  if (refreshToken !== null) {
    const validParams = {
        token: refreshToken,
      },
      validOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validParams),
      },
      validUrl = 'https://bartertradeapi.herokuapp.com/auth/jwt/verify/',
      refreshUrl = 'https://bartertradeapi.herokuapp.com/auth/jwt/refresh/';

    try {
      const validResp = await fetch(validUrl, validOptions);
      if (validResp.status >= 300) {
        window.location.replace('../signin/signin.html');
      }
      if (validResp.status < 300) {
        const refreshParams = {
            refresh: refreshToken,
          },
          refreshOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(refreshParams),
          };
        const refreshResp = await fetch(refreshUrl, refreshOptions);
        const { access } = await refreshResp.json();
      }
    } catch (error) {
      throw new Error(error);
    }
  }
};

if (
  // change to http://localhost:5500/dashboard/dashboard.html on your pc
  // and https://zuri-bartertrade.vercel.app/signin/signin.html before
  // pushing to github
  document.referrer !== 'https://zuri-bartertrade.vercel.app/signin/signin.html'
) {
  checkRefreshValidity();
}

// show dashboard by default
dashboardBtn.classList.add('active');
tradePage.classList.add('remove');
wishlistPage.classList.add('remove');
historyPage.classList.add('remove');
settingsPage.classList.add('remove');

dashboardBtn.addEventListener('click', () => {
  dashboardPage.classList.remove('remove');
  dashboardBtn.classList.add('active');
  // remove ather pages
  tradePage.classList.add('remove');
  wishlistPage.classList.add('remove');
  historyPage.classList.add('remove');
  settingsPage.classList.add('remove');
  //remove border from other buttons
  tradeBtn.classList.remove('active');
  wishlistBtn.classList.remove('active');
  historyBtn.classList.remove('active');
  settingsBtn.classList.remove('active');
});

// show trade
tradeBtn.addEventListener('click', () => {
  tradePage.classList.remove('remove');
  tradeBtn.classList.add('active');
  // remove ather pages
  dashboardPage.classList.add('remove');
  wishlistPage.classList.add('remove');
  historyPage.classList.add('remove');
  settingsPage.classList.add('remove');
  //remove border from other buttons
  dashboardBtn.classList.remove('active');
  wishlistBtn.classList.remove('active');
  historyBtn.classList.remove('active');
  settingsBtn.classList.remove('active');
});

// show wishlist
wishlistBtn.addEventListener('click', () => {
  wishlistPage.classList.remove('remove');
  wishlistBtn.classList.add('active');
  // remove ather pages
  dashboardPage.classList.add('remove');
  tradePage.classList.add('remove');
  historyPage.classList.add('remove');
  settingsPage.classList.add('remove');
  //remove border from other buttons
  dashboardBtn.classList.remove('active');
  tradeBtn.classList.remove('active');
  historyBtn.classList.remove('active');
  settingsBtn.classList.remove('active');
});

// LOG USER OUT

const handleUserLogout = () => {
  localStorage.removeItem('zuribartertrade');
  window.location.replace('../signin/signin.html');
};

logoutBtn.addEventListener('click', handleUserLogout);
