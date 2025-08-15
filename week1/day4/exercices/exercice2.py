#Exercise 2 : Dogs
#1 Create a class called Dog with the following attributes name, age, weight.
class Dog ():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

#2 Implement the following methods in the Dog class:
#bark: 
    def bark(self):
        return f"{self.name} is barking"

#run_speed: 
    def run_speed(self):
        speed = self.weight / self.age * 10
        return speed
#fight: 

    def fight (self, other_dog):
        winner1 = self.run_speed() * self.weight
        winner2 = other_dog.run_speed() * other_dog.weight
        if winner1 > winner2:
            return f"{self.name} won the fight"
        elif winner1 < winner2:
            return f"{other_dog.name} won the fight"
        else :
            return  "It's a tie. They have the same score" 
        


if __name__ == "__main__":

    Dog1 = Dog("Bolt", 5, 21)
    Dog2 = Dog("Lili", 2, 12) 
    Dog3 = Dog("Poppy", 4, 18)
    print(Dog1.bark(),"&", Dog2.bark(),"&", Dog3.bark())
    print(f"{Dog1.name} run speed is {Dog1.run_speed()}")
    print(f"{Dog2.name} run speed is {Dog2.run_speed()}")
    print(f"{Dog3.name} run speed is {Dog3.run_speed()}")
    print(f"\nDog1 name : {Dog1.name},\nDog1 age : {Dog1.age},\nDog1 weight : {Dog1.weight}")
    print(f"\nDog1 name : {Dog2.name},\nDog2.age : {Dog2.age},\nDog2.weight : {Dog2.weight}")
    print(f"\nDog1 name : {Dog3.name},\nDog3.age : {Dog3.age},\nDog3.weight : {Dog3.weight}")
    print(Dog1.fight(Dog2))
    print(Dog2.fight(Dog3))
    print(Dog1.fight(Dog3))
    print(Dog1.fight(Dog1))
    print(Dog2.fight(Dog1))

