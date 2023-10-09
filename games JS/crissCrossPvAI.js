const cells = document.querySelectorAll(".cell");
const stautsText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const board = document.querySelector("#board");
const winCondition = [
    [0, 1, 2, 600, 50, 0, 330],
    [3, 4, 5, 600, 150, 0, 330],
    [6, 7, 8, 600, 255, 0, 330],
    [0, 4, 8, 553, 150, 45, 430],
    [2, 4, 6, 553, 150, 135, 430],
    [0, 3, 6, 500, 150, 90, 330],
    [2, 5, 8, 700, 150, 90, 330],
    [1, 4, 7, 600, 150, 90, 330],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame() {
    cells.forEach((cell) => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restart);
    stautsText.textContent = ` ${currentPlayer}'s turn`;
    running = true;
}
function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");
    if (options[cellIndex] != "" || !running) {
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer() {
    currentPlayer = currentPlayer == "X" ? "O" : "X";
    stautsText.textContent = ` ${currentPlayer}'s turn`;

    if (currentPlayer == "O") {
        computerTurn();
    }
}
function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winCondition.length; i++) {
        const condition = winCondition[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC && cellC == cellA) {
            roundWon = true;
            document.querySelector(
                ".line"
            ).style.cssText = `background-color: black;
            height: 3px;
            width: ${condition[6]}px;
            transform: translate(${[condition[3]]}px,${[
                condition[4],
            ]}px) rotate(${[condition[5]]}deg)`;
            break;
        }
    }

    if (roundWon) {
        stautsText.textContent = ` ${currentPlayer}'s wins`;
        running = false;
    } else if (!options.includes("")) {
        stautsText.textContent = ` Draw`;
    } else {
        changePlayer();
    }
}
function restart() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    stautsText.textContent = ` ${currentPlayer}'s turn`;
    cells.forEach((cell) => (cell.textContent = ""));
    running = true;
    document.querySelector(".line").style.cssText = `none`;
}

function computerTurn() {
    let num = Math.round(Math.random() * 8);
    if (options[num] != "") {
        computerTurn();
    }
    const cell = board.querySelector('[cellIndex="' + num + '"]');
    cell.click();
}
