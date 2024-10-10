// rowOfGenes.js

function rowOfGenes(whichArray, criteria1)
{
    let rowId = 'rowOfGenes';

    //-//

    if (ge(rowId))
    {
        ge(rowId).remove()
    }

    //-//

    let counter = 0;

    //-//

    let mainDiv = ce("div");
    mainDiv.id = rowId;
    mainDiv.title = "rowOfGenes(whichArray)";
    mainDiv.style.position = "absolute";
    mainDiv.style.left = ourPlayer.x + 40 + 'px';
    mainDiv.style.top = ourPlayer.y;
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "row";
    mainDiv.style.gap = "10px";
    ba(mainDiv);

    //-//

    makeElementDraggable(mainDiv);

    //-//

    for (let i = 0; i < whichArray.length; i++)
    {
        // filter by chromosome
        if (whichArray[i].chromosome == criteria1)
        {
            if (whichArray)
            {
                counter += 1;

                let theDiv = ce("div");
                theDiv.id = "Genes" + counter;
                theDiv.className = "divStyle001";
                theDiv.style.width = 250 + 'px';
                theDiv.style.height = 300 + 'px';
                mainDiv.append(theDiv);

                //-//

                // close button
                let closeButton = makeCloseButton(rowId);
                closeButton.style.position =
                closeButton.style.left = ge('Genes1').style.left - 8;
                closeButton.style.top = ge('Genes1').style.top - 4;
                closeButton.style.width = 25 + 'px';
                ge('Genes1').append(closeButton);

                //-//

                let printButton = ce("button");
                printButton.className = "ourButton";
                printButton.style.marginRight = "10px";
                printButton.style.zIndex = "20";
                printButton.onclick = function()
                {
                    printOnlyDiv(theDiv.id);
                };
                printButton.textContent = "print";
                theDiv.append(printButton);

                //-//

                theDiv.append(ce('hr'));

                //-//

                let geneChromosomeLabel = ce('div');
                geneChromosomeLabel.textContent = 'Chromosome: ';
                geneChromosomeLabel.style.color = 'aqua';
                theDiv.append(geneChromosomeLabel);

                //-//

                // geneChromosomeNumber
                let geneChromosomeNumber = ce("div");
                geneChromosomeNumber.textContent = whichArray[i].chromosome;
                theDiv.append(geneChromosomeNumber);

                //-//

                theDiv.append(ce('hr'));

                //-//

                let geneNameLabel = ce('div');
                geneNameLabel.textContent = 'Gene Name: ';
                geneNameLabel.style.color = 'aqua';
                theDiv.append(geneNameLabel);

                //-//

                // geneName
                let geneName = ce("div");
                geneName.textContent = whichArray[i].name;
                theDiv.append(geneName);

                //-//

                theDiv.append(ce('hr'));

                //-//

                let geneSequenceLabel = ce('div');
                geneSequenceLabel.textContent = 'Sequence: ';
                geneSequenceLabel.style.color = 'aqua';
                theDiv.append(geneSequenceLabel);

                //-//

                // geneSequence
                let geneSequence = ce("div");
                geneSequence.textContent = whichArray[i].sequence;
                theDiv.append(geneSequence);

                //-//

                theDiv.append(ce('hr'));

                //-//

                let geneMutationsLabel = ce('div');
                geneMutationsLabel.textContent = 'Mutations: ';
                geneMutationsLabel.style.color = 'aqua';
                theDiv.append(geneMutationsLabel);

                //-//

                // geneMutations
                let geneMutations = ce("div");
                geneMutations.textContent = whichArray[i].mutations;
                theDiv.append(geneMutations);

                //-//

                theDiv.append(ce('hr'));

                //-//

                let geneFunctionLabel = ce('div');
                geneFunctionLabel.textContent = 'Function: ';
                geneFunctionLabel.style.color = 'aqua';
                theDiv.append(geneFunctionLabel);

                //-//

                // geneFunction
                let geneFunction = ce("div");
                geneFunction.textContent = whichArray[i].function;
                theDiv.append(geneFunction);

                //-//

                theDiv.append(ce("hr"));

                //-//

                let horizontalSequenceLabel = ce('div');
                horizontalSequenceLabel.textContent = 'Horizontal Sequence: ';
                horizontalSequenceLabel.style.color = 'aqua';
                theDiv.append(horizontalSequenceLabel);

                //-//

                let sequenceContainer = ce('div');
                sequenceContainer.style.display = 'flex';
                sequenceContainer.style.flexDirection = 'row';
                sequenceContainer.style.gap = '2px';
                sequenceContainer.style.textShadow = '1px 1px rgb(0, 0, 0)';
                theDiv.append(sequenceContainer);

                //-//

                // split the string into an array of characters
                let characters = whichArray[i].sequence.split('');

                //-//

                // loop through each character in the sequence
                for (let i = 0; i < characters.length; i++)
                {
                    // geneSequenceDiagram
                    let geneSequenceDiagram = ce("div");
                    geneSequenceDiagram.style.border = 'solid 1px rgb(0, 255, 255)';
                    geneSequenceDiagram.style.padding = 2 + 'px';
                    geneSequenceDiagram.textContent = characters[i];
                    if (characters[i] === 'A')
                    {
                        geneSequenceDiagram.style.backgroundColor = 'green';
                    }
                    else if (characters[i] === 'T')
                    {
                        geneSequenceDiagram.style.backgroundColor = 'red';
                    }
                    else if (characters[i] === 'G')
                    {
                        geneSequenceDiagram.style.backgroundColor = 'blue';
                    }
                    else if (characters[i] === 'C')
                    {
                        geneSequenceDiagram.style.backgroundColor = 'yellow';
                    }
                    else
                    {
                        // for unknown characters
                        geneSequenceDiagram.style.backgroundColor = 'rgb(100, 100, 100)';
                    }
                    sequenceContainer.append(geneSequenceDiagram);
                }

                //-//

                theDiv.append(ce('hr'));

                //-//

                let verticalSequenceLabel = ce('div');
                verticalSequenceLabel.textContent = 'Vertical Sequence: ';
                verticalSequenceLabel.style.color = 'aqua';
                theDiv.append(verticalSequenceLabel);

                //-//

                let verticalSequenceContainer = ce('div');
                verticalSequenceContainer.style.display = 'grid';
                verticalSequenceContainer.style.gridTemplateColumns = 'repeat(2, auto)'; // 2 columns for side by side pairs
                verticalSequenceContainer.style.gridGap = '2px';
                verticalSequenceContainer.style.textShadow = '1px 1px rgb(0, 0, 0)';
                theDiv.append(verticalSequenceContainer);

                //-//

                // split string into array of characters
                let verticalCharacters = whichArray[i].sequence.split('');

                //-//

                // loop through each character in sequence
                for (let j = 0; j < verticalCharacters.length; j++)
                {
                    // create a div for each gene sequence character in the vertical layout
                    let verticalGeneDiagram = ce("div");
                    verticalGeneDiagram.style.border = 'solid 1px rgb(0, 255, 255)';
                    verticalGeneDiagram.style.padding = 2 + 'px';
                    verticalGeneDiagram.textContent = verticalCharacters[j];

                    // Set background colors based on character type
                    if (verticalCharacters[j] === 'A')
                    {
                        verticalGeneDiagram.style.backgroundColor = 'green';
                    }
                    else if (verticalCharacters[j] === 'T')
                    {
                        verticalGeneDiagram.style.backgroundColor = 'red';
                    }
                    else if (verticalCharacters[j] === 'G')
                    {
                        verticalGeneDiagram.style.backgroundColor = 'blue';
                    }
                    else if (verticalCharacters[j] === 'C')
                    {
                        verticalGeneDiagram.style.backgroundColor = 'yellow';
                    }
                    else
                    {
                        // for unknown characters
                        verticalGeneDiagram.style.backgroundColor = 'rgb(100, 100, 100)';
                    }

                    verticalSequenceContainer.append(verticalGeneDiagram);

                    // if sequence length is odd, add a blank spacer to last pair
                    if (j === verticalCharacters.length - 1 && verticalCharacters.length % 2 !== 0)
                    {
                        let verticalSpacer = ce("div");
                        verticalSpacer.style.border = 'solid 1px rgb(0, 255, 255)';
                        verticalSpacer.style.padding = 2 + 'px';
                        verticalSpacer.style.backgroundColor = 'transparent';
                        verticalSequenceContainer.append(verticalSpacer);
                    }
                }
            }
        }
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

