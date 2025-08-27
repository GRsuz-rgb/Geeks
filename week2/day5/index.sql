
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    publication_year INTEGER NOT NULL,
    isbn VARCHAR(13) UNIQUE NOT NULL,
    creation_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE books_authors (
    book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
    author_id INTEGER REFERENCES authors(id) ON DELETE CASCADE,
    PRIMARY KEY (book_id, author_id)
);

-- database seeding
INSERT INTO users (username, password) VALUES
('user', 'user1234');

INSERT INTO books (title, publication_year, isbn) VALUES
('1984', 1949, '9780451524935'),
('The Great Gatsby', 1925, '9780743273565'),
('To Kill a Mockingbird', 1960, '9780446310789'),
('Pride and Prejudice', 1813, '9780141439518'),
('The Catcher in the Rye', 1951, '9780316769488'),
('Lord of the Flies', 1954, '9780399501487'),
('Animal Farm', 1945, '9780451526342'),
('Brave New World', 1932, '9780060850524'),
('The Hobbit', 1937, '9780547928227'),
('Fahrenheit 451', 1953, '9781451673319');

INSERT INTO authors (name) VALUES
('George Orwell'),
('F. Scott Fitzgerald'),
('Harper Lee'),
('Jane Austen'),
('J.D. Salinger'),
('William Golding'),
('Aldous Huxley'),
('J.R.R. Tolkien'),
('Ray Bradbury'),
('Charlotte Brontë');

INSERT INTO books_authors (book_id, author_id) VALUES
(1, 1), (2, 2), (3, 3), (4, 4), (5, 5),
(6, 6), (7, 3), (8, 7), (9, 8), (10, 9);