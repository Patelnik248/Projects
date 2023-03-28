let cart = [
  { unitprice: 200, quantity: 5 },
  { unitprice: 124, quantity: 3 },
  { unitprice: 47, quantity: 8 },
  { unitprice: 964, quantity: 1 },
  { unitprice: 243, quantity: 6 },
  { unitprice: 36, quantity: 9 },
];
const totalPrice = () =>{
    let total=0;
    for(let i=0; i<cart.length; i++ ){
        total=total+(cart[i].unitprice*cart[i].quantity);
    }
    return total;
}
console.log(`TotalCost is ${totalPrice()}`);