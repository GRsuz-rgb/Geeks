//Exercise 1 : Nested functions
/*
let landscape = function() {

 let result = "";

 let flat = function(x) {
   for(let count = 0; count<x; count++){
     result = result + "_";
   }
 }

 let mountain = function(x) {
   result = result + "/"
   for(let counter = 0; counter<x; counter++){
     result = result + "'"
   }
   result = result + "\\"
 }

 flat(4);
 mountain(4);
 flat(4)

 return result;
}

landscape()
*/

//1.Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion
    //=> flat(x) adds x underscores "_" to the result(starts as an empty string "") . mountain(x) adds slash "/" ,then x apostrophes "'" ,then \ 
   //So that the result will be : flat(4)=>____  
   //                             mountain(4)=>____ + /''''\   
   //                             flat(4)=>____
   //                            ==>____/''''\____

//2.Change the code below to nested arrow functions

let landscape = () => {

 let result = "";

 let flat = (x) => {
   for(let count = 0; count<x; count++){
     result = result + "_";
   }
 };

 let mountain = (x) => {
   result = result + "/";
   for(let counter = 0; counter<x; counter++){
     result = result + "'";
   }
   result = result + "\\";
 };

 flat(4);
 mountain(4);
 flat(4)

 return result;
}

console.log(landscape());






