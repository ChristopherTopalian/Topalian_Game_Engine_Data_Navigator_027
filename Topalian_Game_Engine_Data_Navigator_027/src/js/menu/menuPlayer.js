// menuPlayer.js

function menuPlayer()
{
    let menuId = 'menuPlayer';

    if (ge(menuId))
    {
        removeElement(menuId);
    }

    //-//

    let mainDiv = ce("div");
    mainDiv.id = menuId;
    mainDiv.style.position = "absolute";
    mainDiv.style.left = ourPlayer.x + 100 +'px';
    mainDiv.style.top = ourPlayer.y + 30 + 'px';
    mainDiv.style.zIndex = '3';
    ba(mainDiv);

    //-//

    makeElementDraggable(mainDiv);

    //-//

    let theMenu = ce("div");
    theMenu.className = "divStyle001";
    theMenu.style.width = '200px';
    theMenu.style.height = '200px';
    theMenu.style.marginBottom = 4 +'px';
    theMenu.style.overflowY = "auto";
    mainDiv.append(theMenu);

    //-//

    // close button, (1 line of code)
    mainDiv.append(makeCloseButton(menuId));

    //-//

    // close button, (2 lines of code)
    // let closeButton = makeCloseButton(menuId);
    // mainDiv.append(closeButton);

    //-//

    /*
    // close button, (many lines of code)
    let closeButton = ce("button");
    closeButton.className = "ourButton";
    closeButton.style.position = "absolute";
    closeButton.style.top = "0px";
    closeButton.style.right = "15px";
    closeButton.textContent = 'X';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '10px';
    closeButton.onclick = function()
    {
        clickSound();
        removeElement(whichMenuId);
        keyboardControlOn();
    };
    closeButton.onmouseover = function()
    {
        hoverSound();
    };
    mainDiv.append(closeButton);
    */

    //-//

    // prevent menu leaving screen on left side
    if (positionGet(menuId).x <= 100)
    {
        theMenu.style.left = 50;
    }

    // prevent menu going off screen top side
    if (positionGet(menuId).y <= 200)
    {
        theMenu.style.top = 50;
    }

    //-//

    theMenu.append(ce('hr'));

    //-//

    let instructionsText = ce("span");
    instructionsText.id = 'instructionsText';
    instructionsText.className = "textCompact";
    instructionsText.textContent = "Instructions";
    theMenu.append(instructionsText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let instructionsButton = ce("button");
    instructionsButton.id = 'instructionsButton';
    instructionsButton.className = "ourButton";
    instructionsButton.textContent = 'Instructions';
    instructionsButton.onmouseover = function()
    {
        hoverSound();
    };
    instructionsButton.onclick = function()
    {
        clickSound();
        menuInstructions();
    };
    theMenu.append(instructionsButton);

    theMenu.append(ce('hr'));

    //-//

    let dnaText = ce("span");
    dnaText.id = 'dnaText';
    dnaText.className = "textCompact";
    dnaText.textContent = "DNA";
    theMenu.append(dnaText);

    //-//

    theMenu.append(ce('br'));

    let dnaButton = ce("button");
    dnaButton.id = 'dnaButton';
    dnaButton.className = "ourButton";
    dnaButton.textContent = 'DNA';
    dnaButton.onmouseover = function()
    {
        hoverSound();
    };
    dnaButton.onclick = function()
    {
        clickSound();
        menuDNA();
    };
    theMenu.append(dnaButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let goToText = ce("span");
    goToText.textContent = "Go To";
    goToText.className = "textCompact";
    theMenu.append(goToText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let sections =
    [
        {
            name: 'Scripting',
            class: 'ourButton',
            whenClicked: `travelTo('scripting');`
        },

        {
            name: 'Evidence',
            class: 'ourButton',
            whenClicked: `travelTo('evidence');`
        },

        {
            name: 'Books',
            class: 'ourButton',
            whenClicked: `travelTo('books');`
        },

        {
            name: 'News',
            class: 'ourButton',
            whenClicked: `travelTo('news');`
        }
    ];

    for (let i = 0; i < sections.length; i++)
    {
        let travelToButton = ce("button");
        travelToButton.textContent = sections[i].name;
        travelToButton.className = sections[i].class;
        travelToButton.onmouseover = function()
        {
            hoverSound();
        };
        travelToButton.onclick = function()
        {
            clickSound();
            eval(sections[i].whenClicked);
        };
        theMenu.append(travelToButton);
    }

    //-//

    theMenu.append(ce('hr'));

    //-//

    let audioText = ce("span");
    audioText.textContent = "Audio";
    audioText.className = "textCompact";
    theMenu.append(audioText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let songButton = ce("button");
    songButton.textContent = "Songs";
    songButton.className = "ourButton";
    songButton.onmouseover = function()
    {
        hoverSound();
    };
    songButton.onclick = function()
    {
        clickSound();
        menuSongChoices();
    };
    theMenu.append(songButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let createStructuresText = ce("span");
    createStructuresText.textContent = "Create Structures";
    createStructuresText.className = "textCompact";
    theMenu.append(createStructuresText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let howToButton = ce("button");
    howToButton.textContent = "How To";
    howToButton.className = 'ourButton';
    howToButton.onmouseover = function()
    {
        hoverSound();
    };
    howToButton.onclick = function()
    {
        clickSound();
        menuStructureInstructions();
    };
    theMenu.append(howToButton);

    //-//

    let createButton = ce("button");
    createButton.textContent = "Create";
    createButton.className = "ourButton";
    createButton.onmouseover = function()
    {
        hoverSound();
    };
    createButton.onclick = function()
    {
        clickSound();
        activateBuildMode();
    };
    theMenu.append(createButton);

    //-//

    let goToButton = ce("button");
    goToButton.textContent = "Go To";
    goToButton.className = "ourButton";
    goToButton.onmouseover = function()
    {
        hoverSound();
    };
    goToButton.onclick = function()
    {
        clickSound();
        structuresRow(ourPlayer.x, ourPlayer.y, 125, 200, structuresArray);
    };
    theMenu.append(goToButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let playerText = ce("span");
    playerText.textContent = "Player";
    playerText.className = "textCompact";
    theMenu.append(playerText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let nameButton = ce("button");
    nameButton.textContent = "Name";
    nameButton.className = "ourButton";
    nameButton.onmouseover = function()
    {
        hoverSound();
    };
    nameButton.onclick = function()
    {
        clickSound();
        menuPlayerName('thePlayer');
    };
    theMenu.append(nameButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let playerAppearanceText = ce("span");
    playerAppearanceText.textContent = "Player Appearance";
    playerAppearanceText.className = "textCompact";
    theMenu.append(playerAppearanceText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let textColorButton = ce("button");
    textColorButton.textContent = "Text Color";
    textColorButton.className = "ourButton";
    textColorButton.title = 'menuPlayerColorText';
    textColorButton.onmouseover = function()
    {
        hoverSound();
    };
    textColorButton.onclick = function()
    {
        clickSound();
        menuPlayerColorText();
    };
    theMenu.append(textColorButton);

    //-//

    let textureButton = ce("button");
    textureButton.textContent = "Texture";
    textureButton.className = "ourButton";
    textureButton.onmouseover = function()
    {
        hoverSound();
    };
    textureButton.onclick = function()
    {
        clickSound();
        menuPlayerTexture2();
    };
    theMenu.append(textureButton);

    //-//

    let opacityButton = ce("button");
    opacityButton.textContent = "Opacity";
    opacityButton.className = "ourButton";
    opacityButton.onmouseover = function()
    {
        hoverSound();
    };
    opacityButton.onclick = function()
    {
        clickSound();
        menuPlayerOpacity();
    };
    theMenu.append(opacityButton);

    //-//

    let colorButton = ce("button");
    colorButton.textContent = "Color";
    colorButton.className = "ourButton";
    colorButton.onmouseover = function()
    {
        hoverSound();
    };
    colorButton.onclick = function()
    {
        clickSound();
        menuPlayerColor();
    };
    theMenu.append(colorButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let playerSpeedText = ce("span");
    playerSpeedText.textContent = "Player Speed";
    playerSpeedText.className = "textCompact";
    theMenu.append(playerSpeedText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let playerSpeedButton = ce("button");
    playerSpeedButton.textContent = "Speed";
    playerSpeedButton.className = "ourButton";
    playerSpeedButton.onmouseover = function()
    {
        hoverSound();
    };
    playerSpeedButton.onclick = function()
    {
        clickSound();
        menuPlayerSpeed();
    };
    theMenu.append(playerSpeedButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let playerPosText = ce("span");
    playerPosText.textContent = "Player Position";
    playerPosText.className = "textCompact";
    theMenu.append(playerPosText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let getPosButton = ce("button");
    getPosButton.textContent = "Get";
    getPosButton.className = "ourButton";
    getPosButton.onmouseover = function()
    {
        hoverSound();
    };
    getPosButton.onclick = function()
    {
        clickSound();
        menuPlayerPositionGet();
    };
    theMenu.append(getPosButton);

    //-//

    let setPosButton = ce("button");
    setPosButton.textContent = "Set";
    setPosButton.className = "ourButton";
    setPosButton.onmouseover = function()
    {
        hoverSound();
    };
    setPosButton.onclick = function()
    {
        clickSound();
        menuPlayerPositionSet();
    };
    theMenu.append(setPosButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let playerSizeText = ce("span");
    playerSizeText.textContent = "Player Size";
    playerSizeText.className = "textCompact";
    theMenu.append(playerSizeText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let playerSizeGetButton = ce("button");
    playerSizeGetButton.textContent = "Get";
    playerSizeGetButton.className = "ourButton";
    playerSizeGetButton.onmouseover = function()
    {
        hoverSound();
    };
    playerSizeGetButton.onclick = function()
    {
        clickSound();
        menuPlayerSizeGet();
    };
    theMenu.append(playerSizeGetButton);

    //-//

    let playerSizeSetButton = ce("button");
    playerSizeSetButton.textContent = "Set";
    playerSizeSetButton.className = "ourButton";
    playerSizeSetButton.onmouseover = function()
    {
        hoverSound();
    };
    playerSizeSetButton.onclick = function()
    {
        clickSound();
        menuPlayerSizeSet();
    };
    theMenu.append(playerSizeSetButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let mousePosText = ce("span");
    mousePosText.textContent = "Mouse Position";
    mousePosText.className = "textCompact";
    theMenu.append(mousePosText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let mouseOnButton = ce("button");
    mouseOnButton.textContent = "On";
    mouseOnButton.className = "ourButton";
    mouseOnButton.onmouseover = function()
    {
        hoverSound();
    };
    mouseOnButton.onclick = function()
    {
        clickSound();
        mouseOn();
    };
    theMenu.append(mouseOnButton);

    //-//

    let mouseOffButton = ce("button");
    mouseOffButton.textContent = "Off";
    mouseOffButton.className = "ourButton";
    mouseOffButton.onmouseover = function()
    {
        hoverSound();
    };
    mouseOffButton.onclick = function()
    {
        clickSound();
        mouseOff();
    };
    theMenu.append(mouseOffButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let distanceText = ce("span");
    distanceText.textContent = "Distance";
    distanceText.className = "textCompact";
    theMenu.append(distanceText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let distanceFinderButton = ce("button");
    distanceFinderButton.textContent = "Distance Finder";
    distanceFinderButton.className = "ourButton";
    distanceFinderButton.onmouseover = function()
    {
        hoverSound();
    };
    distanceFinderButton.onclick = function()
    {
        clickSound();
        menuPlayerDistance();
    };
    theMenu.append(distanceFinderButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let findText = ce("span");
    findText.textContent = "Find";
    findText.className = "textCompact";
    theMenu.append(findText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let searchButton = ce("button");
    searchButton.textContent = "Search";
    searchButton.className = "ourButton";
    searchButton.onmouseover = function()
    {
        hoverSound();
    };
    searchButton.onclick = function()
    {
        clickSound();
        menuSearch();
    };
    theMenu.append(searchButton);

    //-//

    theMenu.append(ce('hr'));
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

