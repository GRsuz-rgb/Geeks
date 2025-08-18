#Step 1: Create the Farm Class
class Farm():
#Step 2: Implement the __init__ Method    
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {} #empty dictionary
#Step 3: Implement the add_animal Method
    def add_animal(self, animal_type, count=1):
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type] = count
#Step 4: Implement the get_info Method
    def get_info(self):
        info = f"{self.name}'s farm\n"
        for animal, count in self.animals.items():
            info += f"{animal} : {count}\n"
        info += "\n    E-I-E-I-0!"
        return info
#Step 6: Implement the get_animal_types Method
    def get_animal_types(self):
        return sorted(self.animals.keys())
#Step 7: Implement the get_short_info Method
    def get_short_info(self):
        animal_types = self.get_animal_types()
        animal_list = []
        for animal in animal_types:
            # Add 's' for plural if count greater than 1
            animal_name = animal + 's' if self.animals[animal] > 1 else animal
            animal_list.append(animal_name)
        
        #This method should return a string like “McDonald’s farm has cows, goats and sheeps.”.
        #--> Join all animals with commas and 'and' before the last one
        if len(animal_list) == 1:
            animals_str = animal_list[0]
        else:
            animals_str = ", ".join(animal_list[:-1]) + " and " + animal_list[-1]
        
        return f"{self.name}'s farm has {animals_str}."

# Step 5: Test Your Code
macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info())