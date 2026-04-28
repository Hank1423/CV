function Hero(image, top, left, size, speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
    ' height="'+ this.size + '"' +
    ' src="' + this.image +'"' +
    ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        if (this.left < window.innerWidth - this.size){
            this.left += this.speed
        }
    }

    
    this.moveLeft = function(){
        if (this.left > 0){
            this.left -= this.speed
        }
    }

    this.moveDown = function(){
        if (this.top < window.innerHeight - this.size){
            this.top += this.speed
        }
    }

    this.moveUp = function(){
        if (this.top >0){
            this.top -= this.speed
        }
    }

}

var hero = new Hero('https://assets.pokeos.com/pokemon/home/render/4.png', 20, 30, 200, 50);

function start(){
    document.getElementById('game').innerHTML = hero.getHeroElement();
}

window.addEventListener('keydown', function(event){
    switch (event.keyCode){
        case 37:
            hero.moveLeft();
            break;
        case 38:
            hero.moveUp();
            break;
        case 39:
            hero.moveRight();
            break;
        case 40:
            hero.moveDown();
            break;
    }
    start();
});

start();