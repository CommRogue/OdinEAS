let GRID_SIZE = 64; 
let currentColor = "lightgreen"; 
let mousedown = false; 
document.addEventListener("mousemove", setPrimaryButtonState);
document.addEventListener("mousedown", setPrimaryButtonState);
document.addEventListener("mouseup", setPrimaryButtonState);


function setPrimaryButtonState(e) {
    mousedown = (e.buttons & 1 === 1); 
  }

if(Math.sqrt(GRID_SIZE) % 1 !== 0) {
    console.log("Invalid grid size"); 
}

let gridContainer = document.querySelector("#grid-container");
let squares = []; 

for(let i = 1; i <= GRID_SIZE; i++) {
    let square = document.createElement("div");
    square.classList.add("grid-square"); 
    square.style.cssText += `flex-basis: ${100/Math.sqrt(GRID_SIZE)}%`; 
    square.addEventListener("mouseover", hoverEvent);
    square.setAttribute("draggable", "false");
    square.addEventListener("mousedown", hoverEvent);
    squares.push(square);  
    gridContainer.appendChild(square)
}

changeColorButton = document.querySelector("#set-color");
changeColorButton.addEventListener("click", changeColor);

function hoverEvent(e) {
    if(mousedown)
        e.target.style.backgroundColor = currentColor; 
}

function changeColor(e) {
    currentColor = e.target.previousElementSibling.value; 
}