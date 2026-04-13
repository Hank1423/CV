const { PI, pow } = Math;
let r = parseFloat(prompt("Enter the radius of the circle:"));
let area = PI * pow(r, 2);
let circumference = 2 * PI * r;
console.log("Area of the circle: " + area);
console.log("Circumference of the circle:" + circumference);
alert("Area of the circle:"+ area.toFixed(2));
alert("Circumference of the circle:" + circumference.toFixed(2));
