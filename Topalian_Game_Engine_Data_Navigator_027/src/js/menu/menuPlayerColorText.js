// menuPlayerColorText.js

function menuPlayerColorText()
{
    let menuId = 'menuColorPlayerText';

    if (ge(menuId))
    {
        removeElement(menuId);
    }

    //-//

    let mainDiv = ce("div");
    mainDiv.id = menuId;
    mainDiv.style.position = "absolute";
    // position by player
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

    let titleSpan = ce("span");
    titleSpan.textContent = "COLOR TEXT";
    titleSpan.className = 'menu';
    theMenu.append(titleSpan);

    //-//

    theMenu.append(ce("br"));

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

        ge(activePlayer).style.color = colorPicker.value;

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

    let redLabel = ce('label');
    redLabel.textContent = "R ";
    theMenu.append(redLabel);

    //-//

    let redTextArea = ce("textarea");
    redTextArea.id = "theRed";
    redTextArea.className = 'textInput';
    redTextArea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(redTextArea);

    //-//

    theMenu.append(ce("br"));

    //-//

    let greenLabel = ce('label');
    greenLabel.textContent = "G ";
    theMenu.append(greenLabel);

    //-//

    let greenTextArea = ce("textarea");
    greenTextArea.id = "theGreen";
    greenTextArea.className = 'textInput';
    greenTextArea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(greenTextArea);

    //-//

    theMenu.append(ce("br"));

    //-//

    let blueLabel = ce('label');
    blueLabel.textContent = "B ";
    theMenu.append(blueLabel);

    //-//

    let blueTextArea = ce("textarea");
    blueTextArea.id = "theBlue";
    blueTextArea.className = 'textInput';
    blueTextArea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(blueTextArea);

    //-//

    theMenu.append(ce("br"));

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
        ge(activePlayer).style.color = 'rgb(' +
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

    theMenu.append(ce("hr"));

    //-//

    let buttonContainer = ce('div');
    buttonContainer.style.display = 'grid';
    buttonContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
    theMenu.append(buttonContainer);

    //-//

    for (let z = 0; z < colorChoices.length; z++)
    {
        let colorChoiceButton = ce("button");
        colorChoiceButton.textContent = colorChoices[z].name;
        colorChoiceButton.className = 'ourButton';
        colorChoiceButton.style.backgroundColor = "rgb("+colorChoices[z].color+")";
        colorChoiceButton.onclick = function()
        {
            ge(activePlayer).style.color = "rgb("+colorChoices[z].color+")";

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

    theMenu.append(ce("br"));

    //-//

    let customButton = ce("button");
    customButton.className = 'ourButton';
    customButton.textContent = 'Custom';
    customButton.onclick = function()
    {
        customFontColor();
    };
    theMenu.append(customButton);
}

function customFontColor()
{
    let theColor = prompt("Enter RGB as 255, 255, 255")

    let theColorFormatted = 'rgb('+theColor+')';

    // color of text on player object
    ge(activePlayer).style.color = theColorFormatted;

    let colorSeparated = theColor.split(',');

    // fill in the textarea, to show the value of our choice
    ge("theRed").value = colorSeparated[0];
    ge("theGreen").value = colorSeparated[1];
    ge("theBlue").value = colorSeparated[2];

    // update playerArray to show changed value
    updatePlayer();
}

// Read the 3 Textarea, for the red, green, blue values of our player text color
// Set the text color of our player
function customPlayerTextColorFromTextInput()
{
    let r = ge("theRed").value;
    let g = ge("theGreen").value;
    let b = ge("theBlue").value;

    ge(activePlayer).style.color= "rgb("+r+","+g+","+b+")";

    // fill textarea, show value of choice
    ge("theRed").value = r;
    ge("theGreen").value = g;
    ge("theBlue").value = b;

    // update playerArray to show changed value
    updatePlayer();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

