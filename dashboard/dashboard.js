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
// Create arrays of elements with matching classnames
let navBtns = Array.from(document.getElementsByClassName('nav-btn'));
let contentItems = Array.from(document.getElementsByClassName('content'));

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

// Set button active and content active
const setActive = (btn, content) => {
  // add active class to button
  btn.classList.add('active');
  // remove active class from content if any
  content.classList.remove('remove');
};

// Set buttons and content inactive
const setInactive = (btn, content) => {
  // remove active class from btn
  btn.classList.remove('active');
  // add inactive class to content
  content.classList.add('remove');
};

// handle dashboard routing
const handleDashboardRouting = (
  // set default arguments to the first items in the array
  activeBtn = navBtns[0],
  activeContent = contentItems[0]
) => {
  let inactiveBtnArr = navBtns.filter((btn) => btn !== activeBtn);

  let inactiveContentItemsArr = contentItems.filter(
    (item) => item !== activeContent
  );

  inactiveBtnArr.map((btn, index) => {
    return setInactive(btn, inactiveContentItemsArr[index]);
  });

  setActive(activeBtn, activeContent);
};

// on load show dashboard by default
const dashboardByDefault = document.addEventListener('DOMContentLoaded', () => {
  handleDashboardRouting();
});

// Add event listener to the buttons

const buttonClick = navBtns.map((btn, index) => {
  btn.addEventListener('click', () => {
    handleDashboardRouting(btn, contentItems[index]);
  });
  return;
});

// LOG USER OUT

const handleUserLogout = () => {
  localStorage.removeItem('zuribartertrade');
  window.location.replace('../signin/signin.html');
};

logoutBtn.addEventListener('click', handleUserLogout);

// <---LEAVING THIS INCASE YOU DISAGREE @DVLAPO--->
// YOU CAN DELETE IF YOU DON'T LIKE IT
// // show dashboard by default
// dashboardBtn.classList.add('active');
// tradePage.classList.add('remove');
// wishlistPage.classList.add('remove');
// historyPage.classList.add('remove');
// settingsPage.classList.add('remove');

// dashboardBtn.addEventListener('click', () => {
//   dashboardPage.classList.remove('remove');
//   dashboardBtn.classList.add('active');
//   // remove ather pages
//   tradePage.classList.add('remove');
//   wishlistPage.classList.add('remove');
//   historyPage.classList.add('remove');
//   settingsPage.classList.add('remove');
//   //remove border from other buttons
//   tradeBtn.classList.remove('active');
//   wishlistBtn.classList.remove('active');
//   historyBtn.classList.remove('active');
//   settingsBtn.classList.remove('active');
// });

// // show trade
// tradeBtn.addEventListener('click', () => {
//   tradePage.classList.remove('remove');
//   tradeBtn.classList.add('active');
//   // remove ather pages
//   dashboardPage.classList.add('remove');
//   wishlistPage.classList.add('remove');
//   historyPage.classList.add('remove');
//   settingsPage.classList.add('remove');
//   //remove border from other buttons
//   dashboardBtn.classList.remove('active');
//   wishlistBtn.classList.remove('active');
//   historyBtn.classList.remove('active');
//   settingsBtn.classList.remove('active');
// });

// // show wishlist
// wishlistBtn.addEventListener('click', () => {
//   wishlistPage.classList.remove('remove');
//   wishlistBtn.classList.add('active');
//   // remove ather pages
//   dashboardPage.classList.add('remove');
//   tradePage.classList.add('remove');
//   historyPage.classList.add('remove');
//   settingsPage.classList.add('remove');
//   //remove border from other buttons
//   dashboardBtn.classList.remove('active');
//   tradeBtn.classList.remove('active');
//   historyBtn.classList.remove('active');
//   settingsBtn.classList.remove('active');
// });
