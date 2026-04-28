let myBoard = new GameBoard(20, 20, "game-board");
myBoard.draw();

let isXTurn = true;
let isGameOver = false;

function play(x, y) {
    if (isGameOver) return;
    let cell = myBoard.cells[y][x];
    if (cell.value !== "") return;
    cell.value = isXTurn ? "X" : "O";
    let cellDiv = document.getElementById(`cell-${x}-${y}`);
    cellDiv.innerHTML = cell.value;
    cellDiv.style.color = isXTurn ? "red" : "blue";
    if (myBoard.checkWin(x, y)) {
        isGameOver = true;
        setTimeout(() => {
            alert(`Người chơi ${cell.value} thắng cuộc!`);
        }, 100);
    }
    isXTurn = !isXTurn;
}

function resetGame() {
    if (confirm("Bạn có chắc chắn muốn xóa bàn cờ và chơi lại từ đầu không?")) {
    isXTurn = true;
    isGameOver = false;

    myBoard.draw();
            
    console.log("Trò chơi đã được làm mới!");
    }
}
