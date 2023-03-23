const text = document.getElementById("text")

document.addEventListener("keypress",function(e){
    text.innerText = "You just Press " + e.key;
})