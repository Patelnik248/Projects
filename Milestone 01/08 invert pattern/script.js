const num1 = prompt("Enter any Number: ");
let pattern = "";
for(let i=0;i<num1;i++){
    for(let j=0;j<num1-i;j++){
        pattern+= "*";
    }
    pattern+="\n";
}
console.log(pattern);