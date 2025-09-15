//Exercise 4 : Nested arrays
//1.
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const newArr = array.flat(2);
console.log(newArr);
//bonus
const newA = [[1],[2],[3],[[[4]]],[[[5]]]].flat(2);

//2.
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const newGreet = greeting.map(g => g.join(" "));
console.log(newGreet);

//3.
const sentence = greeting.map(g => g.join(" ")).join(" ");
console.log(sentence);

//4.
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const newTrap = trapped.flat(Infinity);
console.log(newTrap);

