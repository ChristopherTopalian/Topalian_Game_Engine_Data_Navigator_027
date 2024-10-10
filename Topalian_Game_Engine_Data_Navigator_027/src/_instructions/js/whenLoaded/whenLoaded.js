// whenLoaded.js

// When the Page Loads

function whenLoaded()
{
    // width, height
    makeBackground(250000, 250000);

    // sectionTitle
    makeSectionTitle();
    makeDedication();
    makeEngineTitle();

    loadSounds(soundsArray);
    loadSounds(songsArray);

    // player
    makePlayer();
    playerLoadData(activePlayer);
    movePlayer(activePlayer, -1, 0);

    makeInfoDiv();
    makeInfoDivPlayer();

    // right click menu
    preventContextMenu();

    // structures
    structuresCreateFromFile();

    makeStructureTextArea();

    makePlayerTextArea();

    ge('infoDivPlayer').style.visibility = 'hidden';

    ge('infoDiv').style.visibility = 'hidden';

    menuPlayer();

    sortData();

    containerLanguage();

    makeLogo();

    makeBottomToolbar(bottomToolbarArray);

    // makeVideo("ewDcgG8Q288");

    // listen for keydown presses
    window.addEventListener("keydown", theControls, false);

    // listen for keyup presses
    window.addEventListener("keyup", theControls, false);

    // show structuresArray data in textarea
    setTimeout(function()
    {
        showStructureData();
    }, 1000);

    // show playerArray data in textarea
    setTimeout(function()
    {
        showPlayerData();
    }, 1000);

    gameLoop(activePlayer);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

