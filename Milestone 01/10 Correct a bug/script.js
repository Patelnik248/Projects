let cart=[];
let n =prompt("Enter number of product");
for(let i=0;i<n;i++){
    cart[i]=prompt(`Enter quantity of product ${i+1}`);
}
for(let i=0;i<n;i++){
    cart[i]=2*cart[i];
}
console.log(cart);