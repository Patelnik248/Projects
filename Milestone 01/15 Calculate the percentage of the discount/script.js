const price=Number(prompt("Enter original Price:"));
const discountprice=Number(prompt("Enter discounted Price:"));
const discountpercentage = () =>{
    let val = price - discountprice;
    val = (val/price)*100;
    return val;
}
console.log(`Percentahe of discount is ${discountpercentage()}%`);