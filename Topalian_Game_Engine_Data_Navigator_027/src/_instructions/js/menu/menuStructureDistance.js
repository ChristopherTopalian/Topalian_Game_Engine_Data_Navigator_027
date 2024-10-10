// menuStructureDistance.js

let theDistanceID;

function menuStructureDistance(theStructureId)
{
    theDistanceID = theStructureId;

    let menuId = 'menuPositionDistanceStructure';

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
    theMenu.style.marginBottom = 4 +'px';
    theMenu.style.overflowY = "auto";
    mainDiv.append(theMenu);

    //-//

    // close button
    mainDiv.append(makeCloseButton(menuId));

    //-//

    theMenu.append(ce('hr'));

    //-//

    let theTitle = ce("h1");
    theTitle.textContent = "DISTANCE";
    theTitle.className = 'menu';
    theMenu.append(theTitle);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let idLabel = ce("span");
    idLabel.textContent = "Id of Object ";
    theMenu.append(idLabel);

    //-//

    let idTextArea = ce("textarea");
    idTextArea.id = "idToFindDistance";
    idTextArea.className = "textInput";
    idTextArea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(idTextArea);

    //-//

    theMenu.append(ce("br"));

    //-//

    let enterButton = ce("button");
    enterButton.onclick = function()
    {
        keepGettingXYStructureCustom();
        keyboardControlOn();
        enterButtonSound();
    };
    enterButton.className = "ourButton";
    enterButton.textContent = "Enter";
    theMenu.append(enterButton);

    //-//

    theMenu.append(ce("br"));

    //-//

    theMenu.append(ce('hr'));

    //-//

    let cancelButton = ce("button");
    cancelButton.onclick = function()
    {
        removeTimer(ourDistanceTimer);
    };
    cancelButton.className = "ourButton";
    cancelButton.textContent = "Cancel";
    theMenu.append(cancelButton);

    //-//

    theMenu.append(ce("br"));
}

let ourDistanceTimer;
function keepGettingXYStructureCustom()
{
    let obj1 = theDistanceID;

    let obj2 = ge("idToFindDistance").value;

    // clear any previous searches
    if (ourDistanceTimer)
    {
        clearInterval(ourTimer);
    }

    ourDistanceTimer = setInterval(function()
    {
        getDistanceXY(obj1, obj2);
    }, 1000);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

