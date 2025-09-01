from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu(self):
    while True:
        print("\n****** MENU MANAGER ******")
        print("(V) View an Item")
        print("(A) Add an Item")
        print("(D) Delete an Item")
        print("(U) Update an Item")
        print("(S) Show Restaurant Menu")
        print("(E) Exit")

        choice = input("Enter your choice : ").upper()
        if choice == "V":
            name = input("Enter item name : ")
            item = MenuManager.get_by_name(name)
            if item:
                print(f"Item found: {item.name} {item.price}")
            else:
                print("Item not found!")    
        elif choice == "A":
            add_item_to_menu()
        elif choice == "D":
            remove_item_from_menu()
        elif choice == "U":
            update_item_from_menu()
        elif choice == "S":
            show_restaurant_menu()       
        elif choice == "E":
            print("Exiting... Final Menu:")
            show_restaurant_menu()
            break
        else:
            print("Invalid choice.Try again!")

def add_item_to_menu(self):
    name = input("Enter item name : ")
    price = int(input("Enter item price : "))
    item = MenuItem(name, price)
    item.save()

def remove_item_from_menu(self):
    name = input("Enter item name to delete : ")
    item = MenuItem(name)
    item.delete()

def update_item_from_menu(self):
    old_name = input("Enter the current name of the item :")
    new_name = input("Enter the new name : ")
    new_price = int(input("Enter the new price : "))
    item = MenuItem(old_name, 0)
    item.update(new_name, new_price)

def show_restaurant_menu(self):
    print("\n****Restaurant Menu****")
    items = MenuManager.all_items()
    for item in items: 
        print(f"{item.name} : {item.price}")
        
