import psycopg2 
# conection to database
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'postgresql'
DATABASE = 'restaurant'

conn = psycopg2.connect(
                        host=HOSTNAME,
                        user=USERNAME, 
                        password=PASSWORD,
                        dbname=DATABASE 
                        )

#2- In the file menu_item.py, create a new class called MenuItem, the attributes should be the name and price of each item.
class MenuItem():
    def __init__(self, name, price):
        self.name = name
        self.price = price

#3- Create several methods (save, delete, update) these methods will allow a user to save, delete and update items from the Menu_Items table. The update method can update the name as well as the price of an item.
    def save(self):
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", (self.name, self.price)
        )
        conn.commit()
        print(f"{self.name} added successfully.")

        conn.close()

    def delete(self):
        cur = conn.cursor()
        cur.execute(
            "DELETE FROM Menu_Items WHERE item_name = %s", (self.name,)
        )
        conn.commit()
        conn.close()

    def update(self, new_name, new_price):
        cur = conn.cursor()
        cur.execute("UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s", (new_name, new_price, self.name)
        )
        conn.close()









