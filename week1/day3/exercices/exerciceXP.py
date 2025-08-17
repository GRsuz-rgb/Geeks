
# Exercise 1: Cats
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
# create a function that finds the oldest cat and returns the cat.
    def oldestCat(self, otherCat):
        if self.age > otherCat.age:
            print(f"The oldest cat is {self.name}, and is {self.age} years old")
        elif self.age < otherCat.age:
            print(f"The oldest cat is : {otherCat.name} , and is {otherCat.age} years old")
        else:
            print("Cats are in same age")  
# Instantiate three Cat objects using the code provided above.
cat1 = Cat("Lulu", "2")
cat2 = Cat("Dudu", "4")
cat3 = Cat("Ketty", "5")

# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.
cat1.oldestCat(cat2)
cat1.oldestCat(cat3)




# Exercise 2 : Dogs
#Create a class called Dog.
#In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
class Dog():
    def __init__(self, name, height):
        self.name = name
        self.height = height

#Create a method called bark that prints the following string “<dog_name> goes woof!”.
    def bark(self):
        print(f"{self.name} goes woof!")
#Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
    def jump(self):
        new_height = self.height * 2
        print(f"{self.name} jumps {new_height} cm high!")
#Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
davids_dog = Dog("Rex", 50)
#Print the details of his dog (ie. name and height) and call the methods bark and jump.
print(f"Name : {davids_dog.name}   Age : {davids_dog.height}")
davids_dog.bark()
davids_dog.jump()
#Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
sarahs_dog = Dog("Teacup", 20)
#Print the details of her dog (ie. name and height) and call the methods bark and jump.
print(f"Name : {sarahs_dog.name}   Age : {sarahs_dog.height}")
sarahs_dog.bark()
sarahs_dog.jump()
#Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.
if davids_dog.height > sarahs_dog.height:
    print(f"The bigger dog is {davids_dog.name}, and is {davids_dog.height} cm")
elif davids_dog.height < sarahs_dog.height:
    print(f"The bigger dog is {sarahs_dog.name}, and is {sarahs_dog.height} cm")
else:
    print("Same height!") 




#Exercise 3 : Who’s the song producer?
#. Define a class called Song, it will show the lyrics of a song.
#Its __init__() method should have two arguments: self and lyrics (a list).
class Song():
    def __init__(self, lyrics):
        self.lyrics = lyrics

#Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line   
    def sing_me_a_song(self):
        for element in self.lyrics:
            print(element)

# Create an object, for example:
stairway = Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# Then, call the sing_me_a_song method.
stairway.sing_me_a_song()




#Exercise 4 : Afternoon at the Zoo
#Create a class called Zoo.
#In this class create a method __init__ that takes one parameter: zoo_name.
#It instantiates two attributes: animals (an empty list) and name (name of the zoo).
class Zoo():
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

#Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
    def  add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

#Create a method called get_animals that prints all the animals of the zoo.
    def get_animals(self):
        for animal in self.animals:
            print(animal)

#Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

#Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
    def sort_animals(self):
        sortAnimals = sorted(self.animals)
        grouped = {}
        for animal in sortAnimals:
            first_lett = animal[0].upper()
            if first_lett not in grouped:
                grouped[first_lett] = []
            grouped[first_lett].append(animal) 

        for key in list(grouped.keys()):
            if len(grouped[key]) == 1:
                grouped[key] = grouped[key][0]
        return grouped
        #--> one-animal groups are shown as strings, and multiple-animal groups remain as lists.

#Create a method called get_groups that prints the animal/animals inside each group.
    def get_groups(self):
        groups = self.sort_animals()
        for letter, animaux in groups.items():
            print(f"{letter} : {animaux}")


#Create an object called new_york_zoo and call all the methods.
new_york_zoo = Zoo("New York Zoo")

new_york_zoo.add_animal("lion")
new_york_zoo.add_animal("penguin")
new_york_zoo.add_animal("panda")
new_york_zoo.add_animal("gorella")
new_york_zoo.add_animal("giraffe")
new_york_zoo.add_animal("zebra")


new_york_zoo.get_animals()
new_york_zoo.get_groups()
new_york_zoo.sell_animal("lion")
new_york_zoo.sell_animal("penguin")
new_york_zoo.get_animals()
new_york_zoo.get_groups()