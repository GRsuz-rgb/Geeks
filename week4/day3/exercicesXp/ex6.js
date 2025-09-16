//Exercise 6 : Challenges

//1.
//[2] === [2] //false because the two arrays don't share the same reference
//{} === {} //false because the two objects don't share the same reference

//2.
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) // object2 shares the same reference with object1, then output : 4 .
console.log(object3.number) // object3 shares the same reference with object1, then output : 4 .
console.log(object4.number) //output : 5 
//2.1.
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
};

//2.2
class Mammal extends Animal {
    sound(anSound) { 
        return `${anSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

//2.3
const farmerCow = new Mammal("Katty", "cat", "white");
console.log(farmerCow.sound("Mao"));







