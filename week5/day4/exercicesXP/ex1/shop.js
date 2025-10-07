import products from "./products.js";

function findProduct(name) {
  const product = products.find(p => p.name.toLowerCase() === name.toLowerCase());
  return product ? product : "Product not found!";
}

console.log(findProduct("Laptop"));
console.log(findProduct("Book"));
console.log(findProduct("Phone"));
