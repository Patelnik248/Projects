let result;
const num1 = parseFloat(prompt("num1: "));
const num2 = parseFloat(prompt("num2: "));
const opre = prompt("Operator");

switch (opre){
    case '+' :
        result = num1 + num2;
        alert(`${num1} + ${num2} = ${result}`);
        break;

    case '-' :
        result = num1 - num2;
        alert(`${num1} - ${num2} = ${result}`);
        break;
    
    case '*' :
        result = num1 * num2;
        alert(`${num1} * ${num2} = ${result}`);
        break;
    
    case '/' :
        result = num1 / num2;
        alert(`${num1} / ${num2} = ${result}`);
        break;

    default:
        alert("Invalid Operator");
        break;

}