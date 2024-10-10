// menuPlayerPositionSet.js

function menuPlayerPositionSet()
{
    let menuId = 'menuPositionPlayerSet';

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

    theMenu.append(ce("hr"));

    //-//

    let menuTitle = ce("span");
    menuTitle.textContent = "SET PLAYER POSITION";
    menuTitle.className = 'menu';
    theMenu.append(menuTitle);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let buttonContainer = ce('div');
    theMenu.append(buttonContainer);

    //-//

    let positionValues = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];

    for (let x = 0; x < positionValues.length; x++)
    {
        let button1 = ce("button");
        button1.className = "ourButton";
        button1.onclick = function()
        {
            playerMoveTo(activePlayer, positionValues[x]);
        };
        button1.textContent = positionValues[x];
        buttonContainer.append(button1);
    }

    //-//

    buttonContainer.append(ce("br"));

    //-//

    theMenu.append(ce("hr"));

    //-//

    let customButton = ce("button");
    customButton.className = "ourButton";
    customButton.onclick = function()
    {
        customPosition();
    };
    customButton.textContent = "Custom Player Position";
    theMenu.append(customButton);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let label1 = ce("label");
    label1.textContent = "X ";
    theMenu.append(label1);

    //-//

    let textArea1 = ce("textarea");
    textArea1.id = "customPosX";
    textArea1.className = "textInput";
    textArea1.onkeydown = function() {
        keyboardControlOff();
    };
    theMenu.append(textArea1);

    //-//

    theMenu.append(ce('br'));

    //-//

    let label2 = ce("label");
    label2.textContent = "Y ";
    theMenu.append(label2);

    //-//

    let textArea2 = ce("textarea");
    textArea2.id = "customPosY";
    textArea2.className = "textInput";
    textArea2.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(textArea2);

    //-//

    theMenu.append(ce("br"));

    //-//

    let enterButton = ce("button");
    enterButton.className = "ourButton";
    enterButton.onclick = function()
    {
        customPositionText();
        keyboardControlOn();
        enterButtonSound();
    };
    enterButton.textContent = "Enter";
    theMenu.append(enterButton);
}

// move player to a preset location, based on which button was pressed
function playerMoveTo(whichId, theLocation)
{
    audioPlay("sfx_blip_001", 1.0);

    if (theLocation == '1')
    {
        ourPlayer.x = 100;
        ourPlayer.y = 700;
    }

    if (theLocation == '2')
    {
        ourPlayer.x = 500;
        ourPlayer.y = 700;
    }

    if (theLocation == '3')
    {
        ourPlayer.x = 1000;
        ourPlayer.y = 700;
    }

    if (theLocation == '4')
    {
        ourPlayer.x = 100;
        ourPlayer.y = 200;
    }

    if (theLocation == '5')
    {
        ourPlayer.x = 500;
        ourPlayer.y = 200;
    }

    if (theLocation == '6')
    {
        ourPlayer.x = 1000;
        ourPlayer.y = 200;
    }

    if (theLocation == '7')
    {
        ourPlayer.x = 700;
        ourPlayer.y = 700;
    }

    if (theLocation == '8')
    {
        ourPlayer.x = 50;
        ourPlayer.y = 900;
    }

    if (theLocation == '9')
    {
        ourPlayer.x = 50;
        ourPlayer.y = 100;
    }

    if (theLocation == '0')
    {
        ourPlayer.x = 300;
        ourPlayer.y = 700;
    }

    movePlayer(activePlayer);

    // update the playerArray posX
    playerArray[0].posX = ourPlayer.x;

    // update the playerArray posY
    playerArray[0].posY = ourPlayer.y;

    // update the textArea of the posX and posY
    ge("customPosX").value = ourPlayer.x;
    ge("customPosY").value = ourPlayer.y

    // show the playerArray data in the textarea that has the id named textAreaPlayerData
    showPlayerData();

    // update playerArray to show the changed value
    // updatePlayer();
}

function customPosition()
{
    let playerX = prompt("Enter X Position");
    let playerY = prompt("Enter Y Position");

    // if person doesn't input a value, then keep the player where they are
    if (playerX == '' || playerY == '')
    {
        ourPlayer.x = ourPlayer.x;
        ourPlayer.y = ourPlayer.y;
        return;
    }

    // x location of the player
    ourPlayer.x= parseFloat(playerX);

    // y location of the player
    ourPlayer.y= parseFloat(playerY);

    // if person did answer Y position, move player
    if (playerY != '')
    {
        movePlayer(activePlayer);
    }

    // update the playerArray posX
    playerArray[0].posX = ourPlayer.x;

    // update the playerArray posY
    playerArray[0].posY = ourPlayer.y;

    // show the playerArray data in the textarea that has the id named textAreaPlayerData
    showPlayerData();

    ge("customPosX").value = ourPlayer.x;
    ge("customPosY").value = ourPlayer.y;

    // update playerArray to show changed value
    // updatePlayer();
}

function customPositionText()
{
    let playerX = ge("customPosX").value;
    let playerY = ge("customPosY").value;

    // if person doesn't input a value, then keep person where they are
    if (playerY == '')
    {
        ourPlayer.x = ourPlayer.x;
        ourPlayer.y = ourPlayer.y;
        return;
    }

    // x location of the player
    ourPlayer.x= parseFloat(playerX);

    // y location of the player
    ourPlayer.y= parseFloat(playerY);

    // if person did answer Y position, move player
    if (playerY != '')
    {
        movePlayer(activePlayer);
    }

    // update the playerArray posX
    playerArray[0].posX = ourPlayer.x;

    // update the playerArray posY
    playerArray[0].posY = ourPlayer.y;

    // show the playerArray data in the textarea that has the id named textAreaPlayerData
    showPlayerData();

    // update playerArray to show changed value
    // updatePlayer();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

