// menuPlayerPositionGet.js

let currentPosTimer;

function menuPlayerPositionGet()
{
    let menuId = 'menuPositionPlayerGet';

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

    // make the menu draggable
    makeElementDraggable(mainDiv);

    //-//

    let theMenu = ce("div");
    theMenu.className = "divStyle001";
    theMenu.style.marginBottom = 4 + 'px';
    mainDiv.append(theMenu);

    //-//

    // close button
    mainDiv.append(makeCloseButton(menuId));

    //-//

    theMenu.append(ce("hr"));

    //-//

    let menuTitle = ce('div');
    menuTitle.style.color = "rgb(255, 255, 255)";
    menuTitle.textContent = "GET PLAYER POSITION";
    menuTitle.className = 'menu';
    theMenu.append(menuTitle);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let buttonContainer = ce('div');
    theMenu.append(buttonContainer);

    //-//

    let playerPosButton = ce("button");
    playerPosButton.className = "ourButton";
    playerPosButton.onclick = function()
    {
        playerPositionGet();
    };
    playerPosButton.textContent = "GET POS";
    buttonContainer.append(playerPosButton);

    //-//

    buttonContainer.append(ce("br"));

    //-//

    let playerPosRepeatButton = ce("button");
    playerPosRepeatButton.className = "ourButton";
    playerPosRepeatButton.onclick = function()
    {
        playerPositionGetRepeat();
    };
    playerPosRepeatButton.textContent = "GET POS REPEAT";
    buttonContainer.append(playerPosRepeatButton);

    //-//

    buttonContainer.append(ce("br"));

    //-//

    let clearPosTimeButton = ce("button");
    clearPosTimeButton.className = "ourButton";
    clearPosTimeButton.onclick = function()
    {
        clearCurrentPosTimer();
    };
    clearPosTimeButton.textContent = "Cancel Get Pos";
    buttonContainer.append(clearPosTimeButton);

    //-//

    buttonContainer.append(ce("br"));

    //-//

    theMenu.append(ce("hr"));

    //-//

    let xPosLabel = ce("label");
    xPosLabel.textContent = "X ";
    theMenu.append(xPosLabel);

    //-//

    let xPosInput = ce("textarea");
    xPosInput.id = "gotX";
    xPosInput.className = "textInput";
    xPosInput.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(xPosInput);

    //-//

    theMenu.append(ce("br"));

    //-//

    let yPosLabel = ce("label");
    yPosLabel.textContent = "Y ";
    theMenu.append(yPosLabel);

    //-//

    let yPosInput = ce("textarea");
    yPosInput.id = "gotY";
    yPosInput.className = "textInput";
    yPosInput.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(yPosInput);

    //-//

    theMenu.append(ce("br"));

    //-//

    let cancelButton = ce("button");
    cancelButton.className = 'ourButton';
    cancelButton.textContent = "Cancel Timer";
    cancelButton.onclick = function()
    {
        clearInterval(currentPosTimer);
    };
    theMenu.append(cancelButton);
}

//-//

function playerPositionGet()
{
    let currentPosition = positionGet("thePlayer");

    ge(activePlayer).innerText = currentPosition.x.toFixed(0) + "\n" + currentPosition.y.toFixed(0) + "\n";

    ge('gotX').value = currentPosition.x;
    ge('gotY').value = currentPosition.y;
}

function playerPositionGetRepeat()
{
    currentPosTimer = setInterval(function()
    {
        playerPositionGet();
    }, 1000);
}

function clearCurrentPosTimer()
{
    clearInterval(currentPosTimer);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

