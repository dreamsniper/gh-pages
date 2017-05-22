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

//function to insert main img and coins to divs
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
    reset();
}

//prompts user for a name
function userName() {
    'use strict';
    user = prompt('please enter your name');

    if (user === '') {

        do {
            user = prompt('please enter a name to continue forward');
        } while (user === '');

    } else {
        userNamePrompt.innerHTML = '<h1>Lets Play ' + user + ', Good Luck!!</h1>';
    }
}

//function to select heads
function selectHead() {
    'use strict';

    //display flip menu
    flipMenu.style.display = 'block';
    h2Element.innerHTML = 'You Chose Heads!';
    //display choice
    flipMenu.appendChild(h2Element);
}

//function to select tails
function selectTail() {
    'use strict';

    //display flip menu
    flipMenu.style.display = 'block';
    h2Element.innerHTML = 'You Chose Tails!';
    //display choice
    flipMenu.appendChild(h2Element);
}

//produces a number between 1 and zro and animates a coin
function flipCoin() {
    'use strict';

    //random number between 1 and zero
    side = Math.round(Math.random());

    //represents head
    if (side === 0) {

        showHeadAnimation();

    } else {


        showTailAnimation();
    }
}

function showHeadAnimation() {
    text[0] = '<img class="animated flip" src="img/head-coin.png"/>';
    coinAnimation.innerHTML = text[0];

    heads += 1;
    results.innerHTML = '<h3>You got Heads</h3>';
    headsCount.innerHTML = '<h1> Number of heads: ' + heads + '</h1>';
}

function showTailAnimation() {
    text[1] = '<img class="animated flip" src="img/tail-coin.png"/>';
    coinAnimation.innerHTML = text[1];

    tails += 1;
    results.innerHTML = '<h3>You got Tails!</h3>';
    tailsCount.innerHTML = '<h1> Number of Tails: ' + tails + '</h1>';
}

//Function to reset
function reset() {
    heads = 0;
    tails = 0;
}
