from flask import Flask, render_template, request, redirect, url_for, flash
from database.index import connect_to_db
import os
from dotenv import load_dotenv
from psycopg2.extras import RealDictCursor

# Charger les variables d'environnement
load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY")


# -------------------- INDEX --------------------
@app.route("/", methods=["GET"])
def index():
    conn = connect_to_db()
    if not conn:
        return render_template("index.html", books=[], authors=[])

    cursor = conn.cursor(cursor_factory=RealDictCursor)
    cursor.execute("SELECT * FROM books ORDER BY id ASC")
    books = cursor.fetchall()

    cursor.execute("SELECT * FROM authors ORDER BY id ASC")
    authors = cursor.fetchall()

    conn.close()
    return render_template("index.html", books=books, authors=authors)


# -------------------- BOOK DETAIL --------------------
@app.route("/books/<int:id>", methods=["GET"])
def book_detail(id):
    conn = connect_to_db()
    if not conn:
        return render_template("details.html", book=None)

    cursor = conn.cursor(cursor_factory=RealDictCursor)
    cursor.execute("SELECT * FROM books WHERE id = %s", (id,))
    book = cursor.fetchone()

    cursor.execute(
        """SELECT a.* FROM authors a
           JOIN books_authors ba ON a.id = ba.author_id
           WHERE ba.book_id = %s""",
        (id,),
    )
    authors = cursor.fetchall()

    conn.close()
    return render_template("details.html", book=book, authors=authors)


# -------------------- CREATE BOOK --------------------
@app.route("/create", methods=["POST", "GET"])
def create():
    conn = connect_to_db()
    if not conn:
        return render_template("create.html", authors=[])

    cursor = conn.cursor(cursor_factory=RealDictCursor)
    cursor.execute("SELECT * FROM authors ORDER BY id ASC")
    authors = cursor.fetchall()

    if request.method == "POST":
        payload = {
            "title": request.form.get("title", "").strip(),
            "publication_year": request.form.get("publication_year", "").strip(),
            "isbn": request.form.get("isbn", "").strip(),
            "author_ids": request.form.getlist("authors"),
        }

        # Vérification
        for key, value in payload.items():
            if not value:
                flash(f"{key} is required", "error")
                return render_template("create.html", authors=authors)

        try:
            publication_year = int(payload["publication_year"])
            if len(payload["isbn"]) != 13 or not payload["isbn"].isdigit():
                raise ValueError("Invalid ISBN")
        except ValueError:
            flash("Invalid publication year or ISBN!", "error")
            return render_template("create.html", authors=authors)

        cursor.execute(
            "INSERT INTO books (title, publication_year, isbn) VALUES (%s, %s, %s) RETURNING id",
            (payload["title"], publication_year, payload["isbn"]),
        )
        book_id = cursor.fetchone()["id"]

        for author_id in payload["author_ids"]:
            cursor.execute(
                "INSERT INTO books_authors (book_id, author_id) VALUES (%s, %s)",
                (book_id, author_id),
            )

        conn.commit()
        conn.close()
        flash("Book created successfully", "success")
        return redirect(url_for("index"))

    conn.close()
    return render_template("create.html", authors=authors)


# -------------------- EDIT BOOK --------------------
@app.route("/edit/<int:id>", methods=["POST", "GET"])
def edit(id):
    conn = connect_to_db()
    if not conn:
        return render_template("edit.html", book=None, authors=[])

    cursor = conn.cursor(cursor_factory=RealDictCursor)
    cursor.execute("SELECT * FROM books WHERE id = %s", (id,))
    book = cursor.fetchone()

    cursor.execute("SELECT * FROM authors ORDER BY id ASC")
    authors = cursor.fetchall()

    if request.method == "POST":
        payload = {
            "title": request.form.get("title", "").strip(),
            "publication_year": request.form.get("publication_year", "").strip(),
            "isbn": request.form.get("isbn", "").strip(),
            "author_ids": request.form.getlist("authors"),
        }

        for key, value in payload.items():
            if not value:
                flash(f"{key.capitalize()} is required", "error")
                return render_template("edit.html", book=book, authors=authors)

        try:
            publication_year = int(payload["publication_year"])
            if len(payload["isbn"]) != 13 or not payload["isbn"].isdigit():
                raise ValueError("Invalid ISBN")
        except ValueError:
            flash("Invalid publication year or ISBN!", "error")
            return render_template("edit.html", book=book, authors=authors)

        cursor.execute(
            "UPDATE books SET title = %s, publication_year = %s, isbn = %s WHERE id = %s",
            (payload["title"], publication_year, payload["isbn"], id),
        )

        cursor.execute("DELETE FROM books_authors WHERE book_id = %s", (id,))
        for author_id in payload["author_ids"]:
            cursor.execute(
                "INSERT INTO books_authors (book_id, author_id) VALUES (%s, %s)",
                (id, author_id),
            )

        conn.commit()
        conn.close()
        flash("Book updated successfully", "success")
        return redirect(url_for("book_detail", id=id))

    conn.close()
    return render_template("edit.html", book=book, authors=authors)


# -------------------- DELETE BOOK --------------------
@app.route("/delete/<int:id>", methods=["POST"])
def delete(id):
    conn = connect_to_db()
    if not conn:
        return redirect(url_for("index"))

    cursor = conn.cursor()
    cursor.execute("DELETE FROM books_authors WHERE book_id = %s", (id,))
    cursor.execute("DELETE FROM books WHERE id = %s", (id,))
    conn.commit()
    conn.close()

    flash("Book deleted successfully", "warning")
    return redirect(url_for("index"))


# -------------------- SEARCH BOOKS --------------------
@app.route("/search", methods=["GET"])
def search():
    conn = connect_to_db()
    if not conn:
        return render_template("index.html", books=[])

    search_query = request.args.get("search", "")
    cursor = conn.cursor(cursor_factory=RealDictCursor)

    if search_query:
        cursor.execute(
            "SELECT * FROM books WHERE title ILIKE %s ORDER BY id ASC",
            (f"%{search_query}%",),
        )
    else:
        cursor.execute("SELECT * FROM books ORDER BY id ASC")

    books = cursor.fetchall()
    conn.close()
    return render_template("index.html", books=books, search_query=search_query)


# -------------------- STATS (pagination) --------------------
@app.route("/stats")
def stats():
    conn = connect_to_db()
    if not conn:
        return render_template("stats.html", books=[], page=1, total_pages=0)

    page = request.args.get("page", 1, type=int)
    per_page = 6
    offset = (page - 1) * per_page

    cursor = conn.cursor(cursor_factory=RealDictCursor)
    cursor.execute("SELECT * FROM books ORDER BY id ASC LIMIT %s OFFSET %s", (per_page, offset))
    books = cursor.fetchall()

    cursor.execute("SELECT COUNT(*) AS count FROM books")
    total_books = cursor.fetchone()["count"]
    conn.close()

    total_pages = (total_books + per_page - 1) // per_page

    return render_template("stats.html", books=books, page=page, total_pages=total_pages)


if __name__ == "__main__":
    app.run(debug=True, port=5001)
