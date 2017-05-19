/*jslint browser: true, devel: true, maxlen: 100, todo: true*/
var body,
    nav,
    script,
    html,
    accordionButton,
    accordionButtonDiv,
    index,
    allAccordionClosed,
    openDivPosition,
    i,
    a,
    ul,
    coin,
    coinImage,
    headCoin,
    headCoinImage,
    tailCoin,
    tailCoinImage,
    startButton,
    welcomeScreen,
    gameScreen,
    backButton,
    endScreen,
    retry,
    user,
    userChoice,
    userNamePrompt,
    headButton,
    tailButton,
    flipButton,
    win,
    lose;

//define HeaderNav as function 
function headerNav(navItems) {
    'use strict';

    //to build the html string
    html = [];

    //create a ul element
    ul = '<ul>';

    //loop to populate navigation
    for (i = 0; i < navItems.items.length; i += 1) {

        if (navItems.items[i].items !== '') {
            ul += '<li>';

            //cycle through the urls and labels and build the a tag
            ul += '<a href="' + navItems.items[i].url + '" >';
            ul += navItems.items[i].label + '</a>';

            ul += '<ul>';

            for (a = 0; a < navItems.items[i].items.length; a += 1) {
                ul += '<li>';

                //cycle through theurls and labels and build the a tag
                html[a] = '<a href="' + navItems.items[1].items[a].url;
                html[a] += '" >' + navItems.items[1].items[a].label + '</a>';

                ul += html[a];

                ul += '</li>';
            }
            //close the nested ul
            ul += '</ul>';

        } else {
            ul += '<li>';

            //cycle through theurls and labels and build the a tag
            html[i] = '<a href="' + navItems.items[i].url + '" >';
            html[i] += navItems.items[i].label + '</a>';

            ul += html[i];

            ul += '</li>';
        }
    }
    //append html to nav
    nav.innerHTML = ul;
}

function insertImages() {
    'use strict';

    coinImage.src = 'img/coin.png';
    coin.appendChild(coinImage);
    headCoinImage.src = 'img/head-coin.png';
    headCoin.appendChild(headCoinImage);
    tailCoinImage.src = 'img/tail-coin.png';
    tailCoin.appendChild(tailCoinImage);
}

//This function hides and shows the accordion buttons
function toggle() {
    'use strict';

    for (index = 0; index < accordionButton.length; index += 1) {

        if (0 === this.compareDocumentPosition(accordionButton[index])) {
            break;
        }
    }
    if (allAccordionClosed) {

        //assign index to new variable
        openDivPosition = index;

        //change the style to block can also be done with classes
        accordionButtonDiv[index].style.display = 'block';

        //accordions no longer all closed
        allAccordionClosed = false;

    } else {

        if (index === openDivPosition) {

            accordionButtonDiv[index].style.display = 'none';

            allAccordionClosed = true;

        } else {
            accordionButtonDiv[openDivPosition].style.display = 'none';

            accordionButtonDiv[index].style.display = 'block';

            openDivPosition = index;
        }
    }
}

//opens start screen
function start() {
    'use strict';
    userName();
    welcomeScreen.style.display = 'none';
    endScreen.style.display = 'none';
    gameScreen.style.display = 'block';

}

//goes back to welcome screen
function back() {
    'use strict';

    welcomeScreen.style.display = 'block';
    gameScreen.style.display = 'none';
    endScreen.style.display = 'none';
}

//prompts user for a name
function userName() {
    user = prompt('please enter your name');

    if (user === '') {

        do {
            user = prompt('please enter a name to continue forward');
        } while (user === '');

    } else {
        userNamePrompt.innerHTML = '<h1>Lets Play ' + user + ' Good Luck!!</h1>';
    }
}

//function to select heads
function selectHead() {
    userChoice = 'head';
}

//function to select tails
function selectTail() {
    userChoice = 'tail';
}

//produces a number 0 for head and 1 for tails
function flipCoin(userChoice) {

}

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
for (var eventL = 0; eventL < accordionButton.length; eventL += 1) {
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
flipButton = document.getElemetsById('flip-button');


//add listeners
headButton.addEventListener('click', selectHead, false);
tailButton.addEventListener('click', selectTail, false);
flipButton.addEventListener('click', flipCoin, false);


if(userChoice){
    win++;
}else{
    lose++;
}