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

/**
 * Determines if the game has a winner
 */
function checkWinner () {
    //Check row win conditions
    for (let i = 0; i < 3; i++) {
        if (boardArray[i][0] === boardArray[i][1] && boardArray[i][0] === boardArray[i][2] && boardArray[i][0] !== "") {
            return;
        }
        
    }

    //Check column win conditions
    for (let i = 0; i < 3; i++) {
        if (boardArray[0][i] === boardArray[1][i] && boardArray[0][i] === boardArray[2][i] && boardArray[0][i] !== "") {
            return;
        }
    }

    //Check diagonal win conditions
    for (let i = 0; i < 3; i++) {
        if (boardArray[0][0] === boardArray[1][1] && boardArray[0][0] === boardArray[2][2] && boardArray[0][0] !== "") {
            return;
        } else if (boardArray[0][2] === boardArray[1][1] && boardArray[0][2] === boardArray[2][0] && boardArray[0][2] !== "") {
            return;
        }
    }

    //Checks for a tie
    let filledCells = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (boardArray[i][j] != "") {
                filledCells++;
            }
        }
    }

    if (filledCells === 9) {
        return;
    }

}

function showResult () {

}

function reset () {

}

gameStart();