// makeRoad.js

function makeRoad()
{
    // counter for unique road IDs
    let roadCounter = 0;

    // flag to check if currently drawing
    let isDrawing = false;

    // currently active road element
    let currentRoad = null;

    // flag to check if in road creation mode
    let isInRoadCreationMode = true;

    // array to store created roads
    let roads = [];

    // creating a new road element with a unique ID
    function createNewRoad()
    {
        let road = ce("div");
        // id, road0000, road0001, etc.
        road.id = "road" + roadCounter.toString().padStart(4, '0');
        road.style.position = "absolute";
        road.style.height = "20px";
        road.style.width = "5px";
        road.style.backgroundColor = "rgb(100, 100, 100)";
        // ignore mouse events on road itself
        road.style.pointerEvents = "none";
        ba(road);

        // add road to the array of roads
        roads.push(road);  
        return road;
    }

    // starting drawing a new road
    function startDrawing(e)
    {
        if (isInRoadCreationMode)
        {
            isDrawing = true;

            // create a new road element
            currentRoad = createNewRoad();

            currentRoad.style.left = e.pageX + "px";
            currentRoad.style.top = e.pageY + "px";
        }
    }

    // stops drawing and make the road permanent
    function stopDrawing()
    {
        if (isInRoadCreationMode && isDrawing)
        {
            isDrawing = false;
            roadCounter++;  // Increment the road counter for the next road
        }
    }

    // handling drawing road while mouse is moving
    function drawRoad(e)
    {
        if (isInRoadCreationMode && isDrawing && currentRoad)
        {
            let currentX = e.pageX;
            let currentY = e.pageY;

            let deltaX = currentX - parseInt(currentRoad.style.left);
            let deltaY = currentY - parseInt(currentRoad.style.top);

            let length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            let angle = Math.atan2(deltaY, deltaX);

            currentRoad.style.width = length + "px";
            currentRoad.style.transform = "rotate(" + angle + "rad)";
        }
    }

    // handling exiting road creation mode
    function exitRoadCreationMode()
    {
        isInRoadCreationMode = false;

        isDrawing = false;

        // clear the current road being drawn
        currentRoad = null;

        // make all created roads draggable
        for (let i = 0; i < roads.length; i++)
        {
            // access each road element
            let road = roads[i];

            // enable pointer events
            road.style.pointerEvents = "auto";

            // apply draggable functionality
            makeElementDraggable(road);
        }
    }

    // attach event listeners for road creation
    document.addEventListener("mousedown", startDrawing);

    document.addEventListener("mouseup", stopDrawing);

    document.addEventListener("mousemove", drawRoad);

    // attach event listener for exiting road creation mode
    document.addEventListener("keydown", function(e)
    {
        if (e.key === "Escape")
        {
            exitRoadCreationMode();
        }
    });
}

// creating event handler for mouse down
function createMouseDownHandler(element, state) {
    return function(e)
    {
        // ignore mouse down events on textarea or input elements
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT')
        {
            return;
        }

        e.preventDefault();

        state.startX = e.clientX;
        state.startY = e.clientY;

        document.onmousemove = createMouseMoveHandler(element, state);

        document.onmouseup = createMouseUpHandler();
    };
}

// creating event handler for mouse move
function createMouseMoveHandler(element, state) {
    return function(e)
    {
        // ignore mouse move events on textarea or input elements
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT')
        {
            return;
        }

        e.preventDefault();

        let deltaX = state.startX - e.clientX;
        let deltaY = state.startY - e.clientY;

        state.startX = e.clientX;
        state.startY = e.clientY;

        let newTop = element.offsetTop - deltaY;
        let newLeft = element.offsetLeft - deltaX;

        element.style.top = newTop + "px";
        element.style.left = newLeft + "px";
    };
}

// creating event handler for mouse up
function createMouseUpHandler()
{
    return function()
    {
        document.onmousemove = null;
        document.onmouseup = null;
    };
}

// making an element draggable
function makeElementDraggable(element)
{
    let state = { startX: 0, startY: 0 };

    element.onmousedown = createMouseDownHandler(element, state);
}

// initialize road creation
// makeRoad();

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

