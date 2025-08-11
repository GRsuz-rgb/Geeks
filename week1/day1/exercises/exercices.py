# Exercise 1 : Hello World
'''
for i in range(4):
    print("Hello world")

# Exercise 2 : Some Math

res = (99 ** 3) * 8
print(res)

# Exercise 3 : What’s your name ?

my_name = "Nour" 
name = str(input("What's your name? "))
if name == my_name:
    print(f"Hello {name}, we share the same name!")
else:
    print(f"Hello {name}, I like your name!")    


#Exercise 4 : Tall enough to ride a roller coaster
user_height = int(input("Enter your height in cm: "))
if user_height >= 145:
    print("You are tall enough to ride !")    
else:
    print("Sorry, you are not tall enough to ride the roller coaster.")

'''
#Exercise 5 : Favorite Numbers

#1 Create a set of my favorite numbers

my_fav_numbers = {4, 6, 10, 16, 86, 2}

"""
my_fav_numbers = set()
my_fav_numbers.add("4")
my_fav_numbers.add("6")
my_fav_numbers.add("10")
my_fav_numbers.add("16")
my_fav_numbers.add("86")
my_fav_numbers.add("2")
"""
print(my_fav_numbers)

#2 Adding two numbers to the set
my_fav_numbers.add("3")
my_fav_numbers.add("91")
print(my_fav_numbers)

#3 Removing the last number

#my_fav_numbers.remove("91")

last_element = list(my_fav_numbers)[-1]
my_fav_numbers.remove(last_element)
print(my_fav_numbers)
