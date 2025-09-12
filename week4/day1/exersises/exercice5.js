//Exercise 5 : Kg and grams
//Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
function returnInGrams(weightInKg) {
    return weightInKg * 1000;
}
//First, use function declaration and invoke it.
console.log(returnInGrams(7));
//Then, use function expression and invoke it.
const weightInGram = function(weightInKg) {
    return weightInKg * 1000;
}
console.log(weightInGram(8.5));
//Write in a one line comment, the difference between function declaration and function expression.
    //=> the function declaration is hoisted ;it can be called before its declaration . The function expression is called only after it has been defined in the cod.
//Finally, use a one line arrow function and invoke it 
const toGram = weightInKg => weightInKg * 1000;
console.log(toGram(0.6));





