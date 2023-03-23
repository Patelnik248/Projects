const box = document.getElementById("box");
const text = document.getElementById("text");

function mouseout(){
    text.innerText = "Thanks for going Outside :)";
}

box.addEventListener("mouseout", mouseout);