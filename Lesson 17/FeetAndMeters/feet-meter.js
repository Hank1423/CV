function FootToMeter(foot){
    return 0.305 * foot;
}

function MeterToFoot(meter){
    return 3.279 * meter;
}

function ChangeFeetToMeter(){
    let input = +document.getElementById("inputVal").value;
    let result = FootToMeter(input)
    document.getElementById("Display").innerHTML = input + " F = " + result.toFixed(3) + " M";
}


function ChangeMeterToFeet(){
    let input = +document.getElementById("inputVal").value;
    let result = MeterToFoot(input)
    document.getElementById("Display").innerHTML = input + " M = " + result.toFixed(3) + " F";
}
