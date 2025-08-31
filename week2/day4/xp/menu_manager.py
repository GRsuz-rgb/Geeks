import psycopg2
from menu_item import MenuItem, conn 
# In the file menu_manager.py, create a new class called MenuManager
class MenuManager():
    @classmethod
    def get_by_name(cls, name):
        cur = conn.cursor()
        cur.execute("SELECT item_name, item_price FROM Menu_Items WHERE item_name=%s", (name,))
        row = cur.fetchone()
        if row :
            return MenuItem(row[0], row[1])
        return None
    conn.close()

    @classmethod
    def get_by_name(cls):
        cur = conn.cursor()
        items = []
        cur.execute("SELECT item_name, item_price FROM Menu_Items")
        rows = cur.fetchall()
        for row in rows:
            items.append(MenuItem(row[0], row[1]))
        return items
    conn.close()    
        

 