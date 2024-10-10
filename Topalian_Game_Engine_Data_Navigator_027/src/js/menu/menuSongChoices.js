// menuSongChoices.js

function menuSongChoices()
{
    let menuId = 'songMenu';

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

    let theLink = ce('a');
    theLink.href = 'https://drive.google.com/drive/folders/162IA3RC9rDV8Dkwk_bFd-an8HPEY9mhE';
    theLink.target = '_blank';
    theLink.textContent = 'Download Song Files';
    theLink.title = 'Download Song files and then\ndrag them to src/media/songs';
    theLink.style.fontSize = '17px';
    theMenu.append(theLink);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let volumeTitle = ce("h1");
    volumeTitle.textContent = "VOLUME";
    volumeTitle.className = 'menu';
    theMenu.append(volumeTitle);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let numberContainer = ce('div');
    numberContainer.id = 'numberContainer';
    numberContainer.style.display = 'grid';
    numberContainer.style.gridTemplateColumns = 'repeat(5, 1fr)'; 
    numberContainer.style.gap = '2px';
    numberContainer.style.padding = '2px';
    theMenu.append(numberContainer);

    //-//

    let volumeSetting = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];

    for (let i = 0; i < volumeSetting.length; i++)
    {
        let volumeButton = ce("button");
        volumeButton.className = "ourButton";
        volumeButton.textContent = volumeSetting[i];
        volumeButton.onmouseover = function()
        {
            hoverSound();
        };
        volumeButton.onclick = function()
        {
            clickSound();
            volumeSet(volumeSetting[i]);
        };
        numberContainer.append(volumeButton);
    }

    //-//

    theMenu.append(ce('hr'));

    //-//

    let songsTitle = ce("h1");
    songsTitle.textContent = "SONGS";
    songsTitle.className = 'menu';
    theMenu.append(songsTitle);

    //-//

    theMenu.append(ce('hr'));

    //-//

    let songButtonsContainer = ce('div');
    songButtonsContainer.id = 'songButtonsContainer';
    songButtonsContainer.style.display = 'grid';
    songButtonsContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'; 
    songButtonsContainer.style.gap = '10px';
    songButtonsContainer.style.padding = '10px';
    theMenu.append(songButtonsContainer);

    //-//

    for (let z = 0; z < songsArray.length; z++) {
        let songButton = ce("button");
        songButton.className = "ourButton";
        songButton.id = songsArray[z].name + "Button";
        songButton.textContent = songsArray[z].name;
        songButton.onmouseover = function()
        {
            hoverSound();
        };
        songButton.onclick = function()
        {
            clickSound();
            playSong(songsArray[z].name);
        };
        songButtonsContainer.append(songButton);
    }

    if (songFlag == 1)
    {
        // color button of song chosen
        ge(songChosenId).style.background = "rgb(128, 128, 128)";
    }

    if (songFlag == 0)
    {
        // color button of song chosen
        ge(songChosenId).style.background = "rgb(0, 77, 129)";
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

