// menuStructureSizeGet.js

let theSizeGetID;

function menuStructureSizeGet(theStructureId)
{
    theSizeGetID = theStructureId;

    let menuId = 'menuSizeStructureGet';

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
    theMenu.style.marginBottom = 4 +'px';
    theMenu.style.overflowY = "auto";
    mainDiv.append(theMenu);

    //-//

    // close button
    mainDiv.append(makeCloseButton(menuId));

    //-//

    theMenu.append(ce('hr'));

    //-//

    let sizeLabel = ce("h1");
    sizeLabel.textContent = "GET STRUCTURE SIZE";
    sizeLabel.className = 'menu';
    theMenu.append(sizeLabel);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let getSizeButton = ce("button");
    getSizeButton.onclick = function()
    {
        structureSizeGet(theSizeGetID);
    };
    getSizeButton.className = "ourButton";
    getSizeButton.textContent = "GET SIZE";
    theMenu.append(getSizeButton);

    //-//

    theMenu.append(ce("br"));

    //-//

    let xSizeLabel = ce("span");
    xSizeLabel.textContent = "X Size";
    theMenu.append(xSizeLabel);

    //-//

    theMenu.append(ce("nbsp"));

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

    let ySizeLabel = ce("span");
    ySizeLabel.textContent = "Y Size";
    theMenu.append(ySizeLabel);

    //-//

    theMenu.append(ce("nbsp"));

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

function structureSizeGet()
{
    let currentSize = sizeGet(theSizeGetID);

    ge('gotSizeX').value = currentSize.x;
    ge('gotSizeY').value = currentSize.y;

    theSizeGetID.innerText = currentSize.x + "\n" + currentSize.y;
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

