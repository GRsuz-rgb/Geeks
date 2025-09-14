//Exercise 5 : Star Wars

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const oneString = epic.reduce((acc, element) => acc + " " + element);
console.log(oneString);