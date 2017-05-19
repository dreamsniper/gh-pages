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
