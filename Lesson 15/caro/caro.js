let board = [];
let rows = 5;
let cols = 5;
let currentPlayer = "X";
for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
    board[i][j] = ".";
    }
}

function displayBoard() {
    let output = "";
    for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        output += board[i][j];
    }
    output += "<br>";
    }
    document.getElementById("caroBoard").innerHTML = output;
    document.getElementById("statusPlayer").innerHTML = "lượt của: " + currentPlayer;
}
displayBoard();

function play() {
    let x = +prompt("Nhập hàng (0-4): ");
    let y = +prompt("Nhập cột (0-4): ");
    if (board[x][y] === ".") {
        board[x][y] = currentPlayer;
        displayBoard();
        checkWinner(x, y);
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    } else {
    alert("Ô này đã đánh rồi!");
    }
}

function checkWinner(r, c) {
    let char = board[r][c];
    if (
        (board[r][c-1] === char && board[r][c+1] === char) || 
        (board[r][c-2] === char && board[r][c-1] === char) ||
        (board[r][c+1] === char && board[r][c+2] === char) ||

        (board[r-1] && board[r-1][c] === char && board[r+1] && board[r+1][c] === char) || 
        (board[r-2] && board[r-2][c] === char && board[r-1] && board[r-1][c] === char) || 
        (board[r+1] && board[r+1][c] === char && board[r+2] && board[r+2][c] === char) ||

        (board[r-1] && board[r-1][c-1] === char && board[r+1] && board[r+1][c+1] === char) ||
        (board[r-2] && board[r-2][c-2] === char && board[r-1] && board[r-1][c-1] === char) ||
        (board[r+1] && board[r+1][c+1] === char && board[r+2] && board[r+2][c+2] === char) ||

        (board[r-1] && board[r-1][c+1] === char && board[r+1] && board[r+1][c-1] === char) ||
        (board[r-2] && board[r-2][c+2] === char && board[r-1] && board[r-1][c+1] === char) ||
        (board[r+1] && board[r+1][c-1] === char && board[r+2] && board[r+2][c-2] === char)
    ) {
        setTimeout(function() {
            alert(char + " CHIẾN THẮNG!");
            location.reload();
        }, 100);
    }
}