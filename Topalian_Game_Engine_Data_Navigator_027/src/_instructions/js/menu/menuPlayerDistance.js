// menuPlayerDistance.js

function menuPlayerDistance()
{
    let menuId = 'menuPositionPlayer';

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

    let hr001 = ce("hr");
    theMenu.append(hr001);

    //-//

    let distanceSection = ce("div");
    theMenu.append(distanceSection);

    //-//

    let distanceLabel = ce("span");
    distanceLabel.style.color = 'rgb(255, 255, 255)';
    distanceLabel.textContent = 'Distance';
    distanceLabel.className = 'menu';
    distanceSection.append(distanceLabel);

    //-//

    let hr002 = ce("hr");
    distanceSection.append(hr002);

    //-//

    let idLabel = ce("label");
    idLabel.style.color = 'rgb(255, 255, 255)';
    idLabel.textContent = 'Id ';
    theMenu.append(idLabel);

    //-//

    let idTextarea = ce("textarea");
    idTextarea.id = 'idToFindDistance';
    idTextarea.className = 'textInput';
    idTextarea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(idTextarea);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let enterButton = ce("button");
    enterButton.textContent = 'Enter';
    enterButton.className = 'ourButton';
    enterButton.onclick = function()
    {
        keepGettingXYCustom();
        keyboardControlOn();
        enterButtonSound();
    };
    theMenu.append(enterButton);

    //-//

    let hr003 = ce("hr");
    theMenu.append(hr003);

    //-//

    let cancelButton = ce("button");
    cancelButton.textContent = 'Cancel';
    cancelButton.className = 'ourButton';
    cancelButton.onclick = function()
    {
        removeTimer(ourTimer);
    };
    theMenu.append(cancelButton);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

