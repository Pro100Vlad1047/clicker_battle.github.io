let i = 0;

function red_button() {
    if (i <= -19) {
        winnerRed();
    } else {
        if (document.getElementById("red_button").innerHTML == "Dark side") {
            changeText();
        } else {
            --i;
            document.getElementById("red_button").innerHTML = i;
            document.getElementById("blue_button").innerHTML = i;
        }
    }
}
function blue_button() {
    if (i >= 19) {
        winnerBlue();
    } else {
        if (document.getElementById("blue_button").innerHTML == "Light side") {
            changeText();
        } else {
            ++i;
            document.getElementById("blue_button").innerHTML = i;
            document.getElementById("red_button").innerHTML = i;
        }
    }
}
function changeText(){
    document.getElementById("red_button").innerHTML = 0;
    document.getElementById("blue_button").innerHTML = 0;
    document.getElementById("red_button").style.fontSize = "100px";
    document.getElementById("blue_button").style.fontSize = "100px";
}
function winnerRed(){
    document.getElementById("red_button").style.fontSize = "45px";
    document.getElementById("red_button").style.color = "whitesmoke";
    document.getElementById("red_button").style.backgroundColor = "#2ECC71";
    document.getElementById("red_button").style.border = "#2ECC71 2px solid";
    document.getElementById("red_button").innerHTML = "YOU ARE WINNER";
    document.getElementById("blue_button").style.fontSize = "45px";
    document.getElementById("blue_button").style.color = "black";
    document.getElementById("blue_button").style.backgroundColor = "#E74C3C";
    document.getElementById("blue_button").style.border = "#E74C3C 2px solid";
    document.getElementById("blue_button").innerHTML = "YOU ARE LOOSER";
}
function winnerBlue() {
    document.getElementById("blue_button").style.fontSize = "45px";
    document.getElementById("blue_button").style.color = "whitesmoke";
    document.getElementById("blue_button").style.backgroundColor = "#2ECC71";
    document.getElementById("blue_button").style.border = "#2ECC71 2px solid";
    document.getElementById("blue_button").innerHTML = "YOU ARE WINNER";
    document.getElementById("red_button").style.fontSize = "45px";
    document.getElementById("red_button").style.color = "black";
    document.getElementById("red_button").style.backgroundColor = "#E74C3C";
    document.getElementById("red_button").style.border = "#E74C3C 2px solid";
    document.getElementById("red_button").innerHTML = "YOU ARE LOOSER";
}