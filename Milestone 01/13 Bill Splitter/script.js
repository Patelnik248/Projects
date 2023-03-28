function billsplitter(){

    const person = Number(prompt("Enter number of person: "));
    const dish = Number(prompt("Enter number of dishes: "));
    let cost =[];
    let totalbill=0;
    for (let i=0; i<dish; i++){
        cost[i]=Number(prompt(`Enter cost of dish ${i+1}`));
        totalbill=totalbill+cost[i];
    }

    return {"TotalBill": totalbill ,"BillPer_Person": totalbill/person};

}

console.log(billsplitter());

