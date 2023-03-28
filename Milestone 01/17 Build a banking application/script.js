let userDetails={"name":"username","balance":2000};
// const name1 = prompt("Enter your name:");
const temp = prompt("Enter 'd' dor deposite & 'w' for withdrawal: ");
let amount;
function deposite(){
    userDetails.balance=userDetails.balance+amount;
    console.log("Transaction Successful :)");
    console.log(`updated balance is ${userDetails.balance}`);
}
function withdrawal(){
    if(amount<= userDetails.balance){
        userDetails.balance=userDetails.balance-amount;
        console.log("Transaction Successful :)");
        console.log(`updated balance is ${userDetails.balance}`);
    }
    else{
        console.log("Insufficient balance");
        console.log("Transaction UnSuccessful :(");

    }
}
if(temp.toLowerCase()== 'd'){
    amount=Number(prompt("Enter amount of deposite"));
    deposite();
}
else if(temp.toLowerCase() == 'w'){
    amount=Number(prompt("Enter amount of withdrawal"));
    withdrawal();

}