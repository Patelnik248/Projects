console.log("Enter first color.");
let clr1 = prompt("Enter first color.");
console.log("Enter Second color.");
let clr2 = prompt("Enter second color.");
let result = "z";

if (
  (clr1.toLowerCase() == "red" && clr2.toLowerCase() == "blue") ||
  (clr2.toLowerCase() == "red" && clr1.toLowerCase() == "blue")
) {
  result = "a";
} else if (
  (clr1.toLowerCase() == "red" && clr2.toLowerCase() == "yellow") ||
  (clr2.toLowerCase() == "red" && clr1.toLowerCase() == "yellow")
) {
  result = "b";
} else if (
  (clr1.toLowerCase() == "yellow" && clr2.toLowerCase() == "blue") ||
  (clr2.toLowerCase() == "yellow" && clr1.toLowerCase() == "blue")
) {
  result = "c";
}

switch (result) {
  case "a":
    console.log("Mixed color will be 'Purple'");
    alert("Mixed color will be 'Purple'");
    break;

  case "b":
    console.log("Mixed color will be 'Orange'");
    alert("Mixed color will be 'Orange'");
    break;

  case "c":
    console.log("Mixed color will be 'Green'");
    alert("Mixed color will be 'Green'");
    break;

  default:
    console.log("Invalid color combination");
    alert("Invalid color combination");
    break;
}
