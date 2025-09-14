//Exercise 4 : Currying
//1.Analyse the code below, and before executing it, predict the outcome of the last line.

const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)// (b) => 5+b
add5(12) //5+12
//result is : 17


console.log(add5(12))