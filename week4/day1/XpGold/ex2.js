//Exercise 2 : Closure
//Analyse the code below, and before executing it, predict the outcome of the last line.

const addTo = x => y => x + y;//function that returns another function ; called with x, it gives back a function (y)=>x+y  
const addToTen = addTo(10);//10 passed as x , so : y=> 10+y
addToTen(3);//=> 10+3 
//result is : 13


console.log(addToTen(3));

