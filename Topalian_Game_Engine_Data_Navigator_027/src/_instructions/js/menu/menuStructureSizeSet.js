// menuStructureSizeSet.js

let theSizeSetID;

let worldSizeId;

function menuStructureSizeSet(theStructureId)
{
    theSizeSetID = ge(theStructureId);

    worldSizeId = theStructureId;

    // Remove the text to find the digits only
    // Which number in the array, based on id number - 1
    // \d find digit
    numberOnlyStructure = worldSizeId.replace(/\D/g, '') - 1;

    //-//

    let menuId = 'menuSizeStructureSet';

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
    // theMenu.style.height = '200px';
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
    sizeLabel.textContent = "SET STRUCTURE SIZE";
    sizeLabel.className = 'menu';
    theMenu.append(sizeLabel);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let defaultButton = ce("button");
    defaultButton.onclick = function()
    {
        structureSizeSetDefault();
    };
    defaultButton.className = "ourButton";
    defaultButton.textContent = "Default";
    theMenu.append(defaultButton);

    //-//

    theMenu.append(ce("br"));

    //-//

    let xSizeLabel = ce("span");
    xSizeLabel.textContent = "X SIZE";
    theMenu.append(xSizeLabel);

    //-//

    theMenu.append(ce("nbsp"));

    //-//

    let xSizeTextarea = ce("textarea");
    xSizeTextarea.id = "customSizeX";
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
    ySizeLabel.textContent = "Y SIZE";
    theMenu.append(ySizeLabel);

    //-//

    theMenu.append(ce("nbsp"));

    //-//

    let ySizeTextarea = ce("textarea");
    ySizeTextarea.id = "customSizeY";
    ySizeTextarea.className = "textInput";
    ySizeTextarea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(ySizeTextarea);

    //-//

    theMenu.append(ce("br"));

    //-//

    let enterButton = ce("button");
    enterButton.onclick = function()
    {
        structureSizeSet();
        keyboardControlOn();
        enterButtonSound();
    };
    enterButton.className = "ourButton";
    enterButton.textContent = "Enter";
    theMenu.append(enterButton);
}

function structureSizeSet()
{
    let theSizeX;
    let theSizeY;

    theSizeX = ge('customSizeX').value;
    theSizeY = ge('customSizeY').value;

    // update the innerText of the structure
    theSizeSetID.innerText = structuresArray[numberOnlyStructure].id + "\n" + structuresArray[numberOnlyStructure].name + "\n" + "Position" + "\n" + structuresArray[numberOnlyStructure].posX + "\n" + structuresArray[numberOnlyStructure].posY + "\n" + "Size" + "\n" + theSizeX + "\n" + theSizeY;

    theSizeSetID.style.width = theSizeX;
    theSizeSetID.style.height = theSizeY;

    updateStructures(worldSizeId);
}

function structureSizeSetDefault()
{
    let theSizeX = 114;
    let theSizeY = 70;

    ge('customSizeX').value = theSizeX;
    ge('customSizeY').value = theSizeY;

    // update the innerText of the structure
    theSizeSetID.innerText = structuresArray[numberOnlyStructure].id + "\n" + structuresArray[numberOnlyStructure].name + "\n" + "Position" + "\n" + structuresArray[numberOnlyStructure].posX + "\n" + structuresArray[numberOnlyStructure].posY + "\n" + "Size" + "\n" + theSizeX + "\n" + theSizeY;

    theSizeSetID.style.width = theSizeX;
    theSizeSetID.style.height = theSizeY;

    updateStructures(worldSizeId);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

