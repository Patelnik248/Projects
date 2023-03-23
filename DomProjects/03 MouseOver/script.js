const box = document.getElementById("box");
const text =document.getElementById("text");

function mouseover(){
    text.innerText = "You just come inside the box.";
}
box.addEventListener("mouseover", mouseover)