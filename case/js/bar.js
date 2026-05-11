class Bar {
    constructor(x, y, width, height, speed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }

    draw(ctx){
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveLeft(){
        if (this.x > 0){
            this.x -= this.speed;
        }
    }

    moveRight(canvasWidth){
        if (this.x + this.width < canvasWidth){
            this.x += this.speed;
        }
    }
}