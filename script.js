let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let win = document.querySelector(".win");
let para = document.querySelector("p");
let draw = document.querySelector(".draw");
let newBtnW = document.querySelector(".newBtnW");
let newBtnD = document.querySelector(".newBtnD");

var count = 0;
let turnO = true;
const winTypes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        console.log("box clicked");
        if (turnO === true) {
            box.classList.remove("maroon");
            box.classList.add("green");
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.classList.remove("green");
            box.classList.add("maroon");
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWin();
        checkDraw();
    })
})

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    para.innerText = `Congraulations, winner is ${winner}`;
    win.classList.remove("hide");
    disabledBoxes();
}

const showDraw = () => {
    para.innerText = `Oops the match is draw! `;
    draw.classList.remove("hide");
    disabledBoxes();
}

const checkWin = () => {
    for (let type of winTypes) {
        let pos1 = boxes[type[0]].innerText;
        let pos2 = boxes[type[1]].innerText; 
        let pos3 = boxes[type[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                showWinner(pos1);
                count = 0;
            }
        }
    }
}

const checkDraw = () => {
    if (count === 9) {
        console.log("it's a draw.");
        showDraw();
    }
}

const resetGame = () => {
    count = 0;
    let turnO = true;
    enabledBoxes();
    win.classList.add("hide");
    draw.classList.add("hide");
}

resetBtn.addEventListener("click", resetGame);
newBtnW.addEventListener("click", resetGame);
newBtnD.addEventListener("click", resetGame);