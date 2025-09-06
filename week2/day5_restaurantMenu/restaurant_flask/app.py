from flask import Flask, render_template, request, redirect, url_for, flash
import psycopg2
from psycopg2.extras import RealDictConnection
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY")

def get_connection():
    try:
        conn = psycopg2.connect(
            host=os.getenv("PGHOST"),
            database=os.getenv("PGDATABASE"),
            user=os.getenv("PGUSER"),
            password=os.getenv("PGPASSWORD"),
            sslmode=os.getenv("PGSSLMODE") or "prefer",
            connection_factory=RealDictConnection,
        )
        

        return conn
    except Exception as e:
        print(e)
        return None

        
#/menu → Show all menu items (list from database)
@app.route("/menu")
def menu():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT item_id, item_name, item_price FROM Menu_Items ORDER BY item_id")
    items = cur.fetchall()
    conn.close()
    return render_template("menu.html", items=items)

#/add → Form to add a new item (name + price)
@app.route("/add", methods=["GET", "POST"])
def add_item():
    if request.method == "POST":
        name = request.form.get("name")
        price = request.form.get("price")

        conn = get_connection()
        cur = conn.cursor()
        cur.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", (name, price))
        conn.commit()
        conn.close()

        flash("Item added successfully!", "success")
        return redirect(url_for("menu"))
    
    return render_template("add_item.html")

#/delete/<item_id> → Delete an item by ID
@app.route("/delete/<int:item_id>")
def delete_item (item_id):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM Menu_Items WHERE item_id = %s", (item_id,))
    conn.commit()
    conn.close()

    flash("Item deleted successfully!", "info")
    return redirect(url_for("menu"))


#/update/<item_id> → Form to update an item’s name and/or price
@app.route("/update/<int:item_id>", methods=["GET", "POST"])
def update_item(item_id):
    conn = get_connection()
    cur = conn.cursor()

    if request.method == "POST":
        new_name = request.form.get("name")
        new_price = request.form.get("price")

        cur.execute("UPDATE Menu_Items SET item_name=%s, item_price=%s WHERE item_id=%s", (new_name, new_price, item_id))
        conn.commit()
        conn.close()

        flash("Item updated successfully!", "success")
        return redirect(url_for("menu"))
    
    #GET 
    cur.execute("SELECT item_id, item_name, item_price FROM Menu_Items WHERE item_id=%s", (item_id,))
    item = cur.fetchone()
    conn.close()

    if not item:
        flash("Item not found!", "danger")
        return redirect(url_for("menu"))
    
    return render_template("update_item.html", item=item)



if __name__ == "__main__":
    app.run(debug=True, port=5000)

