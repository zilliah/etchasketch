const container = document.querySelector(".container");



const squaresList = document.querySelectorAll(".square");
squaresList.forEach(square => {
    square.addEventListener("mouseenter", event => {
        square.classList.add("changed");
    });
});
