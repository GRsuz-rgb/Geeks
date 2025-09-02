//Exercise 1 : List of people
const people = ["Greg", "Mary", "Devon", "James"];
console.log(people);
//Part I - Review about arrays
//1. Write code to remove “Greg” from the people array.
people.splice(0,1);
console.log(people);
//2. Write code to replace “James” to “Jason”.
james = people.indexOf("James");
people.splice(james, 1, "Jason");
console.log(people);
//3. Write code to add your name to the end of the people array.
people.push("nour")
console.log(people);
//4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));
//5. Write code to make a copy of the people array using the slice method.
console.log(people.slice(0,4));
//The copy should NOT include “Mary” or your name.
console.log(people.slice(1,3));
//6. Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo")); //it returns -1 because Foo doesn't exist
//7. Create a variable called last which value is the last element of the array.
last = people[people.length - 1];
console.log(last);

//Part II - Loops
//1. Using a loop, iterate through the people array and console.log each person.
for(i=0; i< people.length; i++){
    console.log(people[i]);
}
//2. Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
for(i=0; i< people.length; i++){
    console.log(people[i]);
    if (people[i] == "Devon"){
        break;
    }
    
}


//Exercise 2 : Your favorite colors
//1. Create an array called colors where the value is a list of your five favorite colors
let colors = ["Black", "Green", "White", "Blue", "Yellow"];
//2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for(i=0; i< colors.length; i++){
    console.log("My", i+1, "choice is ", colors[i]);
} 
//3. Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//Hint : create an array of suffixes to do the Bonus
let suffixes = ["st", "nd", "rd", "th"];
for(let i=0; i< colors.length; i++){
    if (i < 3){
        console.log("My", i+1, suffixes[i], "choice is ", colors[i]);
    }
    else {
        console.log("My", i+1, suffixes[suffixes.length -1], "choice is ", colors[i]);
    }    
}


/*
//Exercise 3 : Repeat the question

//1. Prompt the user for a number.
//Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
let number = prompt("Enter a number : ");
console.log(number);
console.log("typeof = ", typeof(number)); //result = string
//2. While the number is smaller than 10 continue asking the user for a new number.
let n = Number(prompt("Enter auther number : "));
while( n < 10){
   n = Number(prompt("Enter auther number : "));
   console.log(n);
}

*/

//Exercise 4 : Building Management
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

//2. Console.log the number of floors in the building.
console.log(building.numberOfFloors);
//3. Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);
//4. Console.log the name of the second tenant and the number of rooms he has in his apartment
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);
//5. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let s = building.numberOfRoomsAndRent.sarah[1];
let dv = building.numberOfRoomsAndRent.david[1];
let dn = building.numberOfRoomsAndRent.dan[1];
console.log(s, dv, dn);
if( s + dv > dn){
   building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]);



//Exercise 5 : Family
const family = {
    familyName: "ddd",
    numberOfMembers: 4,
    nameOfMembers: {
        firstMember: "yass",
        secondMember: "zayn",
        thirdMember: "redoua" ,
        fourthMember: "kam",
    }
}
//2. Using a for in loop, console.log the keys of the object.
for (let key in family){
    console.log("key : ", key);
}
//3. Using a for in loop, console.log the values of the object.
for(let key in family){
    console.log("value : ", family[key]);
}



//Exercise 6 : Rudolf
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
//1. Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
let expression = "";
for (let key in details){
    expression += key + " " + details[key] + " ";
}
console.log(expression);



//Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
//1. 
names.sort();
let m = "";
for(let i=0; i < names.length; i++){
   na = names[i].substring(0,1);
   console.log(na);
   m += na;
}
console.log(m);





