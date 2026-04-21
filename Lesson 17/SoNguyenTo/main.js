function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0) return false;
    }
    return true;
}

function check(){
    let n = document.getElementById("inputNum").value;
    let res = document.getElementById("result");

    if (n === ""){
        res.innerHTML = n + " là số nguyên tố ";
        res.style.color = "#00ffcc";
    } else {
        res.innerHTML = n + " không phải là số nguyên tố ";
        res.style.color = "#ff4d4d";
    }
}

function listPrimes(){
    let display = document.getElementById("listResult");
    let primes = [];
    for (let i = 2; i < 10000; i++) {
        if (isPrime(i)){
            primes.push(i);
        }
    }
    display.innerHTML = primes.join(", ");
}