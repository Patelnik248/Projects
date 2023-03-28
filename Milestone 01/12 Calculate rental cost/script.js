let car = prompt("Enter type Of car:Economy,Midsize or Luxury :");
let day = prompt("Enter number of days of rent:");
let rent=0;
car= car.toLowerCase();
function totalrent(car,day){
    if(car == 'economy'){
        rent= day*4000;
    }
    else if (car == 'midsize'){
        rent = day*10000;
    }
    else if(car == 'luxury'){
        rent = day* 20000;
    }
    else{
        console.log("invalid inputs");
    }
}
totalrent(car,day);

console.log(`Total rent is ${rent}`);