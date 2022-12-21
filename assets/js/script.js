const playerOne = "O"
const playerTwo = "X"

let boardArray = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

/**
 * Initialises game
 */
function gameStart () {
    let boardCells = document.querySelectorAll(".board-cell");
    boardCells.forEach((cell, index) => {
        cell.innerHTML = "";
        cell.addEventListener("click", selectCell.bind(null, cell, index));
    });
};

/**
 * Adds functionality on board mouse click
 */
function selectCell (cell, index) {
    let playerTurn = document.querySelector(".player-turn")
    let cellValue = cell.innerHTML;
    if (cellValue === "") {
        if (playerTurn.innerHTML === "Player 1") {
            cell.innerHTML = playerOne;
            playerTurn.innerHTML = "Player 2";
            boardArray[Math.floor(index / 3)][index % 3] = playerOne;
        }  else {
            cell.innerHTML = playerTwo;
            playerTurn.innerHTML = "Player 1";
            boardArray[Math.floor(index / 3)][index % 3] = playerTwo;
        }
    }
}

function checkWinner () {

}

function showResult () {

}

function reset () {

}