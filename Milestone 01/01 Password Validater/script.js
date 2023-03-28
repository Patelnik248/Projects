console.log("Enter Your Password");
const pass = prompt("Enter Your Password");
console.log("Confirm your Password");
const confirmpass = prompt("Confirm your Password");

if(pass == confirmpass){
    console.log("Password Matched. Password validation Successful.");
}
else{
    console.log("Password didn't match. Password validation unsuccessful.");
}