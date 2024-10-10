// menuStructureColorText.js

let theTextID;

function menuStructureColorText(ourStructureId)
{
    theTextID = ge(ourStructureId);

    //-//

    let menuId = 'menuTextColorStructure';

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
    mainDiv.style.width = '300px';
    mainDiv.style.height = '200px';
    mainDiv.style.zIndex = '3';
    ba(mainDiv);

    //-//

    // make the menu draggable
    makeElementDraggable(mainDiv);

    //-//

    let theMenu = ce("div");
    theMenu.className = "divStyle001";
    theMenu.style.marginBottom = 4 +'px';
    theMenu.style.overflowY = "auto";
    mainDiv.append(theMenu);

    //-//

    // close button
    mainDiv.append(makeCloseButton(menuId));

    //-//

    theMenu.append(ce('hr'));

    //-//

    let theTitle = ce("h1");
    theTitle.textContent = "COLOR TEXT";
    theTitle.className = 'menu';
    theMenu.append(theTitle);

    //-//

    theMenu.append(ce('hr'));

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

        ge('hexTextbox').value = colorPicker.value;

        let r = ge('theRed').value = hexToRgb(colorPicker.value).r;

        let g = ge('theGreen').value = hexToRgb(colorPicker.value).g;

        let b = ge('theBlue').value = hexToRgb(colorPicker.value).b;

        theTextID.style.color = "rgb("+r+", "+g+", "+b+")";

        // update structuresArray to show changed value
        updateStructures(ourStructureId);
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

    let redLabel = ce("span");
    redLabel.textContent = "R ";
    theMenu.append(redLabel);

    //-//

    let redInput = ce("input");
    redInput.type = 'text';
    redInput.id = "theRed";
    //redInput.className = "textInput";
    redInput.style.width = '50px';
    redInput.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(redInput);

    //-//

    let greenLabel = ce("span");
    greenLabel.textContent = "G ";
    theMenu.append(greenLabel);

    //-//

    let greenInput = ce("input");
    greenInput.style = 'text';
    greenInput.id = "theGreen";
    greenInput.style.width = '50px';
    greenInput.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(greenInput);

    //-//

    let blueLabel = ce("span");
    blueLabel.textContent = "B ";
    theMenu.append(blueLabel);

    //-//

    let blueInput = ce("input");
    blueInput.type = 'text';
    blueInput.id = "theBlue";
    blueInput.style.width = '50px';
    blueInput.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(blueInput);

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

        theTextID.style.color = "rgb("+red+", "+green+", "+blue+")";

        // update structuresArray to show changed value
        updateStructures(ourStructureId);

        colorPicker.value = hexColor;

        //customStructureColorFromTextInput();
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
        colorChoiceButton.onmouseover = function()
        {
            hoverSound();
        };
        colorChoiceButton.onclick = function()
        {
            clickSound();

            ge(ourStructureId).style.color = "rgb("+colorChoices[z].color+")";

            // split color value to array of rgb
            let rgbValues = colorChoices[z].color.split(',');

            let r = ge("theRed").value = rgbValues[0].trim(); 

            let g = ge("theGreen").value = rgbValues[1].trim();

            let b = ge("theBlue").value = rgbValues[2].trim();

            colorPicker.value = rgbToHex(r, g, b);

            ge('hexTextbox').value = rgbToHex(r, g, b);

            updateStructures(ourStructureId);
        };
        buttonContainer.append(colorChoiceButton);
    }

    //-//

    let customButton = ce("button");
    customButton.className = "ourButton";
    customButton.textContent = "Custom";
    customButton.onclick = function()
    {
        customStructureFontColor();
    };
    theMenu.append(customButton);
}

function customStructureFontColor()
{
    let theColor = prompt("Enter RGB as 255,255,255")

    let theColorFormatted = 'rgb('+theColor+')';

    // color of text on player object
    theTextID.style.color = theColorFormatted;

    let colorSeparated = theColor.split(',');

    // fill in the textarea, to show the value of our choice
    ge("redFontId").value = colorSeparated[0];
    ge("greenFontId").value = colorSeparated[1];
    ge("blueFontId").value = colorSeparated[2];

    // update structuresArray to show the changed value
    updateStructures(ourStructureId);
}

// Read the 3 Textarea, for the red, green, blue values of our structure text color
// Set the text color of our structure
function customStructureTextColorFromTextInput()
{
    let r = ge("theRed").value;
    let g = ge("theGreen").value;
    let b = ge("theBlue").value;
  
    theTextID.style.color = "rgb("+r+", "+g+", "+b+")";

    // fill in the textarea, to show the value of our choice
    ge("theRed").value = r;
    ge("theGreen").value = g;
    ge("theBlue").value = b;

    // update structuresArray, show changed value
    updateStructures(ourStructureId);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

