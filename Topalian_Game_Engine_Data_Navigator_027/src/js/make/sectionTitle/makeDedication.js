// makeDedication.js

function makeDedication()
{
    let dedication = ce(`div`);
    dedication.id = `dedication`;
    dedication.className = `glowBlue`;
    dedication.style.transition = `opacity 5.5s ease`;
    dedication.style.opacity = 0;
    dedication.style.whiteSpace = 'nowrap';
    dedication.innerText = `Dedicated to God the Father`;

    setTimeout(function()
    {
        dedication.style.opacity = 1.0; 
    }, 1000);

    if (ge('titleSection'))
    {
        ge('titleSection').append(dedication);
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

