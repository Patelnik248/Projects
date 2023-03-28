let customer_cart = [
  "beg",
  "banana",
  "apple",
  "banana",
  "orange",
  "laptop",
  "mobile",
  "orange",
];
let new_cart = [];

for (let i = 0; i < customer_cart.length; i++) {
  if (new_cart.includes(customer_cart[i])) {
    continue;
  } else {
    new_cart.push(customer_cart[i]);
  }
}

console.log("Old cart: ");
console.log(customer_cart);
console.log("New cart: ");
console.log(new_cart);
