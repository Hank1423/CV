function yesClick() {
    alert("<3");
}

function moveButton() {
    let x = Math.round(Math.random() * window.innerWidth);
    let y = Math.round(Math.random() * window.innerHeight);

    let btnNo = document.getElementById("btnNo");

    if (x > window.innerWidth - 100) x -= 100;
    if (y > window.innerHeight - 100) y -= 100;
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
}