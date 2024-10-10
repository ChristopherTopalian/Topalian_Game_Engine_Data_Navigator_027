// keepPlayerInWorld.js

function keepPlayerInWorld(whichId)
{
    let bgSizeX = 250000;
    let bgSizeY = 250000;

    if (ge(whichId))
    {
        // if left
        if (ourPlayer.x <= 0)
        {
            ourPlayer.x = 0;
        }

        // if right
        if (ourPlayer.x > bgSizeX)
        {
            ourPlayer.x = bgSizeX;
        }

        // if top
        if (ourPlayer.y <= 0)
        {
            ourPlayer.y = 0;
        }

        // if bottom
        if (ourPlayer.y >= bgSizeY)
        {
            ourPlayer.y = bgSizeY;
        }
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

