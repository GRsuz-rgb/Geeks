// Exercise 1 : Scope

//Analyse the code below, and predict what will be the value of a in all the following functions.

/*
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

     //=> reponse: ca va afficher 3 car la variable a est declaree locallement dans la fonction  
     //=> et si on declare a const on aurra une erreur car on ne peut pas modifier la valeur d'une constante


//#2
const a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    console.log(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?

     //=> reponse: le premier call de funcThree() affichera ...function 0, funcTwo() modifiera la valeur de a de 0 a 5 ,donc le dernier call de funcThree() donnnera : ... function 5 .
     //=> et si on declare a const on aurra une erreur dans funcTwo() car on ne peut pas modifier const.


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

    //=> reponse: funFour() a cree une variable globale a dans window avec a valeur "hello" et funcFive() affichera ...function hello


//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
     //=> reponse: funcSix() affichera ...function test si la variable a est declaree let ou bien const car elle est variable locale a la fonction funSix().
*/

//#5
const a = 2;
if (true) {
    const a = 5;
    console.log(`in the if block ${a}`);
}
console.log(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?

     //=> reponse: deux alerts doit etre afficher une: in the if block 5 ,et l'autre:  outside of the if block 2
     //=> et si on remplace let par const on aura le meme resultat car les deux varibles a sont declarees dans des scopes differents
/*

*/