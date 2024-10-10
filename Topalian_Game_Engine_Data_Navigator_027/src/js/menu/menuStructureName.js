// menuStructureName.js

let worldNameId;

let theNameID;

let theNumberOnlyHere;

function menuStructureName(theStructureId)
{
    let menuId = 'menuNameStructure';

    theNameID = ge(theStructureId);
    worldNameId = theStructureId;

    theNumberOnlyHere = theStructureId.replace(/\D/g,'') - 1;

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
    theMenu.style.width = 200 + 'px';
    theMenu.style.marginBottom = 4 +'px';
    theMenu.style.overflowY = "auto";
    mainDiv.append(theMenu);

    //-//

    // close button
    let closeButton = makeCloseButton(menuId);
    closeButton.style.right = 0 + 'px';
    mainDiv.append(closeButton);

    //-//

    let nameLabel = ce('h1');
    nameLabel.id = 'nameLabel';
    nameLabel.textContent = 'Name of Structure';
    nameLabel.className = 'menu';
    nameLabel.style.color = 'rgb(0, 255, 255)';
    theMenu.append(nameLabel);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let textInputName = ce('textarea');
    textInputName.id = 'theStructureName';
    textInputName.className = 'textInput';
    textInputName.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(textInputName);

    //-//

    let enterButton = ce("button");
    enterButton.onclick = function()
    {
        customStructureNameFromTextInput();
        keyboardControlOn();
        enterButtonSound();
    };
    enterButton.className = "ourButton";
    enterButton.textContent = "Enter";
    theMenu.append(enterButton);
}

function customStructureNameFromTextInput()
{
    let theName = ge("theStructureName").value;

    structuresArray[theNumberOnlyHere].name = theName;

    theNameID.innerText = worldNameId + "\n" + structuresArray[theNumberOnlyHere].name + "\n" + positionGet(worldNameId).x.toFixed(0) + "\n" + positionGet(worldNameId).y.toFixed(0);

    ge("structureNameText").textContent = structuresArray[theNumberOnlyHere].name;

    showStructureData();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

