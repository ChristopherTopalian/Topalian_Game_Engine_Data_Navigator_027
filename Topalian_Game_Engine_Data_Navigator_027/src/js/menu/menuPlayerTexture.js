// menuPlayerTexture.js

let textureArray =
[
    {
        name: "Default",
        textureOffline: "src/media/textures/jane.png",
        textureOnline: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/jane.png"
    },
    {
        name: "Concrete 1",
        textureOffline: "src/media/textures/concrete1.jpg",
        textureOnline: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/concrete1.jpg"
    },
    {
        name: "Wood 1",
        textureOffline: "./src/media/textures/wood1.jpg",
        textureOnline: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/wood1.jpg"
    },
    {
        name: "Zebra 1",
        textureOffline: "src/media/textures/zebra1.jpg",
        textureOnline: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/zebra1.jpg"
    },
    {
        name: "Boxing Glove",
        textureOffline: "src/media/textures/boxingglove.png",
        textureOnline: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/boxingglove.png"
    },
    {
        name: "Jane",
        textureOffline: "src/media/textures/jane.png",
        textureOnline: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/jane.png"
    }
];

function menuPlayerTexture2()
{
    let menuId = 'menuTexturePlayer';

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

    let theTitle = ce("span");
    theTitle.style.color = "rgb(255, 255, 255)";
    theTitle.textContent = "TEXTURE OPTIONS";
    theMenu.append(theTitle);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let textureButtonContainer = ce('div');
    textureButtonContainer.style.display = 'grid';
    textureButtonContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
    textureButtonContainer.style.gap = '0.5px';
    theMenu.append(textureButtonContainer);

    for (let z = 0; z < textureArray.length; z++)
    {
        let textureButton = ce("img");
        textureButton.onclick = function()
        {
            if (online == true)
            {
                ge(activePlayer).style.backgroundImage = 'url('+textureArray[z].textureOnline+')';
            }
            else if (online == false)
            {
                ge(activePlayer).style.backgroundImage = 'url('+textureArray[z].textureOffline+')';
            }
            updatePlayer();
        };
        textureButton.title = textureArray[z].name;

        if (online == true)
        {
            textureButton.src = textureArray[z].textureOnline;
        }
        else if (online == false)
        {
            textureButton.src = textureArray[z].textureOffline;
        }
        textureButton.style.width = '100px';
        textureButtonContainer.append(textureButton);

        //-//

        theMenu.append(ce('br'));
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

