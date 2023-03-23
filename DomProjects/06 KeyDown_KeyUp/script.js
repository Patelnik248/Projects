const text = document.getElementById("text");
const box = document.getElementById("box");
document.addEventListener("keyup" ,function(x){
    text.innerText = x.key + " is up";
    box.style.backgroundColor = "red";
})

document.addEventListener("keydown" ,function(x){
    text.innerText = x.key + " is dowm";
    box.style.backgroundColor = "blue";
})