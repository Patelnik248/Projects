const img = document.getElementById("image");
let l = 0;
let t = 0;

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    if (l >= 0) {
      l = l - 0.5;
      img.style.left = `${l}rem`;
    }
  } else if (e.key === "ArrowRight") {
    if (l <= 81) {
      l = l + 0.5;
      img.style.left = `${l}rem`;
    }
  } else if (e.key === "ArrowUp") {
    if (t >= 0) {
      t = t - 0.5;
      img.style.top = `${t}rem`;
    }
  } else if (e.key === "ArrowDown") {
    if (t <= 25) {
      t = t + 0.5;
      img.style.top = `${t}rem`;
    }
  }
});
