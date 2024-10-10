// makeSectionTitle.js

function makeSectionTitle()
{
    let sectionId = 'titleSection';

    let mainDiv = ce('div');
    mainDiv.id = sectionId;
    mainDiv.style.position = 'absolute';
    mainDiv.style.left = '20px';
    mainDiv.style.top = '20px';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    // horiztonal
    mainDiv.style.justifyContent = 'center';
    // vertical
    mainDiv.style.alignItems = 'center';
    ba(mainDiv);

    makeElementDraggable(mainDiv);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

