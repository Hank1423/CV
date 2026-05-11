const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let ball = new Ball(canvas.width / 2, canvas.height - 50, 10, 2);
let bar = new Bar(canvas.width / 2 - 50, canvas.height - 20, 100, 10, 5);
let score = 0;
let isGameOver = false;

function checkBallBarCollision(ball, bar) {
    if (ball.x + ball.radius > bar.x && 
        ball.x - ball.radius < bar.x + bar.width &&
        ball.y + ball.radius > bar.y &&
        ball.y - ball.radius < bar.y + bar.height) {
        if (ball.dy > 0){
            ball.dy = -ball.dy;
            score++; 
        
            if (score % 5 === 0) {
                ball.speed += 0.5;
            }
        }
    }
}

function drawScore() {
    ctx.font = "bold 18px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "left";
    ctx.fillText("Score: " + score, 15, 25);
}

function update() {
    if (isGameOver)
        {return;
        }

    if (keys.left) {
        bar.moveLeft();
    }

    if (keys.right) {
        bar.moveRight(canvas.width);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ball.move();
    ball.checkCollision(canvas);
    checkBallBarCollision(ball, bar);

    ball.draw(ctx);
    bar.draw(ctx);
    drawScore();

    if (ball.y + ball.radius > canvas.height) {
        isGameOver = true;
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.font = "bold 30px Arial";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
        
        ctx.font = "18px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Final Score: " + score, canvas.width / 2, canvas.height / 2 + 40);
        
        document.getElementById('btn_reset').style.display = 'block';
        return;
    }

    if(isGameOver === false){
        requestAnimationFrame(update);
    }
    
}

function resetGame(){
    ball = new Ball(canvas.width / 2, canvas.height - 50, 10, 2);
    bar = new Bar(canvas.width / 2 - 50, canvas.height - 20, 100, 10, 5);
    score = 0;
    isGameOver = false;
    document.getElementById('btn_reset').style.display = 'none';
    update();
}

let keys = {
    left: false,
    right: false
};

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case "ArrowLeft":
            keys.left = true;
            break;
        case "ArrowRight":
            keys.right = true;
            break;
    }
});

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case "ArrowLeft":
            keys.left = false;
            break;
        case "ArrowRight":
            keys.right = false;
            break;
    }
});

update();