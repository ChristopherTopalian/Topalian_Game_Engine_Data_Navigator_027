// mousePos.js

function mousePos(whichId)
{
    let mouseX = event.pageX;
    let mouseY = event.pageY;

    // let mousePos = "Mouse" + "\n" + "X " + mouseX + "\n"+ "Y " + mouseY;

    let mousePos = "X " + mouseX + "\n"+ 
    "Y " + mouseY;

    console.log(mousePos);

    ge('infoDiv').innerText = mousePos;

    if (cameraFlag == 0)
    {
        ourPlayer.x = mouseX;
        ourPlayer.y = mouseY;

        movePlayer(whichId);

        cameraFlag = 1;
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

