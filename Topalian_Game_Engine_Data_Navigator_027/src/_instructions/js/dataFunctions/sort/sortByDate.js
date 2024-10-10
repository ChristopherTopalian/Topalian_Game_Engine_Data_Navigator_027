// sortByDate.js

// Ascending order uses a.date - b.date
// Descending order uses b.date - a.date
// ascending or descending
function sortByDate(whichArray, direction) 
{
    // ASCENDING is a.date - b.date
    if (direction == "up")
    {
        whichArray.sort(function(a, b)
        {
            return new Date(a.date) - new Date(b.date);
        });
    }
    // DESCENDING is b.date - a.date
    else if (direction == "down")
    {
        whichArray.sort(function(a, b)
        {
            return new Date(b.date) - new Date(a.date);
        });
    }
}

// examples

// Sort by date
// sortByDate(theNotes, "up"); // Ascending
// sortByDate(theNotes, "down"); // Descending

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

