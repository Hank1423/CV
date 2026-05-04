window.onload = function() {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    const scoreElement = document.getElementById("score");

    let car = new Car(canvas.width, canvas.height);
    let items = [];
    let score = 0;
    let gameRunning = true;

    function createSafeItem(type) {
        let newItem;
        let isOverlapping;
        let attempts = 0;

        do {
            isOverlapping = false;
            newItem = new Item(canvas.width, canvas.height, type);
            
            for (let existingItem of items) {
                let distance = Math.sqrt(
                    Math.pow(newItem.x - existingItem.x, 2) + 
                    Math.pow(newItem.y - existingItem.y, 2)
                );
                if (distance < newItem.size + 10) {
                    isOverlapping = true;
                    break;
                }
            }
            attempts++;
        } while (isOverlapping && attempts < 100);

        return newItem;
    }

    for (let i = 0; i < 5; i++) items.push(new Item(canvas.width, canvas.height, "obstacle"));
    for (let i = 0; i < 3; i++) items.push(new Item(canvas.width, canvas.height, "reward"));

    window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp") car.direction = "up";
        if (e.key === "ArrowDown") car.direction = "down";
        if (e.key === "ArrowLeft") car.direction = "left";
        if (e.key === "ArrowRight") car.direction = "right";
        if (e.key === "Control") car.speed = 4; 
    });

    window.addEventListener("keyup", (e) => {
        if (e.key === "Control") car.speed = 1; 
    });

    function update() {
        if (!gameRunning) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (car.x < 0 || car.x + car.width > canvas.width || 
            car.y < 0 || car.y + car.height > canvas.height) {
            gameRunning = false;
            alert("Bạn đã đâm vào tường! Game Over.");
            location.reload();
            return;
        }

        car.move();
        car.draw(ctx);

        items.forEach((item, index) => {
            item.draw(ctx);

            if (car.x < item.x + item.size && car.x + car.width > item.x &&
                car.y < item.y + item.size && car.y + car.height > item.y) {
                
                if (item.type === "obstacle") {
                    gameRunning = false;
                    alert("Đâm vào chướng ngại vật! Game Over.");
                    location.reload();
                } else {
                    score += 10;
                    scoreElement.innerText = score;
                    items.splice(index, 1); 
                    items.push(createSafeItem("reward"));
                }
            }
        });

        requestAnimationFrame(update);
    }

    update();
};