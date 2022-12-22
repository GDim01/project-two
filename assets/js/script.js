const playerOne = "O"
const playerTwo = "X"

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            this.getAttribute("restart-game");
            reset();
        });
    }

});

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

    cell.removeEventListener("click", selectCell);

    checkWinner();
}

/**
 * Determines if the game has a winner
 */
function checkWinner () {
    //Check row win conditions
    for (let i = 0; i < 3; i++) {
        if (boardArray[i][0] === boardArray[i][1] && boardArray[i][0] === boardArray[i][2] && boardArray[i][0] !== "") {
            showResult(boardArray[i][0]);
            return;
        }
        
    }

    //Check column win conditions
    for (let i = 0; i < 3; i++) {
        if (boardArray[0][i] === boardArray[1][i] && boardArray[0][i] === boardArray[2][i] && boardArray[0][i] !== "") {
            showResult(boardArray[0][i]);
            return;
        }
    }

    //Check diagonal win conditions
    for (let i = 0; i < 3; i++) {
        if (boardArray[0][0] === boardArray[1][1] && boardArray[0][0] === boardArray[2][2] && boardArray[0][0] !== "") {
            showResult(boardArray[0][0]);
            return;
        } else if (boardArray[0][2] === boardArray[1][1] && boardArray[0][2] === boardArray[2][0] && boardArray[0][2] !== "") {
            showResult(boardArray[0][2]);
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
        showResult("Tie");
        return;
    }

}

function showResult (playerSymbol) {
    let result = document.querySelector(".result");
    if (playerSymbol === playerOne) {
        result.innerHTML = 'Player 1 Win!';
        scoreAdjustment(1);
    } else if (playerSymbol === playerTwo) {
        result.innerHTML = 'Player 2 Win!';
        scoreAdjustment(2);
  } else {
        result.innerHTML = 'Tie!';
  }
  result.style.display = 'flex';
}

function scoreAdjustment (winner) {
    let p1Streak = parseInt(document.getElementById("p1-streak").innerText);
    let p1Score = parseInt(document.getElementById("p1-score").innerText);
    let p2Score = parseInt(document.getElementById("p2-score").innerText);
    let p2Streak = parseInt(document.getElementById("p2-streak").innerText);

    if (winner === 1) {
        ++p1Score;
        console.log(p1Score);
        document.getElementById("p1-score").innerText = p1Score;
        document.getElementById("p2-score").innerText = 0;
        if (p1Score > p1Streak) {document.getElementById("p1-streak").innerText = ++p1Streak;}
        reset();
    }

    if (winner === 2) {
        document.getElementById("p2-score").innerText = ++p2Score;
        document.getElementById("p1-score").innerText = 0;
        if (p2Score > p2Streak) {document.getElementById("p2-streak").innerText = ++p2Streak;}
        reset();
    }
}

function reset () {
    let result = document.querySelector(".result");
    let playerTurn = document.querySelector(".player-turn")
    result.style.display = "none"
    playerTurn.innerHTML = "Player 1"

    boardArray = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]

    gameStart();
    
}

gameStart();