from flask import Flask, render_template, request, redirect, url_for, flash
from database.index import connect_to_db
import os
from dotenv import load_dotenv
from  psycopg2.extras import RealDictCursor

app = Flask(__name__)

app.secret_key = os.getenv('SECRET_KEY')


@app.route('/', methods=['GET'])
def index():
    conn = connect_to_db()
    if not conn:
        return render_template('index.html', books=[], authors=[])

    cursor = conn.cursor()
    cursor.execute("SELECT * FROM books")
    books = cursor.fetchall()
    
    cursor.execute("SELECT * FROM authors")
    authors = cursor.fetchall()

    conn.close()
    return render_template('index.html', books=books, authors=authors)


@app.route('/books/<int:id>', methods=['GET'])
def book_detail(id):
    conn = connect_to_db()
    if not conn:
        return render_template('details.html', book=None)

    cursor = conn.cursor()
    cursor.execute("SELECT * FROM books WHERE id = %s", (id,))
    book = cursor.fetchone()
    conn.close()
    return render_template('details.html', book=book)


@app.route('/create', methods=['POST', 'GET'])
def create():
    conn = connect_to_db()
    if not conn:
        return render_template('index.html', books=[], authors=[])

   # conn = connect_to_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM authors")
    authors = cursor.fetchall()

    if request.method == 'POST':
        payload = {
            'title': request.form.get('title', ''),
            'publication_year': request.form.get('publication_year', ''),
            'isbn': request.form.get('isbn', ''),
            'author_ids': request.form.getlist('authors')
        }

        for key, value in payload.items():
            if not value:
                flash(f'{key} is required', 'error')
                return render_template('create.html', authors=authors)
    
        try:
            publication_year = int(payload['publication_year'])
            if len(payload['isbn']) != 13 or not payload['isbn'].isdigit():
                raise ValueError('Invalid ISBN')
        except ValueError:
            flash('Invalid publication year or ISBN!', 'error')
            return render_template('create.html', authors=authors)
        
        cursor.execute(
            "INSERT INTO books (title, publication_year, isbn) VALUES (%s, %s, %s) RETURNING id",
            (payload['title'], payload['publication_year'], payload['isbn'])
        )
        book_id = cursor.fetchone()[0]

        for author_id in payload['author_ids']:
            cursor.execute("INSERT INTO books_authors (book_id, author_id) VALUES (%s, %s)", (book_id, author_id))
        
        conn.commit()
        conn.close()  
        flash('Book created successfully', 'success')
        return redirect(url_for('index'))
        
    conn.close()
    return render_template('create.html', authors=authors)


@app.route('/edit/<int:id>', methods=['POST', 'GET'])
def edit(id):
    conn = connect_to_db()
    if not conn:
        return render_template('edit.html', book=None, authors=[])

    cursor = conn.cursor()
    cursor.execute("SELECT * FROM books WHERE id = %s", (id,))
    book = cursor.fetchone()
    cursor.execute("SELECT * FROM authors")
    authors = cursor.fetchall()

    if request.method == 'POST':
        payload = {
            'title': request.form.get('title', ''),
            'publication_year': request.form.get('publication_year', ''),
            'isbn': request.form.get('isbn', ''),
            'author_ids': request.form.getlist('authors')
        }

        for key, value in payload.items():
            if not value:
                flash(f'{key.capitalize()} is required', 'error')
                return render_template('edit.html', book=book, authors=authors)

        try:
            publication_year = int(payload['publication_year'])
            if len(payload['isbn']) != 13 or not payload['isbn'].isdigit():
                raise ValueError('Invalid ISBN')
        except ValueError:
            flash('Invalid publication year or ISBN!', 'error')
            return render_template('edit.html', book=book, authors=authors)

        cursor.execute(
            "UPDATE books SET title = %s, publication_year = %s, isbn = %s WHERE id = %s",
            (payload['title'], payload['publication_year'], payload['isbn'], id)
        )
        cursor.execute("DELETE FROM books_authors WHERE book_id = %s", (id,))
        for author_id in payload['author_ids']:
            cursor.execute("INSERT INTO books_authors (book_id, author_id) VALUES (%s, %s)", (id, author_id))

        conn.commit()
        conn.close()
        flash('Book updated successfully', 'success')
        return redirect(url_for('book_detail', id=id))

    conn.close()
    return render_template('edit.html', book=book, authors=authors)


@app.route('/delete/<int:id>', methods=['POST'])
def delete(id):
    conn = connect_to_db()
    if not conn:
        return redirect(url_for('index'))

    cursor = conn.cursor()
    cursor.execute("DELETE FROM books WHERE id = %s", (id,))
    conn.commit()
    conn.close()

    flash('Book deleted successfully', 'warning')
    return redirect(url_for('index'))


@app.route('/search', methods=['GET'])
def search():
    conn = connect_to_db()
    if not conn:
        return render_template('index.html', books=[], authors=[])

    search_query = request.args.get('search', '')
    query = "SELECT * FROM books"
    params = []
    if search_query:
        query += " WHERE title ILIKE %s"
        params.append(f'%{search_query}%')

    cursor = conn.cursor()    
    cursor.execute(query, params)
    books = cursor.fetchall()
    conn.close()
    return render_template('index.html', books=books, search_query=search_query)


@app.route("/stats")
def stats():
    conn = connect_to_db()
    if not conn:
        return render_template('index.html', books=[], authors=[])

    page = request.args.get("page", 1, type=int)   # Numéro de page (défaut = 1)
    per_page = 6  # 6 items par page
    offset = (page - 1) * per_page

    
    books = conn.execute("SELECT * FROM books LIMIT ? OFFSET ?", (per_page, offset)).fetchall()
    total_books = conn.execute("SELECT COUNT(*) as count FROM books").fetchone()["count"]
    conn.close()

    total_pages = (total_books + per_page - 1) // per_page  # arrondi supérieur

    return render_template(
        "stats.html",
        books=books,
        page=page,
        total_pages=total_pages
    )

if __name__ == '__main__':
    app.run(debug=True, port=5001)
