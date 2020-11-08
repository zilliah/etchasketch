const container = document.querySelector(".container");

//get x,y numbers from input
//but have a default - just use this for now to generate divs
let x = 20;
let y = 20;


container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
container.style.gridTemplateRows = `repeat(${y}, 1fr)`;



// how to handle having an existing square without redoing stuff?
// idk if re-running current creation thing will just add on...
// refreshing the page doesn't, bc the basic html doesn't start w any divs
// hmm some action 

//create divs based on input numbers
let easSquare = document.createElement("div");
easSquare.classList.add("square");

for (let i = 0; i < x * y; i++) {
    let currSquare = easSquare.cloneNode();
    container.appendChild(currSquare);
}

//basic "draw" function
const squaresList = document.querySelectorAll(".square");
squaresList.forEach(square => {
    square.addEventListener("mouseenter", event => {
        square.classList.add("changed");
    });
});
