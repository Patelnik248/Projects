const box = document.getElementById("box");
const clickme = document.getElementById("clickme");
box.addEventListener("click", function(){
   clickme.innerText = "You just click me :)";
});