//Exercise 5 : Composing
//Analyse the code below, and before executing it, predict the outcome of the last line.

const compose = (f, g) => (a) => f(g(a));//applies g to a, then applies f to the result
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) //add1(add5(10)) :  add5(10) = 10+5 = 15 ==> add1(add5(10)) = add1(15) = 16
//final result is : 16                       



console.log(compose(add1, add5)(10))