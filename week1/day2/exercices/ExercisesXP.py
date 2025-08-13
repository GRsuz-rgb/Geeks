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



#Exercise 5 : Random

#Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
#Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.
import random
def my_random(user_numb):
    if 1 <= user_numb <= 100:
        random_num = random.randint(1, 100)
        print(f"Random number generated: {random_num}")
        if user_numb == random_num:
            print("Winner!")
        else:
            print("Good luck next time.")
    else:
        print("Invalid. Enter a number between 1 and 100")

#user_number = int(input("Enter a number between 1 and 100: "))
#my_random(user_number)
my_random(int(input("Enter a number between 1 and 100: ")))



# Exercise 6 : Let’s create some personalized shirts !
#1 Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
#2 The function should print a sentence summarizing the size of the shirt and the message printed on it, such as “The size of the shirt is size and the text is text“
def make_shirt(size, message):
    print(f"The size of the shirt is : {size}  and the text is : {message}")    
#3 Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
def make_shirt(size="large", message="I love Python"):
    print(f"The size of the shirt is: {size} and the text is: {message}")
#4 Call the function, in order to make a large shirt with the default message
make_shirt()
#5 Make medium shirt with the default message
make_shirt("medium")
#6 Make a shirt of any size with a different message.
make_shirt("small", "Dōitashimashite")
#7 Bonus:
make_shirt(size="extra large", message="Sayōnara")




# Exercise 7 : Temperature Advice
#1 Create a function called get_random_temp().
#1.1 This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
import random
def get_random_temp():
    return random.randint(-10, 40)  
#1.2 Test your function to make sure it generates expected results.
print(get_random_temp())
#2 Create a function called main().
#3 Let’s add more functionality to the main() function.
#4 Change the get_random_temp() function

def get_random_temp(season):
    if season == 'winter':
        return random.randint(-10, 16)
    elif season == 'spring':
        return random.randint(0, 23)
    elif season == 'summer':
        return random.randint(23, 40)
    elif season == 'autumn' or season == 'fall':
        return random.randint(0, 32)
    
    
def main():

    season = input("Enter a season (summer, autumn, winter, spring): ").lower()
    if season not in ['summer', 'autumn', 'winter', 'spring', 'fall']:
        print("Invalid season. Enter one of the following: summer, autumn(or fall), winter, spring.")
        return
    temp = get_random_temp(season)
    print(f"The temperature right now is {temp} degrees Celsius.")

    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif 0 < temp <= 16:
        print("Quite chilly! Don't forget your coat.")
    elif 16 < temp <= 23:
        print("It's a pleasant day!")
    elif 24 <= temp <= 32:
        print("It's warm outside, stay hydrated!")
    elif 32 < temp <= 40:
        print("It's hot! drink plenty of water.")


    
main()

#Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.
def season_according_month(month):
    if month in [12, 1, 2]:
        return 'Winter'
    elif month in [3, 4, 5]:
        return 'Spring'
    elif month in [6, 7, 8]:
        return 'Summer'
    elif month in [12, 1, 2]:
        return 'Autumn'
    else:
        return -1

userMonth = int(input("Enter a month [1-12] :"))
if 1 <= userMonth <= 12:
    print(f"The season is {season_according_month(userMonth)}")


"""

# Exercise 8 : Star Wars Quiz
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]
#1 Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
def ask():
    correct= 0
    incorrect = 0
    wrong_answers = []

    for item in data:
        user_answer = input(item["question"] + " ")
        if user_answer.lower() == item["answer"].lower():
            print("Correct!\n")
            correct += 1
        else:
            print(f"Wrong! The correct answer was: {item['answer']}\n")
            incorrect += 1
            wrong_answers.append({
                "question": item["question"],
                "your_answer": user_answer,
                "correct_answer": item["answer"]
            })

    return correct, incorrect, wrong_answers

#2 Create a function that informs the user of his number of correct/incorrect answers.
def your_results(correct, incorrect, wrong_answers):
    print(f"Correct answers: {correct}")
    print(f"Incorrect answers: {incorrect}")

    if wrong_answers:
        print(" Wrong Questions: ")
        for w in wrong_answers:
            print(f"Question: {w['question']}")
            print(f" Your answer: {w['your_answer']}")
            print(f" Correct answer: {w['correct_answer']}\n")

#3 Bonus
def quiz():
    while True:
        correct, incorrect, wrong_answers = ask()
        your_results(correct, incorrect, wrong_answers)

        if incorrect > 3:
            User_choice = input("You had more than 3 wrong answers. Do you want to play again? (yes/no) ").lower()
            if User_choice != "yes":
                print("Thanks for playing!")
                break
        else:
            print("Good job!")
            break


quiz()


