// structuresCreate.js

/*
CREATE a STRUCTURE: 
After the Letter B on the keyboard is pressed, or the Create Button is Left Clicked in the Player Menu, it activates Structure Create Mode, which allows us to place structures in the world using the Left Mouse Button.
Esc Button is used to deactivate Structure Mode.
*/

let structureId = 1;

function structuresCreate(theEvent, theX, theY)
{
    audioPlay("sfx_blip_001", 1.0);

    //-//

    theX = theEvent.pageX;
    theY = theEvent.pageY;

    //-//

    let sizeX = 110;
    let sizeY = 45;

    //-//

    let colorFill = "black";
    let colorText = "white";
    let structureOpacity = 1.0;
    let theTexture = "Default";

    //-//

    let ourStructure = ce("div");
    ourStructure.style.position = "absolute";

    // For a Center Position System, use this way below
    // We minus the structures size divided by itself.
    // This way we place structures according to their center, instead of their top left corner.
    ourStructure.style.left = theX - (sizeX / 2) + 'px';

    ourStructure.style.top = theY - (sizeY / 2) + 'px'; 

    /*
    // For a Top Left Coordinate System, use this way below
    ourStructure.style.left = theX +'px';
    ourStructure.style.top = theY + 'px'; 
    */

    // ourStructure.id = "STRUCTURE" + structureId;

    ourStructure.style.width = sizeX +'px';
    ourStructure.style.height = sizeY + 'px';

    // id
    ourStructure.id = structuresArray.length + 1;

    ourStructure.style.resize = 'both';

    // ourStructure.setAttribute('onclick', 'structuresGetInfo(\''+ourStructure.id+'\');');

    // Open the Structure Edit Menu for the clicked structure
    ourStructure.oncontextmenu = function()
    {
        clickSound();
        menuStructureEdit(ourStructure.id);
    };

    // ourStructure.setAttribute('onclick', 'menuStructureEdit(\''+ourStructure.id+'\');');

    // when clicked activate two functions
    // ourStructure.setAttribute('onclick', 'menuStructureEdit(\''+ourStructure.id+'\');structuresGetInfo(\''+ourStructure.id+'\');');

    ourStructure.style.zIndex = "2";
    ourStructure.style.border = "solid 2px rgba(100, 100, 255, 1.0)";
    ourStructure.style.background = colorFill;
    ourStructure.style.opacity = structureOpacity;

    // ourStructure.style.backgroundImage = 'url("https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/wood1.jpg")';

    ourStructure.style.backgroundImage= theTexture;

    // PADDING
    // ourStructure.style.paddingTop = "2px";

    ourStructure.style.fontFamily = "arial";
    ourStructure.style.fontWeight = "bold";
    ourStructure.style.fontSize = "20px";
    ourStructure.style.color = colorText;
    ourStructure.style.textAlign = "center";

    ourStructure.style.overflowY = "scroll";

    // show the ID, X, and Y, on the STRUCTURE
    ourStructure.innerText = ourStructure.id + "\n" + "Name" + "\n" +  theX + ", " + theY;

    // structuresArray[structureId].name

    let structureAttributes = 
    {
        // name: ourStructure.id,   //name

        name: "Name",   // name
        id: ourStructure.id,   // id
        posX: theX,      // posX
        posY: theY,      //posY
        sizeX: sizeX,   // sizeX
        sizeY: sizeY,   // sizeY
        colorFill: colorFill,  // fill color
        colorText: colorText,  // text color
        opacity: structureOpacity, //opacity
        texture: theTexture  // texture
    };

    // add the new structure's name, id, posX, posY, sizeX, and sizeY to our structuresArray
    structuresArray.push(structureAttributes); 

    console.log(JSON.stringify(structuresArray));

    ba(ourStructure);

    makeElementDraggable(ourStructure);

    showStructureData();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

