//Exercise 3 : Currying
//Analyse the code below, and before executing it, predict the outcome of the last line.
const curriedSum = (a) => (b) => a + b //it takes a, then it returns function that takes b, then it computes a+b
curriedSum(30)(1) //(b)=>30+b    
                 // 30+1
                 //result is : 31

console.log(curriedSum(30)(1))



