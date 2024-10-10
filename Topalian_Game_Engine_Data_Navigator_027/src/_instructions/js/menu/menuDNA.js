// menuDNA.js

function menuDNA()
{
    let menuId = 'menuDNA';

    //-//

    if (ge(menuId))
    {
        removeElement(menuId);
    }

    //-//

    // mainDiv
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

    // theMenu
    let theMenu = ce("div");
    theMenu.className = "divStyle001";
    theMenu.style.width = '200px';
    theMenu.style.height = '200px';
    theMenu.style.marginBottom = 4 +'px';
    theMenu.style.overflowY = "auto";
    mainDiv.append(theMenu);

    //-//

    // close button
    mainDiv.append(makeCloseButton(menuId));

    //-//

    // prevent menu leaving screen on left side
    if (positionGet(menuId).x <= 100)
    {
        theMenu.style.left = 50;
    }

    // prevent menu going off screen top side
    if (positionGet(menuId).y <= 200)
    {
        theMenu.style.top = 50;
    }

    //-//

    theMenu.append(ce('hr'));

    //-//

    // menuTitle
    let menuTitle = ce("span");
    menuTitle.className = "textCompact";
    menuTitle.textContent = "DNA";
    theMenu.append(menuTitle);

    //-//

    theMenu.append(ce('br'));

    //-//

    let geneCategories =
    [
        {
            name: 'chromosome1',
            function: `rowOfGenes(GENES, '1')`
        },

        {
            name: 'chromosome7',
            function: `rowOfGenes(GENES, '7')`
        },

        {
            name: 'chromosome17',
            function: `rowOfGenes(GENES, '17')`
        },
    ];

    // make buttons for geneCategories
    for (let x = 0; x < geneCategories.length; x++)
    {
        let geneButton = ce("button");
        geneButton.className = "ourButton";
        geneButton.textContent = geneCategories[x].name;
        geneButton.onmouseover = function()
        {
            hoverSound();
        };
        geneButton.onclick = function()
        {
            clickSound();
            // make row of gene data
            eval(geneCategories[x].function);
        };
        theMenu.append(geneButton);
    }

    //-//

    theMenu.append(ce('hr'));
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

