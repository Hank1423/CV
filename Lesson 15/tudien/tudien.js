let dictionary = [
    { eng: "apple", vie: "quả táo" },
    { eng: "banana", vie: "quả chuối" },
    { eng: "orange", vie: "quả cam" }
];

function transcript() {
    let search = document.getElementById("string").value.toLowerCase();
    let result = "";
    for (i=0; i < dictionary.length; i++){
        if (dictionary[i].eng === search || dictionary[i].vie === search) {
            if(dictionary[i].eng === search) {
                result = dictionary[i].vie;
            } else {
                result = dictionary[i].eng;
            }
            break;
        }
    }
    if (result === "") {
        document.getElementById("result").innerHTML = "Không tìm thấy !"
    } else {
        document.getElementById("result").innerHTML = result
    }

}