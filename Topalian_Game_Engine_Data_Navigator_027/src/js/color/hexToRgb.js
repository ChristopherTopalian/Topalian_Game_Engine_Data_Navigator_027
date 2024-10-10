// hexToRgb.js

function hexToRgb(hex)
{
    // remove the hash symbol if it is present
    let hexCleaned = hex.replace(/^#/, '');

    // if shorthand hex code is provided (#03F), convert it to the full form (#0033FF)
    if (hexCleaned.length === 3)
    {
        hexCleaned = hexCleaned.split('').map(function(hexDigit)
        {
            return hexDigit + hexDigit;
        }).join('');
    }

    // parse the hex string and extract the red, green, and blue values
    let r = parseInt(hexCleaned.substring(0, 2), 16);
    let g = parseInt(hexCleaned.substring(2, 4), 16);
    let b = parseInt(hexCleaned.substring(4, 6), 16);

    // return the RGB values as an object
    return { r: r, g: g, b: b };
}

// example usage:

// { r: 0, g: 51, b: 255 }
let color = hexToRgb('#03F');

console.log(color);

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

