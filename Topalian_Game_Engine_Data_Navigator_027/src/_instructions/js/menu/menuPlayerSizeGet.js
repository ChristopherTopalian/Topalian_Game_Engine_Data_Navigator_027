// menuPlayerSizeGet.js

function menuPlayerSizeGet()
{
    let menuId = 'menuSizePlayerGet';

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
    theMenu.style.fontSize = '20px';
    mainDiv.append(theMenu);

    //-//

    // close button
    mainDiv.append(makeCloseButton(menuId));

    //-//

    theMenu.append(ce("hr"));

    //-//

    let titleSpan = ce("div");
    titleSpan.style.color = "rgb(255, 255, 255)";
    titleSpan.textContent = "GET PLAYER SIZE";
    titleSpan.className = 'menu';
    theMenu.append(titleSpan);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let getSizeButton = ce("button");
    getSizeButton.onclick = function()
    {
        playerSizeGet();
    };
    getSizeButton.className = "ourButton";
    getSizeButton.textContent = "GET SIZE";
    theMenu.append(getSizeButton);

    //-//

    theMenu.append(ce("br"));

    //-//

    let xSizeLabel = ce('label');
    xSizeLabel.textContent = "Width";
    xSizeLabel.style.marginRight = '4px';
    theMenu.append(xSizeLabel);

    //-//

    let xSizeTextarea = ce("textarea");
    xSizeTextarea.id = "gotSizeX";
    xSizeTextarea.className = "textInput";
    xSizeTextarea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(xSizeTextarea);

    //-//

    theMenu.append(ce("br"));

    //-//

    let ySizeLabel = ce('label');
    ySizeLabel.textContent = "Height";
    ySizeLabel.style.marginRight = '4px';
    theMenu.append(ySizeLabel);

    //-//

    let ySizeTextarea = ce("textarea");
    ySizeTextarea.id = "gotSizeY";
    ySizeTextarea.className = "textInput";
    ySizeTextarea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(ySizeTextarea);
}

//-//

function playerSizeGet()
{
    let currentSize = sizeGet("thePlayer");

    ge('gotSizeX').value = currentSize.x;
    ge('gotSizeY').value = currentSize.y;

    ge(activePlayer).innerText = currentSize.x + "\n" + currentSize.y;
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

