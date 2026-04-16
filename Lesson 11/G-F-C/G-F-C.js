function check(name) {
    let good = document.getElementById('good');
    let fast = document.getElementById('fast');
    let cheap = document.getElementById('cheap');

    if (good.checked && fast.checked && cheap.checked) {
        if (name === 'good') {
            cheap.checked = false;
        }
        if (name === 'fast') {
            good.checked = false;
        }
        if (name === 'cheap') {
            fast.checked = false;
        } 
    }
}