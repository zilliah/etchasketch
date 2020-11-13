const container = document.querySelector(".container");



//basic "draw" function
const activateDraw = () => {
    const squaresList = document.querySelectorAll(".square");
    squaresList.forEach(square => {
        square.addEventListener("mouseenter", event => {
            square.classList.add("changed");
        });
    });
};



let x, y;

const xVar = document.querySelector("input[name=x-axis");
const yVar = document.querySelector("input[name=y-axis");



const resizeBtn = document.querySelector("button[name='resize']");
resizeBtn.addEventListener("click", event => {
    x = parseInt(xVar.value);
    y = parseInt(yVar.value);
    
    
    
    if (!validate(x) || !validate(y))  {
        console.log("one or more of the values ain't right");
        /* OK SO
        this is stupid
        when i made it a form it was doing form submission stuff I don't understand yet
        so everything on the page was reloading and the drawing process was running twice

        so i can't use the built in form validation stuff bc i dnon' want to actually submit anything 
        so I have to do my own validation
        which is fine bc i was sort of doing that anyway
        GOD
        */
    } 
    //TODO need to handle incorrect input to actually prompt  user
    //how do I want to do this? 
    //could popup, but it's kinda annoying
    //add .invalid class and show message?
    createBoard(x, y);
    
});

const validate = n => {
    if (n < 1 || n > 60) return false;
    else return Number.isInteger(n);
}




const createBoard = (x=16, y=16) => {
    //debugger;

    console.log(`time for a new board! the new dimensions are: X:${x} and Y:${y}`);

    //clear the old board
    let oldDivs = document.querySelectorAll(".container div");

    oldDivs.forEach(div => {
        container.removeChild(div);
    });

    //create the grid
    container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${y}, 1fr)`;
    
    
    //create divs based on input numbers
    let easSquare = document.createElement("div");
    easSquare.classList.add("square");
    
    for (let i = 0; i < x * y; i++) {
        let currSquare = easSquare.cloneNode();
        container.appendChild(currSquare);
    }

    activateDraw();
};

createBoard();



//reset (clear board)
let resetButton = document.querySelector("button[name='reset']");
resetButton.addEventListener("click", event => {
    let shadedSquares = document.querySelectorAll(".changed");
    shadedSquares.forEach(square => {
        square.classList.remove("changed");
    });
});