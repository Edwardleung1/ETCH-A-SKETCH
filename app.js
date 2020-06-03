//Sets important constants and variables

const container = document.querySelector("#grid");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let blackBtn = document.getElementById("mode1");
let rainbowBtn = document.getElementById("mode2");

let blackCount = 0;
let rainbowCount = 0;

defaultGrid();
//Creates a default grid sized 16x16 
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

//Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    };
};

let btn = document.querySelector("#btn");
let grid = document.querySelector("#grid");

function clearGrid() {
    grid.innerHTML = "";
};


btn.addEventListener('click', function() {
    let userRow = document.querySelector("#rowno").value;
    let userCol = document.querySelector("#colno").value;
    clearGrid();
    makeRows(userRow);
    makeColumns(userCol);
    if(blackCount == 1) {
        addBlack();
    } else {
        addColour();
    }
});

function addColour() {
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            let randomColor2 = Math.floor(Math.random()*16777215).toString(16);
            cell.style.backgroundColor = "#" + randomColor2;
        })
    })
};

function addBlack() {
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "#000000";
        })
    })
};


blackBtn.addEventListener('click', function() {
    blackCount = 1;
    rainbowCount = 0;
    addBlack();
});

rainbowBtn.addEventListener('click', function() {
    rainbowCount = 1;
    blackCount = 0;
    addColour();
});