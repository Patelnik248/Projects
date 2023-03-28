let numbers=[];
let num1=[];
let n=prompt("Enter number of total ekements: ");
for(let i=0;i<n;i++){
    numbers[i]=prompt(`Enter number ${i+1}`);
}
let j=0;
for(let i=0;i<n;i++){
    if(numbers[i]%3==0 && numbers[i]%2!=0){
        num1[j]=numbers[i];
        j++;
    }
    else{
        continue;
    }
}
console.log(num1);