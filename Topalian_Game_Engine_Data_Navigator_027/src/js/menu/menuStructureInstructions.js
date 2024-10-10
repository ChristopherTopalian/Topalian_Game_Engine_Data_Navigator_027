// menuStructureInstructions.js

function menuStructureInstructions()
{
    let menuId = 'menuStructureInstructions';

    //-//

    if (ge(menuId))
    {
        removeElement(menuId);
    }

    //-//

    ge('infoDiv').textContent = "B to Create Structure";

    //-//

    let mainDiv = ce("div");
    mainDiv.id = menuId;
    mainDiv.style.position = "absolute";
    mainDiv.style.left = ourPlayer.x + 100 +'px';
    mainDiv.style.top = ourPlayer.y + 30 + 'px';
    mainDiv.style.zIndex = '3';
    ba(mainDiv);

    //-//

    makeElementDraggable(mainDiv);

    //-//

    let theMenu = ce("div");
    theMenu.className = "divStyle001";
    theMenu.style.marginBottom = 4 + 'px';
    theMenu.style.width = '200px';
    theMenu.style.height = '200px';
    theMenu.style.fontSize = '20px';
    mainDiv.append(theMenu);

    //-//

    // close button
    mainDiv.append(makeCloseButton(menuId));

    //-//

    theMenu.append(ce('hr'));

    //-//

    let titleSpan = ce("span");
    titleSpan.style.color = "rgb(255, 255, 255)";
    titleSpan.textContent = 'STRUCTURE OPTIONS';
    theMenu.append(titleSpan);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let startStructureSpan = ce("span");
    startStructureSpan.innerHTML = "<b> Letter B </b> to Start Structure Mode";
    theMenu.append(startStructureSpan);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let placeStructureSpan = ce("span");
    placeStructureSpan.innerHTML = "<b> Left Click </b> to Place a Structure";
    theMenu.append(placeStructureSpan);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let gotoStructureSpan = ce("span");
    gotoStructureSpan.innerHTML = "<b> Shift + 1 </b> to GoTo 1st Structure";
    theMenu.append(gotoStructureSpan);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let gotoSecondStructureSpan = ce("span");
    gotoSecondStructureSpan.innerHTML = "<b> Shift + 2 </b> to GoTo 2nd Structure etc";
    theMenu.append(gotoSecondStructureSpan);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let rowMenuSpan = ce("span");
    rowMenuSpan.innerHTML = "<b> Letter J </b><br> Creates a Row Menu<br>to GoTo Any Structure";
    theMenu.append(rowMenuSpan);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let editStructureSpan = ce("span");
    editStructureSpan.innerHTML = "<b> Left Click any Structure </b><br>to EDIT that Structure";
    theMenu.append(editStructureSpan);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let deleteStructureSpan = ce("span");
    deleteStructureSpan.innerHTML = "<b> Delete Button </b><br>Removes All Structures";
    theMenu.append(deleteStructureSpan);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let endStructureModeSpan = ce("span");
    endStructureModeSpan.innerHTML = "<b> Esc Button </b> to End Structure Mode";
    theMenu.append(endStructureModeSpan);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

