class Apple{
    constructor(){
        this.weight = 20;
    }
    
    decrease(){
        if(this.weight > 0){
            this.weight--;
        }
    }

    isEmpty(){
        if(this.weight == 0){
            return true;
        } else {
            return false;
        }
    }

    getWeight(){
        return this.weight;
    }
}

class Human{
    constructor(name, gender, weight){
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    talk(string){
        console.log(`${this.name} nói: "${string}"`);
    }

    checkApple(apple){
        return apple.getWeight();
    }

    eatApple(apple){
        if (apple.getWeight() > 0){
            apple.decrease();
            this.weight++;
            console.log(`${this.name} ăn táo. Táo còn: ${apple.getWeight()} - ${this.name} nặng: ${this.weight}`);
        } else {
            console.log("Hết táo rồi không ăn được nữa");
        }
    }

    getWeight(){return this.weight; }

}

let apple = new Apple();
let adam = new Human("Adam", "male", 65);
let eva = new Human("Eva", "female", 50);

adam.talk("Chào Eva, chúng ta cùng ăn táo nhé");
eva.talk("Vâng, táo trông ngon quá");

console.log("--- Bắt đầu ăn táo ---");

while (!apple.isEmpty()){
    if (!apple.isEmpty()){
        adam.eatApple(apple);
    }

    if (!apple.isEmpty()) {
        eva.eatApple(apple);
    }
}

console.log("--- Kết quả sau khi ăn hết táo ---");
console.log(`Quả táo còn: ${apple.getWeight()} đơn vị.`);
console.log(`Cân nặng của Adam: ${adam.getWeight()}`);
console.log(`Cân nặng của Eva: ${eva.getWeight()}`);