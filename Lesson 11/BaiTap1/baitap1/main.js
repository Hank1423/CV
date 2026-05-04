function checkDivision() {
    let a = document.getElementById("numA").value;
    let b = document.getElementById("numB").value;
    let resultElement = document.getElementById("result");

    a = parseFloat(a);
    b = parseFloat(b);

    if (isNaN(a) || isNaN(b)) {
        resultElement.innerHTML = "Vui lòng nhập đủ hai số!";
        resultElement.style.color = "red";
        return;
    }

    if (b === 0) {
        resultElement.innerHTML = "Số b phải khác 0!";
        resultElement.style.color = "red";
        return;
    }

    if (a % b === 0) {
        resultElement.innerHTML = a + " chia hết cho " + b;
        resultElement.style.color = "green";
    } else {
        resultElement.innerHTML = a + " không chia hết cho " + b;
        resultElement.style.color = "orange"
    }
}

