#Game class
import random

class Game:
    def get_user_item(self):
        valid_items = ['rock', 'paper', 'scissors']
        while True:
            user_choice = input("Select rock, paper, or scissors: ").lower()
            if user_choice in valid_items:
                return user_choice
            print("Invalid choice! Please select rock, paper, or scissors.")

    def get_computer_item(self):
        return random.choice(['rock', 'paper', 'scissors'])

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return 'draw'
        winning_combinations = {
            'rock': 'scissors',
            'paper': 'rock',
            'scissors': 'paper'
        }
        if winning_combinations[user_item] == computer_item:
            return 'win'
        return 'loss'

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        
        print(f"You selected {user_item}. The computer selected {computer_item}. ", end="")
        if result == 'win':
            print("You win!")
        elif result == 'loss':
            print("You lose!")
        else:
            print("You drew!")
            
        return result