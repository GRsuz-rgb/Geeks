# Exercise 3 : Dogs Domesticated
#1 Create a new python file and import your Dog class from the previous exercise.
from exercice2 import Dog
#2 In the new python file, create a class named PetDog that inherits from Dog.
#3 Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

#4 Add the following methods:
#train:
    def train (self):
        print(f"bark : {self.bark()}")
        self.trained = True

#play:
    def play(self, *other_dogs):
        dog_names = ', '.join(dog.name for dog in other_dogs)
        print(f"{dog_names} all play together")

#do_a_trick:   
    def do_a_trick(self):
        if self.trained:
            trick_list = [
                f"{self.name}  does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            import random
            print(random.choices(trick_list))
               

if __name__ == "__main__":
    PetDog1 = PetDog("Puppet", 4, 18)
    PetDog2 = PetDog("Roddy", 6, 24)
    PetDog3 = PetDog("doggy", 3, 12)

    print(f"{PetDog1.name} run speed is {PetDog1.run_speed()}")
    print(f"{PetDog2.name} run speed is {PetDog2.run_speed()}")
    print(f"{PetDog3.name} run speed is {PetDog3.run_speed()}")
    print(f"\nPetDog1 name : {PetDog1.name},\nPeDog1 age : {PetDog1.age},\nPetDog1 weight : {PetDog1.weight}")
    print(f"\nPetDog2 name : {PetDog2.name},\nDog2 age : {PetDog2.age},\nPetDog2 weight : {PetDog2.weight}")
    print(f"\nPetDog3 name : {PetDog3.name},\nDog3 age : {PetDog3.age},\nPetDog3 weight : {PetDog3.weight}")


    PetDog1.train()
    PetDog2.train()
    PetDog1.do_a_trick()
    PetDog2.do_a_trick()    
    PetDog1.play(PetDog2, PetDog3)
    PetDog2.play(PetDog1, PetDog3)
    PetDog3.train()
