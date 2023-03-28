const display = document.querySelector("#display");
const form = document.querySelector("form");
let text = document.querySelector("#inp");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting

  if (text.value != null) {
          let list = document.createElement("li");
          list.textContent = text.value;
          display.appendChild(list);
          form.reset();
  } 
});
