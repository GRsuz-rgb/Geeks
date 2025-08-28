Library Management System
A Flask-based web application for managing a library's book collection with PostgreSQL and Tailwind CSS.
Features

CRUD operations for books
Pagination (6 books per page)
Search by book title
Filter by publication year

Statistics dashboard with Chart.js
Responsive design with Tailwind CSS
Flash messages for user feedback
Many-to-many relationship between books and authors

Setup

Clone the repository:git clone <repository_url>
cd project


Install dependencies:pip install -r requirements.txt


Set up PostgreSQL:
Create a database named library_db.
Run the SQL script:psql -U postgres -d library_db -f database/seed/index.sql




Run the application:python index.py

Access at http://localhost:5001.

Database Schema

books: id, title, publication_year, isbn, created_at
authors: id, name
books_authors: book_id, author_id (many-to-many)
users: id, username, password

Default Credentials

Username: user
Password: user1234
