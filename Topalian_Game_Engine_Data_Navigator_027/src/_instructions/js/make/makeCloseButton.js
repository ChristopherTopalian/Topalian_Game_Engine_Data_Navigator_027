// makeCloseButton.js

function makeCloseButton(whichMenuId)
{
    let closeButton = ce("button");
    closeButton.className = "ourButton";
    closeButton.style.position = "absolute";
    closeButton.style.top = "0px";
    closeButton.style.right = "15px";
    closeButton.textContent = 'X';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '10px';
    closeButton.onclick = function()
    {
        clickSound();
        removeElement(whichMenuId);
        keyboardControlOn();
    };
    closeButton.onmouseover = function()
    {
        hoverSound();
    };
    return closeButton; 
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

