// Get Elements From HTML By ID
var button = document.getElementById("btn");
var input = document.getElementById("data");
var res = document.getElementById("result");

// We Give A Function For The Button By (onclick)
button.onclick = function() {
    // The Value Entered In The Input Saved In A Variable unputValue To Control It By The Grade
    var inputValue = input.value;
    if ((inputValue <= 100) && (inputValue >= 90)){
        res.innerHTML = "A";
    } else if ((inputValue <= 89) && (inputValue >= 82)){
        res.innerHTML = "B+";
    } else if ((inputValue <= 81) && (inputValue >= 74)) {
        res.innerHTML = "B";
    } else if ((inputValue <= 73) && (inputValue >= 66)) {
        res.innerHTML = "C+";
    } else if ((inputValue <= 65) && (inputValue >= 58)){
        res.innerHTML = "C";
    } else if ((inputValue <= 57) && (inputValue >= 50)){
        res.innerHTML = "D";
    } else if (inputValue < 50){
        res.innerHTML = "F";
    } else {
        // If Any Value More Than 100 And If It Is A String The Result Will Be Shown Is Undefined
        res.innerHTML = "Undefined";
    }
}