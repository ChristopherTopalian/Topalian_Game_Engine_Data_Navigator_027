// menuStructurePositionSet.js

let thePositionSetID;

let worldPositionId;

let numberOnlyStructure;

function menuStructurePositionSet(theStructureId)
{
    thePositionSetID = ge(theStructureId);

    worldPositionId = theStructureId;

    // remove the text to find the digits only
    // which number in the array, based on id number - 1
    // \d find digit
    numberOnlyStructure = worldPositionId.replace(/\D/g, '') - 1;

    //-//

    let menuId = 'menuPositionStructureSet';

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
    theMenu.style.height = '200px';
    theMenu.style.marginBottom = 4 +'px';
    theMenu.style.overflowY = "auto";
    mainDiv.append(theMenu);

    //-//

    // close button
    mainDiv.append(makeCloseButton(menuId));

    //-//

    theMenu.append(ce('hr'));

    //-//

    let positionLabel = ce("h1");
    positionLabel.textContent = "STRUCTURE POSITION OPTIONS";
    positionLabel.className = 'menu';
    theMenu.append(positionLabel);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let structureValues = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];

    for (let x = 0; x < structureValues.length; x++)
    {
        let theButton = ce("button");
        theButton.onclick = function()
        {
            structureMoves(x);
        };
        theButton.className = "ourButton";
        theButton.textContent = structureValues[x];
        theMenu.append(theButton);
    }

    //-//

    theMenu.append(ce('hr'));

    //-//

    let customPositionButton = ce("button");
    customPositionButton.onclick = function()
    {
        customPositionStructure();
    };
    customPositionButton.className = "ourButton";
    customPositionButton.textContent = "Custom Structure Position";
    theMenu.append(customPositionButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let xPosLabel = ce("span");
    xPosLabel.textContent = "X POS";
    theMenu.append(xPosLabel);

    //-//

    theMenu.append(ce("nbsp"));

    //-//

    let xPosTextarea = ce("textarea");
    xPosTextarea.id = "customPosX";
    xPosTextarea.className = "textInput";
    xPosTextarea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(xPosTextarea);

    //-//

    theMenu.append(ce("br"));

    //-//

    let yPosLabel = ce("span");
    yPosLabel.textContent = "Y POS";
    theMenu.append(yPosLabel);

    //-//

    theMenu.append(ce("nbsp"));

    //-//

    let yPosTextarea = ce("textarea");
    yPosTextarea.id = "customPosY";
    yPosTextarea.className = "textInput";
    yPosTextarea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(yPosTextarea);

    //-//

    theMenu.append(ce("br"));

    //-//

    let enterButton = ce("button");
    enterButton.onclick = function()
    {
        customPositionStructureText();
        keyboardControlOn();
        enterButtonSound();
    };
    enterButton.className = "ourButton";
    enterButton.textContent = "Enter";
    theMenu.append(enterButton);
}

// buttons move the structure
function structureMoves(theLocation)
{
    audioPlay("sfx_blip_001", 1.0);

    if (theLocation == '1')
    {
        thePositionSetID.x = 100;
        thePositionSetID.y = 100;
    }
    if (theLocation == '2')
    {
        thePositionSetID.x = 100;
        thePositionSetID.y = 200;
    }
    if (theLocation == '3')
    {
        thePositionSetID.x = 100;
        thePositionSetID.y = 300;
    }
    if (theLocation == '4')
    {
        thePositionSetID.x = 100;
        thePositionSetID.y = 400;
    }
    if (theLocation == '5')
    {
        thePositionSetID.x = 100;
        thePositionSetID.y = 500;
    }
    if (theLocation == '6')
    {
        thePositionSetID.x = 100;
        thePositionSetID.y = 600;
    }
    if (theLocation == '7')
    {
        thePositionSetID.x = 100;
        thePositionSetID.y = 700;
    }
    if (theLocation == '8')
    {
        thePositionSetID.x = 100;
        thePositionSetID.y = 800;
    }
    if (theLocation == '9')
    {
        thePositionSetID.x = 100;
        thePositionSetID.y = 900;
    }
    if (theLocation == '0')
    {
        thePositionSetID.x = 100;
        thePositionSetID.y = 1000;
    }

    // move the structure
    thePositionSetID.style.left = thePositionSetID.x + 'px';

    thePositionSetID.style.top = thePositionSetID.y + 'px';

    // update the structuresArray posX and posY
    structuresArray[numberOnlyStructure].posX = thePositionSetID.x;

    structuresArray[numberOnlyStructure].posY = thePositionSetID.y;

    // update the innerText of the structure
    // show the structure id, name, posX, and posY
    thePositionSetID.innerText = structuresArray[numberOnlyStructure].id + "\n" + structuresArray[numberOnlyStructure].name + "\n" + structuresArray[numberOnlyStructure].posX + "\n" + structuresArray[numberOnlyStructure].posY;

    // update the textArea of the posX and posY
    ge("customPosX").value = structuresArray[numberOnlyStructure].posX;

    ge("customPosY").value = structuresArray[numberOnlyStructure].posY;

    updateStructures(worldPositionId);
}

