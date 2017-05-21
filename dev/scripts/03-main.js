//assign body
body = document.body;

//initialize and call main coin images
coin = document.getElementById('coin');
coinImage = document.createElement('img');
headCoin = document.getElementById('head-coin');
headCoinImage = document.createElement('img');
tailCoin = document.getElementById('tail-coin');
tailCoinImage = document.createElement('img');
insertImages();

//initialize navs
nav = document.getElementsByTagName('nav')[0];
script = document.createElement('script');
script.src = 'scripts/nav.json';
body.appendChild(script);
headerNav;

//assign accordion buttons and div
accordionButton = document.querySelectorAll('h2');
accordionButtonDiv = document.querySelectorAll('h2 + div');
allAccordionClosed = true;

//add eventListeners to accordion buttons
for (eventL = 0; eventL < accordionButton.length; eventL += 1) {
    accordionButton[eventL].addEventListener('click', toggle, false);
}

//initialize  screens
welcomeScreen = document.getElementsByClassName('welcome-screen')[0];
gameScreen = document.getElementsByClassName('game-screen')[0];
endScreen = document.getElementsByClassName('end-screen')[0];

//initialize start button and add listener
startButton = document.getElementsByClassName('start-button')[0];
startButton.addEventListener('click', start, false);

//initialize back button and add listener
backButton = document.getElementsByClassName('back-button')[0];
backButton.addEventListener('click', back, false);

//initialize retry button and add listener
retry = document.getElementsByClassName('try-again')[0];
retry.addEventListener('click', start, false);

//initialize username prompt div and buttons
userNamePrompt = document.getElementById('username-prompt');
headButton = document.getElementById('head-button');
tailButton = document.getElementById('tail-button');
flipButton = document.getElementById('flip-button');


//add listeners
headButton.addEventListener('click', selectHead, false);
tailButton.addEventListener('click', selectTail, false);
flipButton.addEventListener('click', flipCoin, false);
flipMenu = document.getElementsByClassName('flip-menu')[0];

//coin animation
coinAnimation = document.getElementsByClassName('coin-animation')[0];
results = document.getElementsByClassName('results')[0];
text = [];
h2Element = document.createElement('h2');
