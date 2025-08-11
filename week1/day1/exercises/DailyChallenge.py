#Challenge 1
#1 Ask the user for a number and a length.

number = int(input("Enter your number: "))
length = int(input("Enter the length of the sequence: "))

#2 Create a program that prints a list of multiples of the number until the list length reaches length

multiples_number = []
for x in range(length):
    multiples_number.append(number * (x + 1))
print(f"The list of multiples of {number} is: {multiples_number}")



#Challenge 2
#Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.

user_string = input("Enter your string : ")
new_string = ""
for x in range(len(user_string)):
    if user_string[x] != user_string[x-1] or x == 0:
        new_string += user_string[x]
print(f"The new string without consecutive duplicates is: {new_string}")