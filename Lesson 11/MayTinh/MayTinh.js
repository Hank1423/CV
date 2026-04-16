let screen = document.getElementById("screen");
let isCalculated = false;

function append(value) {
    if (screen.innerHTML === "0" || isCalculated) {
        if (value === '+' || value === '-' || value === 'x' || value === '/') {
            isCalculated = false; 
            screen.innerHTML += value;
        } else {
            screen.innerHTML = value;
            isCalculated = false;
        }
    } else {
        screen.innerHTML += value;
    }
}

function solve() {
    try {
        let expression = screen.innerHTML.replace(/x/g, '*');
        
        if (expression === "" || expression === "0") return;

        let result = eval(expression);
        
        if (!Number.isInteger(result)) {
            result = parseFloat(result.toFixed(2));
        }

        screen.innerHTML = result;
        isCalculated = true;
    } catch (err) {
        screen.innerHTML = "Lỗi!";
        isCalculated = true;
    }
}