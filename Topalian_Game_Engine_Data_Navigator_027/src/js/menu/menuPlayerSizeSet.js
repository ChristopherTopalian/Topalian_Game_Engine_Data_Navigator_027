// menuPlayerSizeSet.js

function menuPlayerSizeSet()
{
    let menuId = 'menuSizePlayerSet';

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

    theMenu.append(ce('hr'));

    //-//

    let title = ce("span");
    title.style.color = "rgb(255, 255, 255)";
    title.textContent = " SET PLAYER SIZE ";
    title.className = 'menu';
    theMenu.append(title);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let defaultButton = ce("button");
    defaultButton.onclick = playerSizeSetDefault;
    defaultButton.className = "ourButton";
    defaultButton.textContent = "Default";
    theMenu.append(defaultButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let xSizeLabel = ce("label");
    xSizeLabel.textContent = "Width ";
    theMenu.append(xSizeLabel);

    //-//

    let xSizeInput = ce("textarea");
    xSizeInput.id = "customSizeX";
    xSizeInput.className = "textInput";
    xSizeInput.onkeydown = keyboardControlOff;
    theMenu.append(xSizeInput);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let ySizeLabel = ce("label");
    ySizeLabel.textContent = "Height ";
    theMenu.append(ySizeLabel);

    //-//

    let ySizeInput = ce("textarea");
    ySizeInput.id = "customSizeY";
    ySizeInput.className = "textInput";
    ySizeInput.onkeydown = keyboardControlOff;
    theMenu.append(ySizeInput);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let enterButton = ce("button");
    enterButton.onclick = function()
    {
        playerSizeSet();
        keyboardControlOn();
        enterButtonSound();
    };
    enterButton.className = "ourButton";
    enterButton.textContent = "Enter";
    theMenu.append(enterButton);
}

function playerSizeSet()
{
   // let currentSize = sizeGet("thePlayer");

    let theSizeX;
    let theSizeY;

    theSizeX = ge('customSizeX').value;
    theSizeY = ge('customSizeY').value;

    ge(activePlayer).innerText = theSizeX + "\n" + theSizeY;

    ge(activePlayer).style.width = theSizeX;
    ge(activePlayer).style.height = theSizeY;

    // update playerArray to show changed value
    updatePlayer();
}

function playerSizeSetDefault()
{
   // let currentSize = sizeGet("thePlayer");

    let theSizeX = 70;
    let theSizeY = 70;

    ge('customSizeX').value = theSizeX;
    ge('customSizeY').value = theSizeY;

    ge(activePlayer).innerText = theSizeX + "\n" + theSizeY;

    ge(activePlayer).style.width = theSizeX;
    ge(activePlayer).style.height = theSizeY;

    // update playerArray to show changed value
    updatePlayer();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

