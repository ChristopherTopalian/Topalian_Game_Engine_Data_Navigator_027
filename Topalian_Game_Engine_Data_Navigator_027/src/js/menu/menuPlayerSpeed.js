//menuPlayerSpeed.js

function menuPlayerSpeed()
{
    let menuId = 'menuSpeedPlayer';

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

    theMenu.append(ce('hr'));

    //-//

    let title = ce("span");
    title.style.color = "rgb(255, 255, 255)";
    title.textContent = "SPEED OPTIONS";
    theMenu.append(title);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let speedValues = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];

    for (let z = 0; z < speedValues.length; z++)
    {
        let speedButton = ce("button");
        speedButton.textContent = speedValues[z];
        speedButton.className = 'ourButton';
        speedButton.onclick = function()
        {
            ourPlayer.speedMultiplier = speedValues[z];

            ge("textSpeed").value = speedValues[z];

            updatePlayer();
        };
        theMenu.append(speedButton);
    }

    //-//

    let customButton = ce("button");
    customButton.onclick = customSpeed;
    customButton.className = "ourButton";
    customButton.textContent = "Custom";
    theMenu.append(customButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let speedLabel = ce("div");
    speedLabel.textContent = "SPEED ";
    let speedInput = ce("textarea");
    speedInput.id = "textSpeed";
    speedInput.className = "textInput";
    speedInput.onkeydown = keyboardControlOff;
    speedLabel.append(speedInput);
    theMenu.append(speedLabel);

    //-//

    let enterButton = ce("button");
    enterButton.onclick = function()
    {
        customSpeedFromTextInput();
        keyboardControlOn();
        enterButtonSound();
    };
    enterButton.className = "ourButton";
    enterButton.textContent = "Enter";
    theMenu.append(enterButton);
}

function customSpeed()
{
    let theSpeed = prompt("Enter Speed 1 to 1000 etc")

    ourPlayer.speedMultiplier = theSpeed;

    if (theSpeed == '' || theSpeed == null)
    {
        ourPlayer.speedMultiplier = 10;
    }

    ge("textSpeed").value = ourPlayer.speedMultiplier;

    ge('infoDiv').textContent = 'Speed: ' + ourPlayer.speedMultiplier;

    // update playerArray to show changed value
    updatePlayer();
}

function customSpeedFromTextInput()
{
    let theSpeed = ge("textSpeed").value;

    ourPlayer.speedMultiplier = theSpeed;

    ge('infoDiv').textContent = 'Speed: ' + ourPlayer.speedMultiplier;

    // update playerArray to show changed value
    updatePlayer();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

