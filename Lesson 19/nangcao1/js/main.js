let tom = new Cat("Tom", 10, 50);
let jerry = new Rat("Jerry", 2, 30);
let mickey = new Rat("Mickey", 1, 60);
console.log("--- Lần 1: Bắt Mickey ---");
tom.catchRat(mickey); 

console.log("--- Lần 2: Bắt Jerry ---");
tom.catchRat(jerry);
console.log("Cân nặng trước khi ăn:", tom.weight);
tom.eatRat(jerry);
console.log("Cân nặng sau khi ăn:", tom.weight);

console.log("Jerry còn sống không?", jerry.status);