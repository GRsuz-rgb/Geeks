# Exercise 1: What is the Season?
'''
#1 Ask the user to input a month (1 to 12).
user_month = int(input("Enter a month (1-12) : "))

#2 Display the season of the month received:
#Spring runs from March (3) to May (5)
#Summer runs from June (6) to August (8)
#Autumn runs from September (9) to November (11)
#Winter runs from December (12) to February (2)

if user_month in {3, 4, 5}:
    print("Spring")
elif user_month in {6, 7, 8}:
    print("Summer")
elif user_month in {9, 10, 11}:
    print("Autumn")
elif user_month in {12, 1, 2}:    
    print("Winter")
else:
    print("Invalid! Please enter a number between 1 and 12.")  



#Exercise 2: For Loop
#1 Use a for loop to print all numbers from 1 to 20, inclusive.

for n in range(1, 21):
    print(n)

#2 Using a for loop, that loops from 1 to 20 (inclusive), print out every element which has an even index. 
for y in range(1, 21):
    if y % 2 == 0:
        print(y)



# Exercise 3: While Loop
#Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.
my_name = "maria"
user_name = input("Enter your name : ")
while True:
    if user_name == my_name:
        print(f"Welcome {user_name}!")
        break
    else:
        user_name = input("Enter your name again: ")

        
#Exercise 4: Check the index
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

#Ask a user for their name, if their name is in the names list print out the index of the first occurrence of the name
u_name = input("Enter your name : ")
cap_name = u_name.capitalize()
if cap_name in names:
    print(f"The index of your name is : {names.index(cap_name)}")
else:
    print("Your name is not in the list.")


'''

#Exercise 5: Greatest Number
#Ask the user for 3 numbers and print the greatest number.
number1 = int(input("Enter the first number: "))
number2 = int(input("Enter the second number: "))
number3 = int(input("Enter the third number: "))

if number1 >= number2 and number1 >= number3:
    print(f"The greatest number is: {number1}")
elif number2 >= number1 and number2 >= number3:
    print(f"The greatest number is: {number2}")
else:
    print(f"The greatest number is: {number3}")
