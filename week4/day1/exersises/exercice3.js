//Exercise 3 : Is it a string ?

//Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false

const isString = (arg) => {
    return typeof(arg) === 'string';
}


console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false
