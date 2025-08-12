#Exercise 1 : Convert lists into dictionaries
"""
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

#3 Bonus:
user_family = {}
while True:
    name = input("Enter family member's name (or tape x to finish) : ")
    if name.lower() == 'x':
        break
    age = int(input(f"Enter {name}'s age: "))
    user_family[name] = age
print("User's family:", user_family)




#Exercise 3: Zara
#1. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
#The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes":
        ["men, women, children, home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],

    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}
#2. Change the number of stores to 2.
brand["number_stores"] = 2
#3. Use the key [type_of_clothes] to print a sentence that explains who Zaras clients are.
print(f"Zara's clients are {', '.join(brand['type_of_clothes'])}.")
#4. Add a key called country_creation with a value of Spain.
brand["country_creation"] = "Spain"
#5. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")  
#6. Delete the information about the date of creation.
del brand["creation_date"]
#7. Print the last international competitor.
print(f"The last international competitor is {brand["international_competitors"][-1]}")
#8. Print the major clothes colors in the US.
print(f"The major clothes colors in the USA are {brand["major_color"]["US"]}")
#9. Print the amount of key value pairs (ie. length of the dictionary).
print(f"The amount of key value pairs : {len(brand)}")
#10. Print the keys of the dictionary.
print(f"The keys of the dictionnary {brand.keys()}")
#11. Create another dictionary called more_on_zara with the following details:
#- creation_date: 1975
#- number_stores: 10 000
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}
#12. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
brand.update(more_on_zara)
print("Updated brand dictionary:", brand)
#13. Print the value of the key number_stores. What just happened ?
print(f"The number stores : {brand["number_stores"]}") 




#Exercise 4 : Some Geography
#1 Write a function called describe_city() that accepts the name of a city and its country as parameters.
#2 The function should print a simple sentence, such as “city is in country”.(For example Reykjavik is in Iceland)
#3 Give the country parameter a default value.
def describe_city(city, country="Japan"):
    print(f"{city} is in {country}.")
#4 Call your function.
describe_city("Rabat", "Morocco")
describe_city("Nagoya")

"""
