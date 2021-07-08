let logoutBtn = document.getElementById('logout');
let refreshToken =
  localStorage.getItem('zuribartertrade') ||
  sessionStorage.getItem('zuribartertrade');
// Create arrays of elements with matching classnames
let navBtns = Array.from(document.getElementsByClassName('nav-btn'));
let contentItems = Array.from(document.getElementsByClassName('content'));

// CHECK IF USER IS VERIFIED AND ACCEPT OR REJECT LOGIN
const checkRefreshValidity = async () => {
  if (refreshToken !== null && refreshToken !== undefined) {
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
  } else {
    window.location.replace('../signin/signin.html');
  }
};
checkRefreshValidity();

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
  sessionStorage.removeItem('zuribartertrade');
  window.location.replace('../signin/signin.html');
};

logoutBtn.addEventListener('click', handleUserLogout);

let isSideBarOpen = false;
const sideBar = document.querySelector('.aside');
const sideBarBtns = Array.from(
  document.getElementsByClassName('toggle-wrapper')
);

const handleSideBar = () => {
  switch (isSideBarOpen) {
    case false:
      sideBar.classList.add('show');
      isSideBarOpen = true;
      break;
    case true:
      sideBar.classList.remove('show');
      isSideBarOpen = false;
      break;
    default:
      break;
  }
};

const sideBarBtnsEventListener = sideBarBtns.map((item, index) => {
  item.addEventListener('click', handleSideBar);
});
