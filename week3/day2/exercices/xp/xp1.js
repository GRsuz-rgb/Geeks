/*
//Exercise 1 : Find the numbers divisible by 23
//1. Create a function call displayNumbersDivisible() that takes no parameter.
//2. In the function, loop through numbers 0 to 500.
//3. Console.log all the numbers divisible by 23.

function displayNumberDivisible(){
    let sum = 0;
    for(let i = 0; i <= 500; i++){
        if (i % 23 == 0){
            console.log("Outcome : ", i);
            sum += i;
        }
    }
    console.log("Sum : ", sum);
}
displayNumberDivisible();

//5. Bonus: Add a parameter divisor to the function
function displayNumberDivisible(number){
    let sum = 0;
    for(let i = 0; i <= 500; i++){
        if (i % number == 0){
            console.log("Outcome : ", i);
            sum += i;
        }
    }
    console.log("Sum : ", sum);
}
displayNumberDivisible(3);


// Exercise 2 : Shopping List
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
//2. 
let shoppingList = [ "banana", "orange", "apple"];
//3. 4. 6.
function myBill(){
   let t = 0;
   for(let item of shoppingList){
        if (item in stock && stock[item] > 0){
            t += prices[item];
            stock[item]--;
        } 
    } 
    return t;   
}
//5.
console.log("my Bill : ", myBill());



//Exercise 3 : What’s in my wallet ?
//1.  2. 3.
function changeEnough(itemPrice, amountOfChange) {
    let monnaie = [0.25, 0.10, 0.05, 0.01];
    let totalOfChange = 0;
    for (let i = 0; i < amountOfChange.length; i++){
        totalOfChange += amountOfChange[i] * monnaie[i];
    }
    return totalOfChange > itemPrice;
}
//4.     
console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2,100,0,0]));
console.log(changeEnough(0.75, [0,0,20,5]));

*/

//Exercise 4 : Vacations Costs
//1.
function hotelCost(){
    let answer;
    do { 
        answer = prompt("How many nights would you like to stay in the hotel ?");
    } while(isNAN(answer) || answer === "" || answer === null);
    return Number(answer) * 140;

}
//2.
function planeRideCost(){
    let answer;
    do { 
        answer = prompt("What's your destination?");
    } while(!isNAN(answer) || answer == "" || answer.trim() === "");
    
    let destination = answer.toUpperCase();
    if (destination == "LONDON")
        return 183;
    else if (destination == "PARIS")
        return 220;
    else
        return 300;
}

//3.
function rentalCarCost(){
    let answer;
    do {
        answer = prompt("How many days would ypu like to rent the car ?");
    }while(answer === null || isNAN(answer) || answer === "");
    
    days = Number(answer);
    let cost = days * 40;
    if ( days > 10 ){
        cost *= (1 - 0.05);
    }

    return cost;
}

//4.
function totalVacationCost(){
    let hotel = hotelCost();
    let plane = planeRideCost();
    let car = rentalCarCost();

    console.log(" The car cost: ", car, "the hotel cost: ", hotel, "the plane tickets cost: ", plane);
    console.log("Total vacation cost: ", car + hotel + plane);
}

//5. 
totalVacationCost();



