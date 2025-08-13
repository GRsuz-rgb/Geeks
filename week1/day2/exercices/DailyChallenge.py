#Ask a user for a word.
word = input("Enter a word : ")
#Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

def letter_indices(word):
    indexes = {}
    for index, letter in enumerate(word):
        if letter not in indexes:
            indexes[letter] = []
        indexes[letter].append(index)
    return indexes

print(letter_indices(word))
