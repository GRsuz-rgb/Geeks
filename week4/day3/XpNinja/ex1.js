//Exercise 1 : Bird class

class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  } // => I'm pink.  + [invoke the parent constructor (Bird) by calling super() => I'm a bird ] 
}

const pet = new Flamingo(); //=> creat new Flamingo object
// output ==> I'm pink. 🌸
//            I'm a bird. 🦢  
