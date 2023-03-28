
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  const len = colors.length;
  const colorbtn = document.getElementById("btn");
  colorbtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * len);
    const randomColor = colors[randomIndex];
    document.body.style.backgroundColor = randomColor;
  });

