
class GameBoard {
    constructor(rows, cols, elementId) {
        this.rows = rows;
        this.cols = cols;
        this.elementId = elementId;
        this.cells = [];
    }

    draw(){
        let container = document.getElementById(this.elementId);
        let html = "";
        this.cells = [];
        for (let i = 0; i < this.rows; i++){
            let row = [];
            for (let j=0; j < this.cols; j++){
                let cell = new Cell(j, i);
                row.push(cell);
                html += cell.getHtml();
            }
            this.cells.push(row);
        }
        container.innerHTML = html;
    }

    checkWin(x, y) {
        let cellValue = this.cells[y][x].value;
        let directions = [[1, 0], [0, 1], [1, 1], [1, -1]];

        for (let [dx, dy] of directions) {
            let count = 1;
            count += this.countInDirection(x, y, dx, dy, cellValue);
            count += this.countInDirection(x, y, -dx, -dy, cellValue);
            if (count >= 5) return true;
        }
        return false;
    }

    countInDirection(x, y, dx, dy, value) {
        let count = 0;
        let curX = x + dx;
        let curY = y + dy;
        while (curY >= 0 && curY < this.rows && curX >= 0 && curX < this.cols &&
            this.cells[curY][curX].value === value) {
            count++;
            curX += dx;
            curY += dy;
        }
        return count;
    }
}

