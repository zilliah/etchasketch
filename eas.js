const container = document.querySelector(".sketch-container");



//basic "draw" function
const activateDraw = () => {
    const squaresList = document.querySelectorAll(".square");
    squaresList.forEach(square => {
        square.addEventListener("mouseenter", event => {
            square.classList.add("changed");
        });
    });
};


//resize board
let x, y;

const xVar = document.querySelector("input[name=x-axis");
const yVar = document.querySelector("input[name=y-axis");
const errorMessage = document.querySelector(".invalid-message");


const resizeBtn = document.querySelector("button[name='resize']");
resizeBtn.addEventListener("click", event => {
    x = parseInt(xVar.value);
    y = parseInt(yVar.value);
    xVar.classList.remove("invalid");
    yVar.classList.remove("invalid");
    
    //validate input
    if (!validate(x) || !validate(y))  {
        if (!validate(x)) xVar.classList.add("invalid");
        if (!validate(y)) yVar.classList.add("invalid");
        errorMessage.style.display = "block";
       return;
    } else {
        xVar.classList.remove("invalid");
        yVar.classList.remove("invalid");
        errorMessage.style.display = "none";
    }

    createBoard(x, y);
    
});

const validate = n => {
    if (n < 1 || n > 60) return false;
    else return Number.isInteger(n);
}

const createBoard = (x=16, y=16) => {

    //clear the old board
    let oldDivs = document.querySelectorAll(".sketch-container div");
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