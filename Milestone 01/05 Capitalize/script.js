console.log("Enter Your Name: ");
let nameof = prompt("Enter Your Name: ");
console.log(`Entered name was ${nameof}`);
let x = nameof.length;
let n = nameof[0];
let n1 = nameof.slice(1,x);
function isLowerCase(n){
    if( n>='a' && n<='z'){
        return true;
    }
    else{
        return false;
    }
}
isLowerCase(n)
?n=n.toUpperCase()
:n=n;
nameof=n.concat(n1);
console.log(`updated name is ${nameof}`);

