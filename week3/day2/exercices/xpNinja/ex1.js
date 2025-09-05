//Exercise 1: Random Number
//1.Get a random number between 1 and 100.
let rand = Math.floor(Math.random() * 100) + 1;
console.log("Number : ", rand);
//2.Console.log all even numbers from 0 to the random number.
for (let i = 0; i <= rand; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}



















