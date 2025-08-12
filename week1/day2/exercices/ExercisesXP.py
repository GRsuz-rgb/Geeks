#Exercise 1 : Convert lists into dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

print(dict(zip(keys, values)))

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
