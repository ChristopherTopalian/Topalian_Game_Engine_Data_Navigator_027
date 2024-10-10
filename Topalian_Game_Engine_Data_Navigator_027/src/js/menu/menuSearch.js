// menuSearch.js

function menuSearch()
{
    let menuId = 'menuSearchId';

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
    theMenu.style.width = '250px';
    theMenu.style.fontSize = '20px';
    mainDiv.append(theMenu);

    //-//

    // close button
    mainDiv.append(makeCloseButton(menuId));

    //-//

    theMenu.append(ce('hr'));

    //-//

    let theTitle = ce("span");
    theTitle.style.color = "rgb(255, 255, 255)";
    theTitle.textContent = "SEARCH";
    theTitle.className = 'menu';
    theMenu.append(theTitle);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let instruction1 = ce("b");
    instruction1.textContent = "Control + F";
    theMenu.append(instruction1);

    //-//

    let instruction2 = ce("span");
    instruction2.textContent = " to Search for Word or Phrase";
    theMenu.append(instruction2);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let instruction3 = ce("b");
    instruction3.textContent = "Left Click";
    theMenu.append(instruction3);

    //-//

    let instruction4 = ce("span");
    instruction4.textContent = " to Place Player Near Found Word or Phrase";
    theMenu.append(instruction4);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

