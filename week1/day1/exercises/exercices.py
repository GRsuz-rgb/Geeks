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

#4 Create a set called friend_fav_numbers with my friend’s favorites numbers.

friend_fav_numbers = {1, 43, 36, 56, 7}
print(friend_fav_numbers)

#5 Concatenating sets
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)


# Exercise 6: Tuple
tuple = (11, 2, 3, 45, 38, 7, 8, 66)
print(tuple)
print("no we can't add more integers to the tuple, tuples are unchangeable(immutable)")


# Exercise 7: List
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print(basket)

#remove Banana 
basket.remove("Banana")
print(basket)
#remove Blueberries
basket.remove("Blueberries")
print(basket)
#Add Kiwi to the end of the list
basket.append("Kiwi")
print(basket)
#Add Apples to the beginning of the list
basket.insert(0, "Apples")
print(basket)
#Count how many apples are in the basket
apples_count = basket.count("Apples")
print(f"There are {apples_count} apples in the basket.")
#Empty the basket
basket.clear()
print("The basket is empty!")

print(basket)


#Exercise 8 : Sandwich Orders