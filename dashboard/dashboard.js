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

// show dashboard by default
dashboardBtn.classList.add('add-border');
tradePage.classList.add('remove');
wishlistPage.classList.add('remove');
historyPage.classList.add('remove');
settingsPage.classList.add('remove');

dashboardBtn.addEventListener('click', () => {
    dashboardPage.classList.remove('remove');
    dashboardBtn.classList.add('add-border');
    // remove ather pages
    tradePage.classList.add('remove');
    wishlistPage.classList.add('remove');
    historyPage.classList.add('remove');
    settingsPage.classList.add('remove');
    //remove border from other buttons
    tradeBtn.classList.remove('add-border');
    wishlistBtn.classList.remove('add-border');
    historyBtn.classList.remove('add-border');
    settingsBtn.classList.remove('add-border');
});


// show trade
tradeBtn.addEventListener('click', () => {    
    tradePage.classList.remove('remove');
    tradeBtn.classList.add('add-border');
    // remove ather pages
    dashboardPage.classList.add('remove');
    wishlistPage.classList.add('remove');
    historyPage.classList.add('remove');
    settingsPage.classList.add('remove');
    //remove border from other buttons
    dashboardBtn.classList.remove('add-border');
    wishlistBtn.classList.remove('add-border');
    historyBtn.classList.remove('add-border');
    settingsBtn.classList.remove('add-border');
});


