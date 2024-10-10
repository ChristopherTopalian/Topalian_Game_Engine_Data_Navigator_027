// menuPlayerColor.js

function menuPlayerColor()
{
    let menuId = 'menuColorPlayer';

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
    theMenu.style.height = '200px';
    mainDiv.append(theMenu);

    //-//

    // close button
    mainDiv.append(makeCloseButton(menuId));

    //-//

    theMenu.append(ce('hr'));

    //-//

    let colorPlayerText = ce("span");
    colorPlayerText.textContent = "Color Player";
    theMenu.append(colorPlayerText);

    //-//

    theMenu.append(ce('br'));

    //-//

    let colorPicker = ce('input');
    colorPicker.type = 'color';
    colorPicker.id = 'myColorPicker';
    colorPicker.onmouseover = function()
    {
        hoverSound();
    };
    colorPicker.onclick = function()
    {
        clickSound();
    };
    colorPicker.oninput = function()
    {
        clickSound();

        ge(activePlayer).style.backgroundColor = colorPicker.value;

        ge('hexTextbox').value =colorPicker.value;

        ge('theRed').value = hexToRgb(colorPicker.value).r;

        ge('theGreen').value = hexToRgb(colorPicker.value).g;

        ge('theBlue').value = hexToRgb(colorPicker.value).b;
    };
    theMenu.append(colorPicker);

    //-//

    let hexTextbox = ce('input');
    hexTextbox.type = 'text';
    hexTextbox.id = 'hexTextbox';
    hexTextbox.style.width = '100px';
    theMenu.append(hexTextbox);

    //-//

    theMenu.append(ce('br'));

    //-//

    let redTextArea = ce("textarea");
    redTextArea.id = "theRed";
    redTextArea.className = "textInput";
    redTextArea.onkeydown = function()
    {
        keyboardControlOff();
    };

    //-//

    // colorRText
    let colorRText = ce("span");
    colorRText.textContent = "R";
    colorRText.style.marginRight = "5px";
    theMenu.append(colorRText);
    theMenu.append(redTextArea);

    //-//

    theMenu.append(ce('br'));

    //-//

    // colorGText
    let colorGText = ce("span");
    colorGText.textContent = "G";
    colorGText.style.marginRight = "5px";
    theMenu.append(colorGText);

    //-//

    let greenTextArea = ce("textarea");
    greenTextArea.id = "theGreen";
    greenTextArea.className = "textInput";
    greenTextArea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(greenTextArea);

    //-//

    theMenu.append(ce('br'));

    //-//

    // colorBText
    let colorBText = ce("span");
    colorBText.textContent = "B";
    colorBText.style.marginRight = "5px";
    theMenu.append(colorBText);

    //-//

    let blueTextArea = ce("textarea");
    blueTextArea.id = "theBlue";
    blueTextArea.className = "textInput";
    blueTextArea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(blueTextArea);

    //-//

    theMenu.append(ce('br'));

    //-//

    let enterButton = ce("button");
    enterButton.textContent = "Enter";
    enterButton.className = "ourButton";
    enterButton.onclick = function()
    {
        // get RGB values from input fields and convert them to numbers
        let red = parseInt(ge('theRed').value, 10);
        let green = parseInt(ge('theGreen').value, 10);
        let blue = parseInt(ge('theBlue').value, 10);

        // calculate the hex value
        let hexColor = rgbToHex(red, green, blue);

        // set the hex value to the hexTextbox
        ge('hexTextbox').value = hexColor;

        // set the background color of the activePlayer element using RGB values
        ge(activePlayer).style.backgroundColor = 'rgb(' +
            red + ',' +
            green + ',' +
            blue +
        ')';

        colorPicker.value = hexColor;

        keyboardControlOn();
        enterButtonSound();
    };
    theMenu.append(enterButton);

    //-//

    let buttonContainer = ce('div');
    buttonContainer.style.display = 'grid';
    buttonContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
    buttonContainer.style.gap = '0.5px';
    theMenu.append(buttonContainer);

    //-//

    for (let z = 0; z < colorChoices.length; z++)
    {
        let colorChoiceButton = ce("button");
        colorChoiceButton.textContent = colorChoices[z].name;
        colorChoiceButton.className = 'ourButton';
        colorChoiceButton.style.backgroundColor = "rgb("+colorChoices[z].color+")";
        colorChoiceButton.style.cursor = 'pointer';
        colorChoiceButton.onmouseover = function()
        {
            hoverSound();
        };
        colorChoiceButton.onclick = function()
        {
            clickSound();

            ge(activePlayer).style.backgroundColor = "rgb("+colorChoices[z].color+")";

            // split color value to array of rgb
            let rgbValues = colorChoices[z].color.split(',');

            let r = ge("theRed").value = rgbValues[0].trim(); 

            let g = ge("theGreen").value = rgbValues[1].trim();

            let b = ge("theBlue").value = rgbValues[2].trim();

            colorPicker.value = rgbToHex(r, g, b);

            ge('hexTextbox').value = rgbToHex(r, g, b);

            updatePlayer();
        };
        buttonContainer.append(colorChoiceButton);
    }

    //-//

    buttonContainer.append(ce("br"));

    //-//

    let customColorButton = ce("button");
    customColorButton.textContent = "Custom";
    customColorButton.className = "ourButton";
    customColorButton.onclick = function()
    {
        customColor();
    };
    theMenu.append(customColorButton);

    //-//

    showPlayerData();
}

function customColor()
{
    audioPlay("sfx_blip_001", 1.0);

    // color is only applied if NO texture is on the player
    ge(activePlayer).style.backgroundImage = 'none';

    let whichColor = prompt("Enter RGB as 255,255,255")

    let theColorFormatted = 'rgb('+whichColor+')';

    // color of player
    ge(activePlayer).style.backgroundColor = theColorFormatted;

    let colorSeparated = whichColor.split(',');

    // fill in textarea, show value of choice
    ge("theRed").value = colorSeparated[0];
    ge("theGreen").value = colorSeparated[1];
    ge("theBlue").value = colorSeparated[2];

    // update playerArray to show changed value
    updatePlayer();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

