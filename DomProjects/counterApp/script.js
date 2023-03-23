// getting HTML elements

const display = document.getElementById("display_value");
const decrement = document.getElementById("decrement_btn");
const increment = document.getElementById("increment_btn");
const reset = document.getElementById("reset_btn");

// decrement function

function decrementvalue() {
  const value = Number(display.innerText);
  display.innerText = value - 1;
}
decrement.addEventListener("click", decrementvalue);

// increment function
function incrementvalue() {
  const value = Number(display.innerText);
  display.innerText = value + 1;
}
increment.addEventListener("click", incrementvalue);

// reset function
function resetvalue() {
  display.innerText = 0;
}
reset.addEventListener("click", resetvalue);
