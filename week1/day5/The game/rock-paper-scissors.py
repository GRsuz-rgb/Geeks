#functions to show main menu
from game import Game

def get_user_menu_choice():
    valid_choices = ['p', 's', 'q']
    print("\nMenu:")
    print("p - Play a new game")
    print("s - Show scores")
    print("q - Quit")
    choice = input("Enter your choice: ").lower()
    while choice not in valid_choices:
        print("Invalid choice! Please select p, s, or q.")
        choice = input("Enter your choice: ").lower()
    return choice

def print_results(results):
    print("\nGame Results Summary:")
    print(f"Wins: {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws: {results['draw']}")
    print("Thank you for playing!")

def main():
    results = {'win': 0, 'loss': 0, 'draw': 0}
    
    while True:
        choice = get_user_menu_choice()
        
        if choice == 'p':
            game = Game()
            result = game.play()
            results[result] += 1
        elif choice == 's':
            print_results(results)
        elif choice == 'q':
            print_results(results)
            break

if __name__ == "__main__":
    main()