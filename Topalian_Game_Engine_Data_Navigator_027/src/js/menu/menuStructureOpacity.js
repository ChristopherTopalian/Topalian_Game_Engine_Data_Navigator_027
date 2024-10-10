// menuStructureOpacity.js

let worldOpacityId;

let theOpacityID;

let theNumberOnly;

function menuStructureOpacity(theStructureId)
{
    theOpacityID = ge(theStructureId);
    worldOpacityId = theStructureId;

    // remove text to find digits only
    let theNumberOnly = theStructureId.replace(/\D/g,'') - 1;

    //-//

    audioPlay("sfx_blip_001", 1.0);

    //-//

    let menuId = 'menuOpacityStructure';

    if (ge(menuId))
    {
        removeElement(menuId);
    }

    //-//

    let mainDiv = ce("div");
    mainDiv.id = menuId;
    mainDiv.style.position = "absolute";
    mainDiv.style.left = ourPlayer.x + 150 +'px';
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
    theMenu.style.marginBottom = 4 +'px';
    theMenu.style.overflowY = "auto";
    mainDiv.append(theMenu);

    //-//

    // close button
    mainDiv.append(makeCloseButton(menuId));

    //-//

    theMenu.append(ce('hr'));

    //-//

    let opacityLabel = ce("h1");
    opacityLabel.style.color = "rgb(255, 255, 255)";
    opacityLabel.textContent = "OPACITY OF STRUCTURE";
    opacityLabel.className = 'menu';
    opacityLabel.style.color = 'rgb(0, 255, 255)';
    theMenu.append(opacityLabel);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let alphaText = ce("span");
    alphaText.textContent = "Alpha";
    theMenu.append(alphaText);

    //-//

    theMenu.append(ce("nbsp"));

    //-//

    let alphaTextarea = ce("textarea");
    alphaTextarea.id = "theOpacity";
    alphaTextarea.className = "textInput";
    alphaTextarea.onkeydown = function()
    {
        keyboardControlOff();
    };
    theMenu.append(alphaTextarea);

    //-//

    theMenu.append(ce("br"));

    //-//

    let enterButton = ce("button");
    enterButton.onclick = function()
    {
        customStructureOpacityFromTextInput();
        keyboardControlOn();
        enterButtonSound();
    };
    enterButton.className = "ourButton";
    enterButton.textContent = "Enter";
    theMenu.append(enterButton);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let opacityValues = [
        0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0
    ];

    for (let z = 0; z < opacityValues.length; z++)
    {
        let opacityButton = ce("button");
        opacityButton.textContent = opacityValues[z];
        opacityButton.className = 'ourButton';
        opacityButton.onclick = function()
        {
            ge(theStructureId).style.opacity = opacityValues[z];

            ge("theOpacity").value = opacityValues[z]; 

            updateStructures(theStructureId);
        };
        theMenu.append(opacityButton);
    }

    //-//

    theMenu.append(ce("br"));

    //-//

    let customButton = ce("button");
    customButton.onclick = function()
    {
        customStructureOpacity();
    };
    customButton.className = "ourButton";
    customButton.textContent = "Custom";
    theMenu.append(customButton);

    //-//

    theMenu.append(ce('br'));
}

function customStructureOpacity()
{
    let theOpacity = prompt("Enter Opacity as 0.0 to 1.0")

    // opacity of structure
    theOpacityID.style.opacity = theOpacity;

    // fill in the textarea, to show the value of our choice
    ge("theOpacity").value = theOpacity;

    // update structuresArray to show the changed value
    updateStructures(worldOpacityId);
}

// Read the 3 Textarea, for the opacity value of our structure
// Set the opacity on our structure
function customStructureOpacityFromTextInput()
{
    let theOpacity = ge("theOpacity").value;
  
    theOpacityID.style.opacity = theOpacity;

    // update structuresArray to show the changed value
    updateStructures(worldOpacityId);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

