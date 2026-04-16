function changeImage(pos) {
    let img = document.getElementById("img" + pos);
    let currentSrc = img.src;

    if (currentSrc.includes("monkey")) {
        img.src = "images/cat-" + pos + ".jpg";
    } else if (currentSrc.includes("cat")) {
        img.src = "images/dog-" + pos + ".jpg";
    } else {
        img.src = "images/monkey-" + pos + ".jpg";
    }
    checkWin();
}

function checkWin() {
    let img1 = document.getElementById("img1").src;
    let img2 = document.getElementById("img2").src;
    let img3 = document.getElementById("img3").src;
    let img4 = document.getElementById("img4").src;
    let img5 = document.getElementById("img5").src;

    let container = document.querySelector(".container");

    if (img1.includes("monkey") && img2.includes("monkey") && img3.includes("monkey") && img4.includes("monkey") && img5.includes("monkey")) {
        container.classList.add("win"); 
    } else if (img1.includes("cat") && img2.includes("cat") && img3.includes("cat") && img4.includes("cat") && img5.includes("cat")) {
        container.classList.add("win"); 
    } else if (img1.includes("dog") && img2.includes("dog") && img3.includes("dog") && img4.includes("dog") && img5.includes("dog")) {
        container.classList.add("win"); 
    } else {
        container.classList.remove("win");
    }
}