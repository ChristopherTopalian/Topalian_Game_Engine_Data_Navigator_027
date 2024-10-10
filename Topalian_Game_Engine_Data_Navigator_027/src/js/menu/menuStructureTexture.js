// menuStructureTexture.js

function menuStructureTexture(theStructureId)
{
    let menuId = 'menuTextureStructure';

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

    let textureOptionsLabel = ce("h1");
    textureOptionsLabel.textContent = "TEXTURE OPTIONS";
    textureOptionsLabel.className = 'menu';
    theMenu.append(textureOptionsLabel);

    //-//

    theMenu.append(ce('hr'));

    //-//

    for (let z = 0; z < textureArray.length; z++)
    {
        let textureButton = ce("button");
        textureButton.onclick = function()
        {
            if (online == true)
            {
                ge(theStructureId).style.backgroundImage = 'url('+textureArray[z].textureOnline+')';
            }
            else if (online == false)
            {
                ge(theStructureId).style.backgroundImage = 'url('+textureArray[z].textureOffline+')';
            }
            updateStructures(theStructureId);
        };
        textureButton.className = "ourButton";
        textureButton.textContent = textureArray[z].name;
        theMenu.append(textureButton);

        //-//

        theMenu.append(ce('br'));
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

