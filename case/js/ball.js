class Ball {
    constructor(x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.dx = speed;
        this.dy = -speed;
    }

    move(){
        this.x += this.dx;
        this.y += this.dy;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    }

    checkCollision(canvas){
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0){
            this.dx = -this.dx;
        }

        if (this.y - this.radius < 0){
            this.dy = -this.dy;
        }
    }
}

