// menuGeneCategory.js

function menuGeneCategory(whichArray)
{
    let menuId = 'menuGeneCategory';

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
    theMenu.style.width = '200px';
    mainDiv.append(theMenu);

    //-//

    // close button
    mainDiv.append(makeCloseButton(menuId));

    //-//

    let hr = ce("hr");
    hr.style.height = "1px";
    hr.style.border = "none";
    hr.style.backgroundColor = "rgb(50, 50, 50)";
    hr.style.color = "rgb(50, 50, 50)";
    theMenu.append(hr);

    //-//

    let titleSpan = ce("span");
    titleSpan.textContent = 'title';
    titleSpan.style.color = "rgb(255, 255, 255)";
    titleSpan.className = 'menu';
    theMenu.append(titleSpan);

    //-//

    theMenu.append(ce('br'));

    //-//

    let nameLabel = ce('div');
    nameLabel.textContent = "Name ";
    theMenu.append(nameLabel);

    let geneCategories =
    [
        {
            name: 'chromosome17',
            function: 'rowOfGenes(CHROMOSOME17)'
        },

        {
            name: 'chromosome7',
            function: 'rowOfGenes(CHROMOSOME7)'
        },

        {
            name: 'chromosome10',
            function: 'menuGeneCategory(CHROMOSOME10)'
        }
    ];

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
            eval(geneCategories[x].function);
        };
        theMenu.append(geneButton);
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

