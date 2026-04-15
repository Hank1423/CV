function check() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let bmi = weight / (height * height);
    let result = ""
    bmi = bmi.toFixed(2);
    if (bmi < 18.5) {
        result = "Underweight";
    } else if (bmi < 25.0) {
        result = "Normal";
    } else if (bmi < 30.0) {
        result = "Overweight";
    } else {
        result = "Obese"
    }

    alert("Chỉ số BMI của bạn là " + bmi + " Phân loại " + result);
}