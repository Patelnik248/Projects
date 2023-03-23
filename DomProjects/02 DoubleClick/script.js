const box = document.getElementById("container");
const text = document.getElementById("doubleclick");

box.addEventListener("dblclick", function(){
    text.innerText = "You just use double click event :)";
})