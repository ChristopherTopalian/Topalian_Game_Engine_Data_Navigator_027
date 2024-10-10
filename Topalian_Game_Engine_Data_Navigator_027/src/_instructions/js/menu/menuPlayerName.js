// menuPlayerName.js

function menuPlayerName(whichId)
{
    let menuId = 'menuNamePlayer';

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
    theMenu.style.width = '200px';
    mainDiv.append(theMenu);

    //-//

    // close button
    mainDiv.append(makeCloseButton(menuId));

    //-//

    let hr = ce("hr");
    hr.style.height = "1px";
    hr.style.border = "none";
    hr.style.backgroundColor = "rgb(50, 50, 50)";
    hr.style.color = "rgb(50, 50, 50)";
    theMenu.append(hr);

    //-//

    let titleSpan = ce("span");
    titleSpan.textContent = "NAME OF PLAYER";
    titleSpan.style.color = "rgb(255, 255, 255)";
    titleSpan.className = 'menu';
    theMenu.append(titleSpan);

    //-//

    theMenu.append(ce('br'));

    //-//

    let nameLabel = ce('div');
    nameLabel.textContent = "Name ";
    theMenu.append(nameLabel);

    //-//

    let nameTextArea = ce("textarea");
    nameTextArea.id = "thePlayerName";
    nameTextArea.className = "textInput";
    nameTextArea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(nameTextArea);

    //-//

    theMenu.append(ce('br'));

    //-//

    let enterButton = ce("button");
    enterButton.textContent = "Enter";
    enterButton.className = "ourButton";
    enterButton.onclick = function()
    {
        enterButtonSound();

        ge('infoDivPlayer').innerText =  nameTextArea.value;

        playerArray[0].name = nameTextArea.value;

        showPlayerData();

        keyboardControlOn();
    };
    theMenu.append(enterButton);

    //-//

    let hr2 = ce("hr");
    hr2.className = "hrCompact";
    theMenu.append(hr2);

    //-//

    let customButton = ce("button");
    customButton.textContent = "Custom";
    customButton.className = "ourButton";
    customButton.onclick = customPlayerName;
    theMenu.append(customButton);
}

function customPlayerName()
{
    let theName = prompt("Enter Name")

    // update textarea, to show name entered
    ge("thePlayerName").value = theName;

    playerArray[0].name = theName;

    ge('infoDivPlayer').textContent = theName;

    showPlayerData();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

