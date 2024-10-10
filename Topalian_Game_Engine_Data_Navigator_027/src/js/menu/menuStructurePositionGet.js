// menuStructurePositionGet.js

let thePositionGetID;

function menuStructurePositionGet(theStructureId)
{
    thePositionGetID = theStructureId;

    //-//

    let menuId = 'menuPositionStructureGet';

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
    theMenu.style.width = '200px';
    theMenu.style.height = '200px';
    theMenu.style.marginBottom = 4 +'px';
    theMenu.style.overflowY = "auto";
    mainDiv.append(theMenu);

    //-//

    // close button
    mainDiv.append(makeCloseButton(menuId));

    //-//

    let positionLabel = ce("h1");
    positionLabel.style.color = "rgb(255, 255, 255)";
    positionLabel.textContent = "GET STRUCTURE POSITION";
    positionLabel.className = 'menu';
    positionLabel.style.color = 'rgb(0, 255, 255)';
    theMenu.append(positionLabel);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let getPosButton = ce("button");
    getPosButton.onclick = function()
    {
        structurePositionGet();
        keyboardControlOn();
    };
    getPosButton.className = "ourButton";
    getPosButton.textContent = "GET POS";
    theMenu.append(getPosButton);

    //-//

    theMenu.append(ce("br"));

    //-//

    let getPosRepeatButton = ce("button");
    getPosRepeatButton.onclick = function()
    {
        structurePositionGetRepeat();
        keyboardControlOn();
    };
    getPosRepeatButton.className = "ourButton";
    getPosRepeatButton.textContent = "GET POS REPEAT";
    theMenu.append(getPosRepeatButton);

    //-//

    theMenu.append(ce("br"));

    //-//

    let cancelGetPosButton = ce("button");
    cancelGetPosButton.onclick = function()
    {
        removeTimer(currentStructurePositionTimer);
    };
    cancelGetPosButton.className = "ourButton";
    cancelGetPosButton.textContent = "Cancel Get Pos";
    theMenu.append(cancelGetPosButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let xPosLabel = ce("label");
    xPosLabel.textContent = "X POS";
    theMenu.append(xPosLabel);

    //-//

    theMenu.append(ce("nbsp"));

    //-//

    let xPosTextarea = ce("textarea");
    xPosTextarea.id = "gotX";
    xPosTextarea.className = "textInput";
    xPosTextarea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(xPosTextarea);

    //-//

    theMenu.append(ce("br"));

    //-//

    let yPosLabel = ce("label");
    yPosLabel.textContent = "Y POS";
    theMenu.append(yPosLabel);

    //-//

    theMenu.append(ce("nbsp"));

    //-//

    let yPosTextarea = ce("textarea");
    yPosTextarea.id = "gotY";
    yPosTextarea.className = "textInput";
    yPosTextarea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(yPosTextarea);
}

function structurePositionGet()
{
    let currentPosition = positionGet(thePositionGetID);

    thePositionGetID.innerText = currentPosition.x.toFixed(0) + "\n" + currentPosition.y.toFixed(0) + "\n";

    ge('gotX').value = currentPosition.x.toFixed(0);

    ge('gotY').value = currentPosition.y.toFixed(0);
}

let currentStructurePositionTimer;

function structurePositionGetRepeat()
{
    currentStructurePositionTimer = setInterval(function()
    {
        structurePositionGet();
    }, 1000);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

