class Cell {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.value = "";
    }

    getHtml(){
        let top = this.y * 40;
        let left = this.x * 40;
        return `<div id="cell-${this.x}-${this.y}" 
                    onclick="play(${this.x}, ${this.y})" 
                    style="position: absolute; width: 40px; height: 40px; 
                            left: ${left}px; top: ${top}px; 
                            border: 1px solid #ccc; text-align: center; 
                            line-height: 40px; font-size: 20px;">
                </div>`;
    }
}
