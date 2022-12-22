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

function showResult (playerSymbol) {
    let result = document.querySelector(".result");
    let p1Streak = parseInt(document.getElementById("p1-streak").value);
    let p1Score = parseInt(document.getElementById("p1-score").value);
    let p2Score = parseInt(document.getElementById("p2-score").value);
    let p2Streak = parseInt(document.getElementById("p2-streak").value);
    if (playerSymbol === playerOne) {
        result.innerHTML = 'Player 1 Wins!';
        p1Score++;
        p2Score = 0;
        if (p1Score > p1Streak) {p1Streak++;}
  } else if (playerSymbol === playerTwo) {
        result.innerHTML = 'Player 2 Win!';
        p2Score++;
        p1Score = 0;
        if (p2Score > p2Streak) {p2Streak++;}
  } else {
        result.innerHTML = 'Tie!';
  }
  result.style.display = 'flex';
}

function reset () {
    if () {
        
    }
}

gameStart();