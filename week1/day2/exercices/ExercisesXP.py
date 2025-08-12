#Exercise 1 : Convert lists into dictionaries
"""
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

print(dict(zip(keys, values)))

"""

#Exercise 2 : Cinemax #2
#A movie theater charges different ticket prices depending on a person’s age.

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
#1 How much does each family member have to pay ?
for name, age in family.items():
    if age < 3:
        print(f"{name} ticket is free")
    elif 3 <= age <= 12:
        print(f"{name} pays: $10")
    else:
        print(f"{name} pays: $15")

#2 Print out the family’s total cost for the movies.
total = 0
for age in family.values():
    if age < 3:
        continue
    elif 3 <= age <= 12:
        total += 10
    else:
        total += 15

print(f"The total cost for the family is: ${total}")

#3 Bonus: Ask the user to input the names and ages instead of using the provided family variable 
# (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).
user_family = {}
while True:
    name = input("Enter family member's name (or tape x to finish) : ")
    if name.lower() == 'x':
        break
    age = int(input(f"Enter {name}'s age: "))
    user_family[name] = age
print("User's family:", user_family)



