//Exercise 1 : Dog age to Human years
const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];


//1.
let sumD = 0;
for(let i = 0; i < data.length; i++) {
    if (data[i].type === "dog") {
        sumD += data[i].age * 7;
    }
}

console.log("sum of dog's ages in human years : ", sumD);

//2.
const sumDog = data.filter(da => da.type === "dog").map(dog => dog.age * 7).reduce((acc, currAge) => acc + currAge, 0);
console.log("sum of dog's ages in human years (using reduce) : ", sumDog);
