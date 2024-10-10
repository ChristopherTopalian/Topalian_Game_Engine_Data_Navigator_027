// makeBackground.js

function makeBackground(whichWidth, whichHeight)
{
    let bgDiv = ce('div');
    bgDiv.id = 'bgDiv';
    bgDiv.style.position = 'absolute';
    bgDiv.style.left = '0px';
    bgDiv.style.top = '0px';
    bgDiv.style.width = whichWidth + 'px';
    bgDiv.style.height = whichHeight + 'px';
    bgDiv.style.backgroundColor = 'rgb(0, 0, 0)';

    if (online == true)
    {
        bgDiv.style.background = 'url("https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/stars-nice-edited_orig.png")';
    }
    else if (online == false)
    {
        bgDiv.style.background = 'url("src/media/textures/stars-nice-edited_orig.png")';
    }
    bgDiv.style.zIndex = 0;
    ba(bgDiv);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

