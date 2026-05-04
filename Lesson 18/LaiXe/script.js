class Car {
    constructor(canvasWidth, canvasHeight) {
        this.width = 40;
        this.height = 60;
        this.x = canvasWidth / 2 - this.width / 2;
        this.y = canvasHeight - 80;
        this.speed = 1;
        this.direction = "up";
    }

    draw(ctx) {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move() {
        if (this.direction === "up") this.y -= this.speed;
        if (this.direction === "down") this.y += this.speed;
        if (this.direction === "left") this.x -= this.speed;
        if (this.direction === "right") this.x += this.speed;
    }
}

class Item {
    constructor(canvasWidth, canvasHeight, type) {
        this.type = type; 
        this.size = 25;
        this.x = Math.random() * (canvasWidth - this.size);
        this.y = Math.random() * (canvasHeight - this.size);
    }

    draw(ctx) {
        ctx.fillStyle = this.type === "obstacle" ? "red" : "gold";
        ctx.beginPath();
        if (this.type === "reward") {
            ctx.arc(this.x + 12, this.y + 12, 12, 0, Math.PI * 2);
        } else {
            ctx.rect(this.x, this.y, this.size, this.size);
        }
        ctx.fill();
    }
}