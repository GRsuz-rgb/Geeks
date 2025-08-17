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