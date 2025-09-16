//Exercise 5 : Dog class

class Dog {
  constructor(name) {
    this.name = name;
  }
};

  // 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};     //=> super() is missing

  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);   
    this.size = size; 
  }
};     //=> this constructor will successfully extend the Dog class

  // 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};   //=> name is not defined (not passed to constructor)

  // 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};    //=> super() is missing














