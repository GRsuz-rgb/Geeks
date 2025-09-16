//Exercise 3 : Counter class

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter(); //=> count = 0
counterOne.increment(); //=> count = 1
counterOne.increment(); // => count = 2

const counterTwo = counterOne;
counterTwo.increment(); // => count = 3 because counterTwo share the same reference with counterOne

console.log(counterOne.count); //3 (same reference)











