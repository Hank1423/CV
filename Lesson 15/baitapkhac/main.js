let message = "I LOVE CAT";
let arr = message.split("");
function typeTextarea(){
    let str = "";
    let text = document.getElementById("txt").value;
    let length = text.length;
    if (length > 0){
        if (length <= message.length) {
            for (let i = 0; i < length; i++) {
                str += arr[i];
            }
        document.getElementById("txt").value = str;
        } else {
            document.getElementById("txt").value = "";
        }
    }
}