let VatLy = parseFloat(prompt("Enter the score for Vat Ly:"));
let HoaHoc = parseFloat(prompt("Enter the score for Hoa Hoc:"));
let SinhHoc = parseFloat(prompt("Enter the score for Sinh Hoc:"));
let total = VatLy + HoaHoc + SinhHoc;
let average = (VatLy + HoaHoc + SinhHoc) / 3;
console.log("Total score: " + total);
console.log("Average score: " + average);
alert("Total score: " + total);
alert("Average score: " + average);
