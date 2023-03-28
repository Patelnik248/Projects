let arr = [
  "HTML and Semantics",
  "Starting with CSS",
  "Working Template",
  "Mobile responsive webpages",
  "Grid and Flex-box in CSS",
  "Projects using HTML & CSS",
  "Version Control and Git",
  "Getting Started with JavaScript",
  "Advance JavaScript",
  "Working with DOM",
  "Making Projects using HTML, CSS and JavaScript",
  "Understanding Fundamental of Computer Science",
  "Getting Started with Database",
  "Understanding the Database",
  "Starting with NodeJS and Express",
  "Understanding React and its Fundamentals",
  "Understanding Hooks and Routers",
  "Starting and Completing Full Fledge Projects",
];

const displaylist = document.querySelector("#displaylist");
const display = document.querySelector("#display");
const btn = document.querySelector("#add-btn");
function addListItems() {
  if (arr[0] != null) {
    let list = document.createElement("li");
    list.textContent = arr[0];
    displaylist.appendChild(list);
    arr.shift();
  } else {
    alert("All items have been added.");
  }
}

btn.addEventListener("click", addListItems);