function customPositionStructure()
{
    let playerX = prompt("Enter X Position");
    let playerY = prompt("Enter Y Position");

    // if no inputted value, keep player where they are
    if (playerX == '' || playerY == '')
    {
        thePositionSetID.x = thePositionSetID.x;
        thePositionSetID.y = thePositionSetID.y;
        return;
    }

    thePositionSetID.x = parseInt(playerX);

    // y location of the structure
    thePositionSetID.y = parseInt(playerY);

    // if person did answer Y position, move structure
    if (playerY != '')
    {
        // movePlayer();
        thePositionSetID.style.left = thePositionSetID.x + 'px';
        thePositionSetID.style.top = thePositionSetID.y + 'px';
    }

    // update the structuresArray posX and posY
    structuresArray[numberOnlyStructure].posX = thePositionSetID.x;

    structuresArray[numberOnlyStructure].posY = thePositionSetID.y;

    // update the innerText of the structure
    // show the structure id, name, posX, and posY
    thePositionSetID.innerText = structuresArray[numberOnlyStructure].id + "\n" + structuresArray[numberOnlyStructure].name + "\n" + structuresArray[numberOnlyStructure].posX + "\n" + structuresArray[numberOnlyStructure].posY;

    // update the textArea of the posX and posY
    ge("customPosX").value = structuresArray[numberOnlyStructure].posX;

    ge("customPosY").value = structuresArray[numberOnlyStructure].posY;

    // update structuresArray to show the changed value
    updateStructures(worldPositionId);
}

function customPositionStructureText()
{
    let playerX = ge("customPosX").value;
    let playerY = ge("customPosY").value;

    // if no inputted value, keep person where they are
    if (playerY == '')
    {
        thePositionSetID.x = thePositionSetID.x;
        thePositionSetID.y = thePositionSetID.y;
        return;
    }

    thePositionSetID.x = parseInt(playerX);

    // y location of the structure
    thePositionSetID.y = parseInt(playerY);

    // if person did answer Y position, move structure
    if (playerY != '')
    {
        // movePlayer();
        thePositionSetID.style.left = thePositionSetID.x + 'px';
        thePositionSetID.style.top = thePositionSetID.y + 'px';
    }

    // update the structuresArray posX and posY
    structuresArray[numberOnlyStructure].posX = thePositionSetID.x;

    structuresArray[numberOnlyStructure].posY = thePositionSetID.y;

    // update the innerText of the structure
    // show the structure id, name, posX, and posY
    thePositionSetID.innerText = structuresArray[numberOnlyStructure].id + "\n" + structuresArray[numberOnlyStructure].name + "\n" + structuresArray[numberOnlyStructure].posX + "\n" + structuresArray[numberOnlyStructure].posY;

    // update the textArea of the posX and posY
    ge("customPosX").value = structuresArray[numberOnlyStructure].posX;

    ge("customPosY").value = structuresArray[numberOnlyStructure].posY;

    updateStructures(worldPositionId);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

