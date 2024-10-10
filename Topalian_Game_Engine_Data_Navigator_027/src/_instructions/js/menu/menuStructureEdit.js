// menuStructureEdit.js

// when person clicks a structure, an edit menu appears to edit that structure.

function menuStructureEdit(theStructureId)
{
    // remove the text to find the digits only which number in the array, based on id number - 1 \d find digit
    let theNumberOnlyStructure = theStructureId.replace(/\D/g,'') - 1;

    //-//

    let menuId = 'menuStructureEdit';

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
    theMenu.style.height = '200px';
    mainDiv.append(theMenu);

    //-//

    // close button
    mainDiv.append(makeCloseButton(menuId));

    //-//

    // prevent menu leaving screen left side
    if (positionGet(menuId).x <= 30)
    {
        theMenu.style.left = '40px';
    }

    // prevent menu leaving screen top side
    if (positionGet(menuId).y <= 200)
    {
        theMenu.style.top = '100px';
    }

    //-//

    theMenu.append(ce('hr'));

    //-//

    let idLabel = ce("span");
    idLabel.className = "textCompact";
    idLabel.textContent =  theStructureId;
    idLabel.style.fontWeight = 'bold';
    theMenu.append(idLabel);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let structureNameText = ce("div");
    structureNameText.id = "structureNameText";
    structureNameText.textContent = structuresArray[theNumberOnlyStructure].name;
    theMenu.append(structureNameText);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let nameLabel = ce("span");
    nameLabel.className = "textCompact";
    nameLabel.textContent = "NAME";
    theMenu.append(nameLabel);

    //-//

    theMenu.append(ce("br"));

    //-//

    let nameButton = ce("button");
    nameButton.className = "ourButton";
    nameButton.textContent = "NAME";
    nameButton.onmouseover = function()
    {
        hoverSound();
    };
    nameButton.onclick = function()
    {
        clickSound();
        menuStructureName(theStructureId);
    };
    theMenu.append(nameButton);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let colorLabel = ce("span");
    colorLabel.className = "textCompact";
    colorLabel.textContent = "COLOR";
    theMenu.append(colorLabel);

    //-//

    theMenu.append(ce("br"));

    //-//

    let colorButton = ce("button");
    colorButton.className = "ourButton";
    colorButton.textContent = "COLOR";
    colorButton.onmouseover = function()
    {
        hoverSound();
    };
    colorButton.onclick = function()
    {
        clickSound();
        menuStructureColor(theStructureId);
    };
    theMenu.append(colorButton);

    //-//

    let colorTextButton = ce("button");
    colorTextButton.className = "ourButton";
    colorTextButton.textContent = "TEXT";
    colorTextButton.onmouseover = function()
    {
        hoverSound();
    };
    colorTextButton.onclick = function()
    {
        clickSound();
        menuStructureColorText(theStructureId);
    };
    theMenu.append(colorTextButton);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let textureLabel = ce("span");
    textureLabel.className = "textCompact";
    textureLabel.textContent = "TEXTURE";
    theMenu.append(textureLabel);

    //-//

    theMenu.append(ce("br"));

    //-//

    let textureButton = ce("button");
    textureButton.className = "ourButton";
    textureButton.textContent = "TEXTURE";
    textureButton.onmouseover = function()
    {
        hoverSound();
    };
    textureButton.onclick = function()
    {
        clickSound();
        menuStructureTexture(theStructureId);
    };
    theMenu.append(textureButton);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let alphaLabel = ce("span");
    alphaLabel.className = "textCompact";
    alphaLabel.textContent = "ALPHA";
    theMenu.append(alphaLabel);

    //-//

    theMenu.append(ce("br"));

    //-//

    let opacityButton = ce("button");
    opacityButton.className = "ourButton";
    opacityButton.textContent = "OPACITY";
    opacityButton.onmouseover = function()
    {
        hoverSound();
    };
    opacityButton.onclick = function()
    {
        clickSound();
        menuStructureOpacity(theStructureId);
    };
    theMenu.append(opacityButton);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let positionLabel = ce("span");
    positionLabel.className = "textCompact";
    positionLabel.textContent = "POSITION";
    theMenu.append(positionLabel);

    //-//

    theMenu.append(ce("br"));

    //-//

    let getPosButton = ce("button");
    getPosButton.className = "ourButton";
    getPosButton.textContent = "GET POS";
    getPosButton.onmouseover = function()
    {
        hoverSound();
    };
    getPosButton.onclick = function()
    {
        clickSound();
        menuStructurePositionGet(theStructureId);
    };
    theMenu.append(getPosButton);

    //-//

    let setPosButton = ce("button");
    setPosButton.className = "ourButton";
    setPosButton.textContent = "SET POS";
    setPosButton.onmouseover = function()
    {
        hoverSound();
    };
    setPosButton.onclick = function()
    {
        clickSound();
        menuStructurePositionSet(theStructureId);
    };
    theMenu.append(setPosButton);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let sizeLabel = ce("span");
    sizeLabel.className = "textCompact";
    sizeLabel.textContent = "SIZE";
    theMenu.append(sizeLabel);

    //-//

    theMenu.append(ce("br"));

    //-//

    let getSizeButton = ce("button");
    getSizeButton.className = "ourButton";
    getSizeButton.textContent = "GET";
    getSizeButton.onmouseover = function()
    {
        hoverSound();
    };
    getSizeButton.onclick = function()
    {
        clickSound();
        menuStructureSizeGet(theStructureId);
    };
    theMenu.append(getSizeButton);

    //-//

    let setSizeButton = ce("button");
    setSizeButton.className = "ourButton";
    setSizeButton.textContent = "SET";
    setSizeButton.onmouseover = function()
    {
        hoverSound();
    };
    setSizeButton.onclick = function()
    {
        clickSound();
        menuStructureSizeSet(theStructureId);
    };
    theMenu.append(setSizeButton);

    //-//

    theMenu.append(ce("hr"));

    //-//

    let distanceLabel = ce("span");
    distanceLabel.className = "textCompact";
    distanceLabel.textContent = "DISTANCE";
    theMenu.append(distanceLabel);

    //-//

    theMenu.append(ce("br"));

    //-//

    let distanceButton = ce("button");
    distanceButton.className = "ourButton";
    distanceButton.textContent = "DISTANCE FINDER";
    distanceButton.onmouseover = function()
    {
        hoverSound();
    };
    distanceButton.onclick = function()
    {
        clickSound();
        menuStructureDistance(theStructureId);
    };
    theMenu.append(distanceButton);

    //-//

    theMenu.append(ce("hr"));

    //-//

    showStructureData();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

