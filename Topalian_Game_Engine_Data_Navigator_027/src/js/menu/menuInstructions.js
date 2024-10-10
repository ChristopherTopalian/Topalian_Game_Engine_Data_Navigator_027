// menuInstructions.js

function menuInstructions()
{
    let menuId = 'menuInstructions';

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

    makeElementDraggable(mainDiv);

    //-//

    let theMenu = ce("div");
    theMenu.className = "divStyle001";
    theMenu.style.marginBottom = 4 + 'px';
    theMenu.style.width = '250px';
    theMenu.style.height = '200px';
    theMenu.style.fontSize = '20px';
    mainDiv.append(theMenu);

    //-//

    mainDiv.append(makeCloseButton(menuId));

    //-//

    theMenu.append(ce('hr'));

    //-//

    let dedication = ce("div");
    dedication.textContent = "Instructions";
    theMenu.append(dedication);

    //-//

    let hrUnderDedication = ce('hr');
    hrUnderDedication.style.marginBottom = '10px';
    theMenu.append(hrUnderDedication);

    //-//

    let instruction1 = ce("div");
    instruction1.innerHTML = "<b>W</b> is Up, <b>S</b> is Down, <b>A</b> is Left, <b>D</b> is Right";
    theMenu.append(instruction1);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let instruction2 = ce("div");
    instruction2.innerHTML = "Numbers <b>1 to 9</b> Changes Speed";
    theMenu.append(instruction2);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let instruction3 = ce("div");
    instruction3.innerHTML = "<b>0 - + BackSpace Home End</b> for FASTER SPEEDS";
    theMenu.append(instruction3);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let instruction4 = ce("div");
    instruction4.innerHTML = "<b>Z</b> for Player Menu or <b>Double Click</b> on Player for Player Menu";
    theMenu.append(instruction4);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let instruction5 = ce("div");
    instruction5.innerHTML = "<b>X</b> to start Mouse Position Mode";
    theMenu.append(instruction5);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let instruction6 = ce("div");
    instruction6.innerHTML = "<b>Left Click</b> to find Mouse Position";
    theMenu.append(instruction6);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let instruction7 = ce("div");
    instruction7.innerHTML = "<b>V</b> to end Mouse Position mode";
    theMenu.append(instruction7);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let instruction8 = ce("div");
    instruction8.innerHTML = "<b>B</b> for Structure Mode";
    theMenu.append(instruction8);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let instruction9 = ce("div");
    instruction9.innerHTML = "<b>Left Click</b> to Place a Structure";
    theMenu.append(instruction9);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let instruction10 = ce("div");
    instruction10.innerHTML = "<b>ESC</b> to Exit Structure Mode";
    theMenu.append(instruction10);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let instruction11 = ce("div");
    instruction11.innerHTML = "<b>Right Click</b> any Structure to EDIT that Structure";
    theMenu.append(instruction11);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let instruction12 = ce("div");
    instruction12.innerHTML = "<b>Delete</b> to Remove Structures";
    theMenu.append(instruction12);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let instruction13 = ce("div");
    instruction13.innerHTML = "<b>J</b> to Create a Structures GoTo Menu";
    theMenu.append(instruction13);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let instruction14 = ce("div");
    instruction14.innerHTML = "<b>P</b> for Color Player Menu";
    theMenu.append(instruction14);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let instruction15 = ce("div");
    instruction15.innerHTML = "<b>T</b> for Texture Player Menu";
    theMenu.append(instruction15);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let instruction16 = ce("div");
    instruction16.innerHTML = "<b>O</b> for Player Opacity Menu";
    theMenu.append(instruction16);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let instruction17 = ce("div");
    instruction17.innerHTML = "<b>N</b> for Transparent, M for Solid";
    theMenu.append(instruction17);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let instruction18 = ce("div");
    instruction18.innerHTML = "<b>G</b> for Clearing Player Text";
    theMenu.append(instruction18);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let instruction19 = ce("div");
    instruction19.innerHTML = "<b>Control + F</b> to Search, then Left Click to Travel to Search Result";
    theMenu.append(instruction19);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let linkToCode = ce("a");
    linkToCode.href = "https://github.com/ChristopherTopalian/TopalianGameEngineDataNavigator";
    linkToCode.target = "_blank";
    linkToCode.textContent = "Christopher Topalian Data Navigator Code Here";
    theMenu.append(linkToCode);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

